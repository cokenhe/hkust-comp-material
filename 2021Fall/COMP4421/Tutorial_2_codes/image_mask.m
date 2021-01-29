f = imread('charles_butter_2.jpg');


%%%% average filter %%%%
figure
n = 3; % mask size
mask = (1/(n*n))*ones(n,n);
g = imfilter(f,mask);
subplot(1,4,1), imshow(g), title('average filter 3x3');

n = 10;
mask = (1/(n*n))*ones(n,n);
g = imfilter (f, mask);
subplot(1,4,2), imshow(g), title('average filter 10x10');

n = 20;
mask = (1/(n*n))*ones(n,n);
g = imfilter (f, mask);
subplot(1,4,3), imshow(g), title('average filter 20x20');

n = 20;
mask = fspecial('average',[n,n]);
g = imfilter (f, mask, 'replicate'); % assume out of bound pixels equal to the nearest pixel. 
subplot(1,4,4), imshow(g), title('average filter 20x20 (replicate)');



%%%% median filter %%%%
figure
g = medfilt2(f,[3 3]);
subplot(1,3,1), imshow(g), title('median filter 3x3');

g = medfilt2(f,[10 10]);
subplot(1,3,2), imshow(g), title('median filter 10x10');

g = medfilt2(f,[20 20]);
subplot(1,3,3), imshow(g), title('median filter 20x20');



%%%% gradient mask %%%%
figure
mask = fspecial('prewitt') ; % emphasize horizontal edges by approximating a vertical gradient
g = imfilter(f, mask);
subplot(1,2,1), imshow(g), title('prewitt');

mask = fspecial('sobel'); % weights closer neighbor a little more
g = imfilter(f, mask'); % take transpose to emphasize vertical edges
subplot(1,2,2), imshow(g), title('sobel transpose');


