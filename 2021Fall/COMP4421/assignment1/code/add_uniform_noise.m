function f = add_uniform_noise(img_input, a, b)
    random = randi([a,b], size(img_input));
    f = uint8(double(img_input) + random);
end