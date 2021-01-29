clc
clear

% Assignment 3 Q1
% img - original input image
% img_marked - image with marked sides and corners detected by Hough transform
% corners - the 4 corners of the target A4 paper
% img_warp - the standard A4-size target paper obtained by image warping
% n - determine the size of the result image

% define the n by yourself
n = 1;

% Manually detemine the corner points for five input images
Corners = [[550 443] [2493 536] [332 3290] [2470 3366];
           [962 783] [2228 812] [890 2614] [2422 2596];
           [1088 789] [2270 1110] [567 2452] [1786 2821];
           [798 459] [2520 496] [370 2950] [2654 3097];
           [603 419] [2490 455] [491 3192] [2576 3187]];


inputs = [1,2,3,4,5];
for i = 1:length(inputs)
    img_name = ['../input_imgs/Q1/', num2str(inputs(i)), '.JPG'];
    img = imread(img_name);
    % Modify your Hough transform function of Assignment 2 to obtain the corners.
    % You can also find the corners manually. If so, please change the following code accrodingly
%     [img_marked, corners] = hough_transform(img);
    corners = Corners(i, :);
    img_warp = img_warping(img, corners, n);
    img_marked = img;
    x = [corners(1) corners(3) corners(5) corners(7)];
    y = [corners(2) corners(4) corners(6) corners(8)];
    figure, 
    subplot(131),imshow(img);           % show the orignal image
    subplot(132),imshow(img_marked);    % show the image with four corners marked
    hold on;
    plot(x, y, 'g.', 'MarkerSize', 15);
    subplot(133),imshow(img_warp);      % show the resultant image
    imwrite(img_warp,['Q1_', num2str(inputs(i)), '.JPG']);
end