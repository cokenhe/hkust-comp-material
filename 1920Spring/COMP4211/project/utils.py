from PIL import image
import matplotlib.pyplot as plt
import torchvision.transforms as transforms

def imshow(tensor, title=None):
    image = tensor.cpu().clone()  # we clone the tensor to not do changes on it
    image = image.squeeze(0) # remove the fake batch dimension
    image = transforms.functional.to_pil_image(image)
    plt.imshow(image)
    if title is not None:
        plt.title(title)


def load_style_images_from_artist(id, max_sample=0):
    images = []
    path = 'image/styles/%s' % artist_subfolder[id]
    print('Artist Name: %s (id: %d)' % (artist_subfolder[id], id))
    files = [f for f in os.listdir(path)]    
    for i, f in enumerate(files):
        images.append(tform(Image.open('%s/%s' % (path, f))).unsqueeze(0))
        if i % 10 == 0:
            print('\rImage loaded: %d / %d' % (i+1, len(files)), end='')
        if max_sample > 0 and i + 1 >= max_sample:
            print('\rImage loaded: %d / %d' % (i+1, len(files)))
            print('Max_sample reached, stopping...')
            return torch.cat(images, 0)
    print('\rImage loaded: %d / %d' % (i+1, len(files)))
    return torch.cat(images, 0)