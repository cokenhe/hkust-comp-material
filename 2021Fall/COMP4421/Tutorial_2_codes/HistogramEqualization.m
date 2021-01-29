f=imread('charles_butter_2.jpg');
g=histeq(f);

figure
subplot(2,2,1), imshow(f)
subplot(2,2,2), imshow(g) 
subplot(2,2,3), imhist(f)
subplot(2,2,4), imhist(g)

figure,imshow(f)
figure
subplot(2,2,1), imshow(high_pass_filter(f)), title('hpf');
subplot(2,2,2), imshow(g), title('histeq');
subplot(2,2,3), imshow(histeq(high_pass_filter(f))), title('hpf->histeq');
subplot(2,2,4), imshow(high_pass_filter(histeq(f))), title('histeq->hpf');

function hpf = high_pass_filter(f)
    [f1,f2] = freqspace(size(f), 'meshgrid' );
    D = sqrt(f1.^2 + f2.^2);
    H_b=1./((1+0.1./D).^2);  %Butterworth high-pass filter
    H_em=0.5+0.75*H_b; %High frequency emphasis filter
    H_em=ifftshift(H_em);

    I_f=fft2(f);
    I_f=I_f.*H_em;
    hpf=uint8(ifft2(I_f));
end