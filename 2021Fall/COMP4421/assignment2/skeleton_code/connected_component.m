% connected_component.m contains the implementation of the main routine for Question 1 in Assignment 2. 
% This function search for all connected component on the input image. It should output the total number of
% connected components, number of pixels in each connected component and
% display the largest connected component. Note that you are not allow to
% use the bwlabel/bwlabeln/bwconncomp matlab built-in function in this
% question.

function connected_component()
    %Read the input image and convert it to binary image (0,1)
    IM = imread('cc_image.jpg');
    BW = im2bw(IM);
    %add small dark holes;
    seeds = rand(400)<0.001;
    se = strel('square',3);
    holes = imdilate(seeds, se);
    img = BW-holes;
    
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	% TODO_1: Remove all small dark holes inside each white disk by using 
    % appropriate morphological operations (dilation, erosion, opening and closing).
    se = [0,1,0;1,1,1;0,1,0];
    denoised_image = imerode(imclose(imdilate(img, se), se), se);
    
%     se = [0 0 1 0 0; 0 0 1 0 0; 1 1 1 1 1; 0 0 1 0 0; 0 0 1 0 0];
%     denoised_image = imopen(imclose(img, se), se);
%     figure;
%     subplot(131); imshow(BW);
%     subplot(132); imshow(denoised_image);
%     subplot(133); imshow(abs(BW - denoised_image));
	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	% TODO_2: Search for all connected component with connectivity equals
	% to 8 and output the result to the command window in following format:
    % There are total {number of regions} region(s) :
    % Region 1, no. of pixels = {number of pixels}
    % Region 2, no. of pixels = {number of pixels}
    % ...
    [h, w] = size(denoised_image);
    label = 0;
    result = zeros(size(denoised_image));
    map = zeros(1, 400);
    
    % row-by-row connected component
    for i = 1:h
        for j = 1:w
            if denoised_image(i,j) == 1
                top = (i > 1) * result(i-1, j);
                left = (j > 1) * result(i, j-1);
                top_left = (i > 1 && j > 1) * result(i-1, j-1);
                if left > 0
                    result(i,j) = left;
                    if top > 0 && top_left > 0
                        if map(top) == top
                            map(top) = left;
                        end
                    elseif top > 0
                        if map(top) == top
                            map(top) = left;
                        end
                    elseif top_left > 0
                        if map(top_left) == top_left
                            map(top_left) = left;
                        end
                    end
                elseif top > 0
                    result(i,j) = top;
                elseif top_left > 0
                    result(i,j) = top_left;
                else
                    label = label + 1;
                    map(label) = label;
                    result(i,j) = label;
                end
            end
        end
    end
    
    % map and count equivalent label
    dict = containers.Map('KeyType', 'double', 'ValueType', 'double');
    for i = 1:h
        for j = 1:w
            if result(i,j) > 0
               result(i,j) = get_root(map, result(i,j));
               if isKey(dict, result(i,j))
                  dict(result(i,j)) = dict(result(i,j)) + 1;
               else
                   dict(result(i,j)) = 1;
               end
            end
        end
    end
    
    l_label = 0;
    l_pixel = 0;
    key = keys(dict);
    val = values(dict);
    fprintf('There are total %d region(s) :\n', dict.length);
    for i = 1:dict.length
        if l_pixel < val{i}
            l_label = key{i};
            l_pixel = val{i};
        end
        fprintf('Region %d, no. of pixels = %d\n', i, val{i});
    end
	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	% TODO_3: Find the largest connected component in binary format (0,1).
	L_CC = result == l_label;
    % L_CC is a binary image which only contains the largest
    % connected component and the dark background.
    
	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    figure;
    subplot(1,3,1);imshow(img);title('Input image');
    subplot(1,3,2);imshow(denoised_image);title('Denoised image');
    subplot(1,3,3);imshow(L_CC);title('Largest connected component');
    
end

function root = get_root(M, value)
    root = value;
    while M(root) ~= root
        root = M(root);
    end
end
