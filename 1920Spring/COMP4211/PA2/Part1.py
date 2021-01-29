#!/usr/bin/env python
# coding: utf-8

# In[1]:


import torch
import torch.nn as nn
import torch.optim as optim
import torchvision
import torchvision.transforms as transforms
from torchsummary import summary
from torch.utils.data import Dataset, DataLoader, random_split
from torch.autograd import Variable

from PIL import Image
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os


# In[2]:


image_path = '/store/comp4211/part1_data/images/'
train_path = '/store/comp4211/part1_data/train.csv'
test_path = '/store/comp4211/part1_data/test.csv'
submission_path = '/store/comp4211/part1_data/submission.csv'

IMAGE_DIM = 128


device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')
dtype = {
    'cpu': torch.FloatTensor,
    'cudo:0': torch.cuda.FloatTensor
}
print(device)


# In[3]:


RandomHorizontalFlip = transforms.Compose([transforms.RandomHorizontalFlip(p=0.9)]) 
RandomAffine = transforms.Compose([transforms.RandomAffine(degrees=45)]) 
RandomCrop = transforms.Compose([transforms.RandomCrop(size=30)]) 

transform = transforms.Compose([
#      transforms.ToPILImage(),
     transforms.Resize(IMAGE_DIM),
     transforms.RandomHorizontalFlip(p=0.5), # data augmentation by fliping 
     transforms.ToTensor(),    # range [0, 255] -> [0.0,1.0]
     transforms.Normalize((0.5, 0.5, 0.5 ), (0.5, 0.5, 0.5))
    ])   # channel=（channel-mean）/std  -> [-1, 1]


# In[4]:


class PosterDataset(Dataset):
    def __init__(self, csv_file, root_dir, transform=None):
        self.part_csv = pd.read_csv(csv_file)
        self.root_dir = root_dir
        self.transform = transform

    def __getitem__(self, idx):
        if torch.is_tensor(idx):
            idx = idx.tolist()
        img_names = os.path.join(self.root_dir, str(self.part_csv.iloc[idx, 0]))
#         images = plt.imread(img_names+'.jpg')
#         normalized_image = images / 255.0
            
        images = Image.open(img_names+'.jpg').convert('RGB')
        
        if self.transform:
            images = self.transform(images)

        labels = self.part_csv.iloc[idx, 1:]
#         print('iange', images.shape, 'labels', torch.tensor(labels))
      
        return (torch.tensor(images), torch.tensor(labels))
            
    def __len__(self):
        return len(self.part_csv)


# In[5]:


train_csv = pd.read_csv(train_path)
total_train_size = train_csv.shape[0]

BATCH_SIZE = 32
NUM_TRAIN = int(total_train_size * 0.8)
NUM_VAL = total_train_size - NUM_TRAIN

all_train_dataset = PosterDataset(train_path, image_path, transform)

train_dataset, val_dataset = random_split(all_train_dataset, [NUM_TRAIN, NUM_VAL])

train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, shuffle=True, num_workers=2)
val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE, shuffle=True, num_workers=2)

test_dataset = PosterDataset(test_path, image_path)
test_loader = DataLoader(test_dataset, batch_size=BATCH_SIZE, shuffle=True, num_workers=2)

genres = train_csv.columns.tolist()[1:]
len(genres)


# In[6]:


class Flatten(nn.Module):
    def forward(self, x):
        N, C, H, W = x.size() # read in N, C, H, W
        return x.view(N, -1)


# In[11]:


