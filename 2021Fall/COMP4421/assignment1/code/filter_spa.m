function img_result = filter_spa(img_input, filter, padding)
    [x, y] = size(img_input);
    [m, n] = size(filter);
    x_out = x + 2 * padding - m + 1;
    y_out = y + 2 * padding - n + 1;
    img_result = zeros(x_out, y_out);

    img_pad = add_padding(img_input, padding, filter);
 
    for i = 1:x_out
        for j = 1:y_out
            output = double(img_pad(i:i+m-1, j:j+n-1)).*double(filter);
            output = sum(output, 'all');
            img_result(i,j) = output;
        end
    end
    img_result = uint8(img_result);
end

function img_pad = add_padding(img, padding, filter)
    if (padding == 0)
        img_pad = zero_padding(img, filter);
    else 
        img_pad = circular_padding(img, padding);
    end
end

function img_pad = zero_padding(img, filter)
    % assume filter always step 1, and aim to retain image size
    [x, y] = size(img);
    padding_size = size(filter) - 1;
    m = padding_size(1);
    n = padding_size(2);
    img_pad = zeros(x+m, y+n);
    img_pad(m/2+1 : m/2+x, n/2+1 : n/2+y) = img;
end

function img_pad = circular_padding(img, padding)
    img_pad = [img,img,img;img,img,img;img,img,img];
    [rows, cols] = size(img);
    from_row = rows + 1 - padding;
    from_col = cols + 1 - padding;
    to_row = rows * 2 + padding;
    to_col = cols * 2 + padding;
    img_pad = img_pad(from_row:to_row, from_col:to_col);
end