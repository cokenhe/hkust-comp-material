import torch
import torch.nn as nn
import json
from functools import reduce

class ConditionalInstanceNorm2d(nn.Module):
    """
    Ref: https://arxiv.org/abs/1610.07629
    @param config : JSON in format of (style_id : weighting (0,1])
    """
    def __init__(self, in_channels, config_path):
        super(ConditionalInstanceNorm2d, self).__init__()
        with open(config_path) as f:
            self.config = json.load(f)
        self.style_num = len(self.config)
        self.num_features = in_channels
        self.inst_norm = torch.nn.InstanceNorm2d(in_channels, affine=False)
        self.embed = torch.nn.Embedding(self.style_num, in_channels * 2)
        self.embed.weight.data[:, :in_channels].normal_(1, 0.02)  # Initialise scale at N(1, 0.02)
        self.embed.weight.data[:, in_channels:].zero_()  # Initialise bias at 0

    def forward(self, x):
        out = self.inst_norm(x)
        gamma, beta = self.embed([id for (id, weight) in self.config]).chunk(2, 1)
        out = gamma.view(-1, self.num_features, 1, 1) * out + beta.view(-1, self.num_features, 1, 1)
        return out

class Convolution(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size=3, stride=1):
        super(Convolution, self).__init__()
        padding_size = kernel_size // 2
        self.reflect_pad = nn.ReflectionPad2d(padding_size)
        self.conv = nn.Conv2d(in_channels, out_channels, kernel_size, stride)

    def forward(self, x):
        out = self.reflect_pad(x)
        out = self.conv(out)
        return out


class ResidualBlock(nn.Module):
    def __init__(self, channels, config_path):
        super(ResidualBlock, self).__init__()
        self.conv1 = Convolution(channels, channels, kernel_size=3, stride=1)
        self.cin1 = ConditionalInstanceNorm2d(channels, config_path)
        self.conv2 = Convolution(channels, channels, kernel_size=3, stride=1)
        self.cin2 = ConditionalInstanceNorm2d(channels, config_path)

    def forward(self, x):
        residual = x
        out = nn.ReLU(self.cin1(self.conv1(x)))
        out = self.cin2(self.conv2(out))
        return out + residual

class Upsampling(nn.Module):
    """
    Ref: https://arxiv.org/abs/1610.07629
    Nearest-neighbor interpolation with factor 2
    followed by a convolution
    """
    def __init__(self, in_channels, out_channels, config_path, kernel_size=3, stride=1, scale_factor=2):
        super(Upsampling, self).__init__()
        self.scale_factor = scale_factor
        if scale_factor:
            self.upsampling = nn.Upsample(scale_factor=scale_factor, mode='nearest')
        # padding_size = kernel_size // 2
        # self.reflect_pad = nn.ReflectionPad2d(padding_size)
        # self.conv = nn.Conv2d(in_channels, out_channels, kernel_size, stride)
        self.conv = Convolution(in_channels, out_channels, kernel_size=kernel_size, stride=stride)
        self.cin = ConditionalInstanceNorm2d(out_channels, config_path)

    def forward(self, x):
        out = x
        if self.scale_factor:
            out = self.upsampling(out)
        # out = self.reflect_pad(out)
        out = nn.ReLU(self.cin(self.conv(out)))
        return out