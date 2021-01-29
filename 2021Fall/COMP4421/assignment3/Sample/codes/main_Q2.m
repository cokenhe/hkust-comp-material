clc
clear

% Assignment 3 Q2

img_name = '../input_imgs/Q2/1.jpg';
img = imread(img_name);

[digits_set] = digit_segment(img);

[M, sze] = size(digits_set);

for i = 1:M
	digit = digits_set(i, :);
    digit = reshape(digit, sqrt(length(digit)), sqrt(length(digit)));
    % show the result of 1.jpg
    figure;
    imshow(digit, []);
    imwrite(digit,['Q2_1_', num2str(i), '.JPG']);
end

img_name = '../input_imgs/Q2/2.png';
img = imread(img_name);

[digits_set] = digit_segment(img);

[M, sze] = size(digits_set);

for i = 1:M
	digit = digits_set(i, :);
    digit = reshape(digit, sqrt(length(digit)), sqrt(length(digit)));
    % show the result of 2.png
    figure;
    imshow(digit, []);
    imwrite(digit,['Q2_2_', num2str(i), '.JPG']);
end