model_base = nn.Sequential(
    nn.Conv2d(3, 128, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.Conv2d(128, 128, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.Conv2d(128, 128, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.BatchNorm2d(128),
    nn.MaxPool2d(2, stride=2),

    nn.Conv2d(128, 64, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.Conv2d(64, 64, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.Conv2d(64, 64, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.BatchNorm2d(64),
    nn.MaxPool2d(2, stride=2),

    nn.Conv2d(64, 32, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.Conv2d(32, 32, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.Conv2d(32, 16, kernel_size=3, stride=1),
    nn.ReLU(),
    nn.BatchNorm2d(16),
    nn.MaxPool2d(2, stride=2),
    
    Flatten(), # see above for explanation
    nn.Linear(2880, 256),
    nn.ReLU(),
    nn.Dropout(),
    nn.Linear(256, 128),
    nn.ReLU(),
    nn.Dropout(),

    nn.Linear(128, 7),
)

model = model_base#.type(dtype)

# summary(model, input_size=(3, 32, 32))


# In[8]:


def save_checkpoint(save_path, model, optimizer, val_loss):
    if save_path==None:
        return
    save_path = save_path 
    state_dict = {'model_state_dict': model.state_dict(),
                  'optimizer_state_dict': optimizer.state_dict(),
                  'val_loss': val_loss}

    torch.save(state_dict, save_path)

    print(f'Model saved to ==> {save_path}')

def load_checkpoint(model, optimizer):
    save_path = f'cifar_net.pt'
    state_dict = torch.load(save_path)
    model.load_state_dict(state_dict['model_state_dict'])
    optimizer.load_state_dict(state_dict['optimizer_state_dict'])
    val_loss = state_dict['val_loss']
    print(f'Model loaded from <== {save_path}')
    
    return val_loss

tmp = None

def TRAIN(net, train_loader, valid_loader, threshold, num_epochs, eval_every, total_step, criterion, optimizer, val_loss, device, save_name):
    
    running_loss = 0.0
    running_corrects = 0
    running_num = 0
    global_step = 0
    if val_loss==None:
        best_val_loss = float("Inf")  
    else: 
        best_val_loss=val_loss
    

    for epoch in range(num_epochs):  # loop over the dataset multiple times

        for i, (inputs, labels) in enumerate(train_loader):
            net.train()
            inputs = inputs.to(device)
            labels = labels.to(device)

            '''Training of the model'''
            # Forward pass
            outputs = net(inputs)
            preds = (outputs + 1) / 2             # normalise => [0, 1]
            preds = torch.sum((preds > threshold) * 1 == labels.data, dim=1)
            
            loss = criterion(outputs, labels.type_as(outputs))

            # Backward and optimize
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            global_step += 1
            
            running_loss += loss.item()
            # running_corrects += torch.sum(preds == 7 * 1)
            running_corrects += torch.sum(preds / 7)
            running_num += len(labels)

            '''Evaluating the model every x steps'''
            if global_step % eval_every == 0:
                with torch.no_grad():
                    net.eval()
                    val_running_loss = 0.0
                    val_running_corrects = 0
                    for val_inputs, val_labels in valid_loader:
                        val_inputs = val_inputs.to(device)
                        val_labels = val_labels.to(device)
                        val_outputs = net(val_inputs)
                        val_loss = criterion(val_outputs, val_labels.type_as(val_outputs))
                        preds = (val_outputs + 1) / 2             # normalise => [0, 1]
                        print((preds > threshold) * 1)
                        preds = torch.sum((preds > threshold) * 1 == val_labels.data, dim=1)
                        print(val_labels.data)
                        print(torch.sum(preds == 7 * 1), len(valid_loader))
                        val_running_loss += val_loss.item()
                        val_running_corrects += torch.sum(preds / 7)
                        # val_running_corrects += torch.sum(preds == 7 * 1)


                    average_train_loss = running_loss / eval_every
                    average_val_loss = val_running_loss / len(valid_loader)
                    average_train_acc = running_corrects / float(running_num)
                    average_val_acc = val_running_corrects / float(len(valid_loader))

                    print('Epoch [{}/{}], Step [{}/{}], Train Loss: {:.4f}, Train Acc: {:.4f}, Valid Loss: {:.4f},  Valid Acc: {:.4f}'
                          .format(epoch+1, num_epochs, global_step, total_step, average_train_loss,
                                  average_train_acc, average_val_loss, average_val_acc))

                    running_loss = 0.0
                    running_num = 0
                    running_corrects = 0
                    
                    if average_val_loss < best_val_loss:
                        best_val_loss = average_val_loss
                        save_checkpoint(save_name, net, optimizer, best_val_loss)
                    
                    

    print('Finished Training')

threshold = 0.5
num_epochs = 10
eval_every = 100
total_step = len(train_loader)*num_epochs
best_val_loss = None
save_path = f'cifar_net.pt'
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), 5e-4)
model = model.to(device)

TRAIN(model, train_loader, val_loader, threshold, num_epochs, eval_every, total_step, criterion, optimizer, best_val_loss, device, save_path)


from sklearn.metrics import classification_report


def eval(model, test_loader):
    y_test = []
    y_pred = []
    with torch.no_grad():
        for inputs, labels in test_loader:
            model.eval()
            outputs = model(inputs)
            _, predicted = torch.max(outputs, 1)
            y_pred.append(predicted.item())
            y_test.append(labels.item())

    print(classification_report(y_test, y_pred))


eval(model, valid_loader)



