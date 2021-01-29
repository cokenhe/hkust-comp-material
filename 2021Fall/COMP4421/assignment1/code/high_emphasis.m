function img_result = high_emphasis(img_input,D0,isEmphasis, a, b)
    img_freq = fft2(img_input);
    
    [f1,f2] = freqspace(size(img_input), 'meshgrid' );
    D = sqrt(f1.^2 + f2.^2);
    butterworth_order = 2;
    H_hp = double(1./(1+(D0./D).^(2*butterworth_order))); 
    H = a + b .* H_hp;
    
    G = zeros(size(img_input));
    if (isEmphasis)
        G = H .* img_freq;
    else 
        G = H_hp .* img_freq;
    end
    
    img_result = uint8(ifft2(G));
end

