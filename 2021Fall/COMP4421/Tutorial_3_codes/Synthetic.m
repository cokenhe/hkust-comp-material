f = zeros(256,256);
for i=1:32:256
    f (:,i) = 255;
end

% f(120:136,120:136) = 255;

F = fft2(f);
Fc = fftshift(F);

figure
subplot(131), imshow(f), title('original');
subplot(132), imshow(abs(F), []), title('magnitude'); %  scaling the display based on the range of values in (abs(F)). 
subplot(133), imshow(abs(Fc), []), title('centered shift');