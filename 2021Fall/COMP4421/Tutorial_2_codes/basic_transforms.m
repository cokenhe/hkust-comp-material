f=imread('charles_butter_2.jpg'); %input image

f_inv = 255-f; %inverse transform

c_log = 30;
f_log = c_log*log(1+double(f)); % log transform

c_plaw = 0.1; gamma = 1.5;
f_plaw = c_plaw*double(f).^gamma; % power-law transform


figure
subplot(2,2,1), imshow(f), title('original');
subplot(2,2,2), imshow(f_inv), title('inverse'); 
subplot(2,2,3), imshow(uint8(f_log)), title('log');
subplot(2,2,4), imshow(uint8(f_plaw)), title('power-law');

%Contrast Stretching for binary output
figure
subplot(2,2,1),imshow(uint8((f>80)*255)) , title('>80');
subplot(2,2,2),imshow(uint8((f>127)*255)), title('>127');
subplot(2,2,3),imshow(uint8((f>200)*255)), title('>200');
