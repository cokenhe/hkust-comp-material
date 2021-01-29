Im=imread('example.bmp');
figure, subplot(221), imshow(Im), title('orginal;');

ft=fft2(Im);
fts=fftshift(ft);
subplot(222), imshow(abs(fts),[]), title('magnitude');

logfts=log(1+abs(fts));
subplot(223), imshow(logfts,[]), title('log magnitude');

orift=ifftshift(fts);
oriIm=ifft2(orift);
subplot(224), imshow(oriIm,[]), title('inverse FFT') % ifft2(fft2(X)) = X is true if rounding error are omitted. 






