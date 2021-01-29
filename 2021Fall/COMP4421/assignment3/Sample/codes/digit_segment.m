function [digits_set] = digit_segment(img)

% Implement the digit segmentation
% img: input image
% digits_set: a matrix that stores the segmented digits. The number of rows
%            equal to the number of digits in the iuput image. Each digit 
%            is stored in each row. Please make sure the segmented digit is a sqaure
%            image before expand it into a row vector.
% You could have your own definition of digits_set as long as it fits your chosen
% segmentation algorithm. 

ctr = 1;
bin = rgb2gray(img);
bin = bin < 150;
horizontal_projection = sum(bin, 2);

down_idx = 0;
zpos = find(~[0; horizontal_projection; 0]);
[~, grpidx] = max(diff(zpos));
height = length(horizontal_projection(zpos(grpidx):zpos(grpidx+1)-2));
margin = floor(height / 3);

while (find(horizontal_projection(down_idx+1:end) , 1))
    up_idx = find(horizontal_projection(down_idx+1:end) , 1) + down_idx;
    down_idx = find(~horizontal_projection(up_idx:end) , 1) + up_idx - 2;
    row = bin(up_idx:down_idx, :);
    vertical_projection = sum(row);

%     height = down_idx - up_idx;
    left_idx = 0;
    right_idx = 0;
    for i=1:length(vertical_projection)
        if vertical_projection(i) == 0
            continue;
        elseif (vertical_projection(i-1) == 0)
            left_idx = i;
        elseif (vertical_projection(i+1) == 0)
            right_idx = i;
        else
            continue;
        end
        if (left_idx > right_idx || i > right_idx)
            continue;
        end
        digits_set(ctr, :) = reshape(img(up_idx:up_idx+height-1, left_idx-margin:left_idx+height-margin-1),1,[]);
        ctr = ctr + 1;
    end
end