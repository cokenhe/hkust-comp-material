function img_result = min_filter(img_input, filter_size)
    [x, y] = size(img_input);
    img_result = zeros(size(img_input));
    
    padding = (filter_size - 1) / 2;
    img_padding = ones(x+2*padding, y+2*padding) * 255;
    img_padding(1+padding:1+x, 1+padding:1+y) = img_input;
    
    for i = 1:x
        for j = 1:y
            img_result(i,j) = minimun(img_padding(i:i+filter_size-1, j:j+filter_size-1));
        end
    end
    
    % No padding needed according to FAQ
    % So the image size should be smaller
    img_result = img_result(1+padding : x-padding, 1+padding : y-padding);
end

function min = minimun(A)
    min = 255;
    [x, y] = size(A);
    
    for i = 1:x
        for j = 1:y
            if (A(i,j) < min)
                min = A(i,j);
            end
        end
    end
end