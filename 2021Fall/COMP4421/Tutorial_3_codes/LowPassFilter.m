input_image = imread('A.bmp');
figure, subplot(1, 3, 1), imshow(input_image);

[M,N] = size(input_image);
FT_img = fftshift(fft2(double(input_image))); 

D0 = 30; % cut-off freq

v = zeros(N-1,1);
a=0;
for k = 1:N
    v(k)=floor(-((N-1)/2)) +a;   % v-axis with 0 at center
    a = a+1;    
end
u = zeros(M-1,1);
a=0;
for k = 1:M
    u(k)=floor(-((M-1)/2)) +a;   % u-axis with 0 at center
    a = a+1;
end
[V, U] = meshgrid(v, u);  % V-U grid with (0,0) at center

D = sqrt(U.^2+V.^2); % Calculate the Euclidean Distance on the V-U grid

%%%%% ILPF %%%%%
ilpf = double(D <= D0);  % ilpf=1 if D<=D0, ilpf=0 otherwise 
subplot(1, 3, 2), imshow(ilpf),
G = ilpf.*FT_img; % apply ilpf on FT image 

%%%%% BLPF %%%%%%
% butterworth_order = 2; % higher order means closer to ILPF
% blpf = 1./(1+(D./D0).^(2*butterworth_order)); % butterworth filter
% subplot(1, 3, 2), imshow(blpf),
% G = blpf.*FT_img; % apply blpf on FT image 

%%%%% GLPF %%%%%%
% glpf = exp(-D.^2/(2*D0^2)); % Gaussian filter
% subplot(1, 3, 2), imshow(glpf),
% G = glpf.*FT_img; % apply glpf on FT image 


output_image = ifft2(ifftshift(double(G))); % iverse shift and inverse FT. 

subplot(1, 3, 3), imshow(output_image, []); 