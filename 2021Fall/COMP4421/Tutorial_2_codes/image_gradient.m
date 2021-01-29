f = imread('charles_butter_2.jpg');

[fx,fy] = gradient(double(f));

df = sqrt(fx.^2+fy.^2);

figure;
subplot(2,2,1), imshow(f), title('original');
subplot(2,2,2), imshow(uint8(fx)), title('df/dx');
subplot(2,2,3), imshow(uint8(fy)), title('df/dy');
subplot(2,2,4), imshow(uint8(df)), title('magnitude');

b_cutoff = 12;
figure
subplot(2,2,1), imshow(histeq(df, [32,32])), title('hist eq');
subplot(2,2,2), imshow(uint8((fx>b_cutoff) * 255)), title('df/dx');
subplot(2,2,3), imshow(uint8((fy>b_cutoff) * 255)), title('df/dy');
subplot(2,2,4), imshow(uint8((df>b_cutoff) * 255)), title('magnitude');

figure
mask = fspecial('prewitt') ; % emphasize horizontal edges by approximating a vertical gradient
subplot(2,2,2), imshow(uint8(imfilter(df, mask))), title('df/dx');
subplot(2,2,3), imshow(uint8(imfilter(df, mask))), title('df/dy');
subplot(2,2,4), imshow(uint8(imfilter(df, mask))), title('magnitude');

figure
mask = fspecial('sobel') ; % emphasize horizontal edges by approximating a vertical gradient
subplot(2,2,2), imshow(uint8(imfilter(df, mask))), title('df/dx');
subplot(2,2,3), imshow(uint8(imfilter(df, mask))), title('df/dy');
subplot(2,2,4), imshow(uint8(imfilter(df, mask))), title('magnitude');

