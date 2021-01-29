% script for image addition

f = imread('charles_butter.jpg');
g = imread('Venice.jpg');
addup = f(101:500,1:500,:)+g(1:400,1:500,:);
clog = c_log*log(1+double(addup));
plaw = c_plaw*double(addup).^gamma;
hist = histeq(addup);

figure
subplot(2,3,1), imshow(f(101:500,1:500,:))
subplot(2,3,2), imshow(g(1:400,1:500,:))
subplot(2,3,3), imshow(addup)
subplot(2,3,4), imshow(hist)
subplot(2,3,5), imshow(clog)
subplot(2,3,6), imshow(plaw)