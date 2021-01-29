function f = add_pepper_noise(img_input, p)
    random = rand(size(img_input)) > p;
    f = img_input .* uint8(random);
end