function img_result = highpass_filter(img_input,D0)

    img_freq = fftshift(fft2(double(img_input)));
    
    % Initialize
    [M, N] = size(img_input);
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
    
    D = sqrt(V.^2 + U.^2);
    D = D / max(D(:));
    
    H = double(D > D0); 
    G = H .* img_freq;
    
    img_result = uint8(ifft2(ifftshift(double(G))));


%     img_freq = fft2(img_input);
%     
%     [f1,f2] = freqspace(size(img_input), 'meshgrid' );
%     D = sqrt(f1.^2 + f2.^2);
%     H = double(D > D0); 
%     G = H .* img_freq;
%     
%     img_result = uint8(ifft2(G));
end

