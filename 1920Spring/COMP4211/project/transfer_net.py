import torch.nn as nn
from layers import *

class TransferNet(nn.Module):
    def __init__(self, config_path):
        super(TransferNet, self).__init__()
        
        self.conv1 = Convolution(3, 32, kernel_size=9, stride=1)
        self.cin1 = ConditionalInstanceNorm2d(32, config_path)
        
        self.conv2 = Convolution(32, 64, kernel_size=3, stride=2)
        self.cin2 = ConditionalInstanceNorm2d(64, config_path)
        
        self.conv3 = Convolution(64, 128, kernel_size=3, stride=2)
        self.cin3 = ConditionalInstanceNorm2d(128, config_path)

        self.res1 = ResidualBlock(128, config_path)
        self.res2 = ResidualBlock(128, config_path)
        self.res3 = ResidualBlock(128, config_path)
        self.res4 = ResidualBlock(128, config_path)
        self.res5 = ResidualBlock(128, config_path)

        self.deconv1 = Upsampling(128, 64, config_path)
        self.deconv2 = Upsampling(64, 32, config_path)
        
        self.conv4 = Convolution(32, 3, kernel_size=9, stride=1)

        self.relu = nn.ReLU()

    def forward(self, X):
        y = self.relu(self.cin1(self.conv1(X)))
        y = self.relu(self.cin2(self.conv2(y)))
        y = self.relu(self.cin3(self.conv3(y)))

        y = self.res1(y)
        y = self.res2(y)
        y = self.res3(y)
        y = self.res4(y)
        y = self.res5(y)

        y = self.deconv1(y)
        y = self.deconv2(y)
        y = self.conv4(y)

        return y