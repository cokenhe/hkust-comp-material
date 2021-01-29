% Skeleton code for Q2.2 Hough Transform for Segmentation. This function
% run Hough transform and detect the A4 paper in the input image. You can
% use any built-in function for pre-processing and edge extraction, but you
% are NOT ALLOWED to use any built-in function relating to the Hough
% transform. 

% You can modify this skeleton code as long as the output is the required
% images (5 output image in total). 

function hough_transform()

inputs = [1,2,3,4,5];
for i = 1:length(inputs)
    
    %%%% read the input image %%%%
    img_name = ['hough_',num2str(inputs(i)), '.JPG'];
    img = imread(img_name);
    gray_img = rgb2gray(img);
    
    %%%% to-do 1: pre-processing and edge extraction. %%%%
%     preproc_img = wiener2(img, [5 5]);
%     preproc_img = medfilt2(img);
    windowWidth = 21;
    kernel = ones(windowWidth) / windowWidth .^ 2;
    preproc_img = imfilter(gray_img, kernel, 'replicate');
    edge_img = edge(preproc_img, 'sobel');
    
%     figure;
%     subplot(121);imshow(edge_img);
%     subplot(122);imshow(img);
    
    %%%% to-do 2: Hough transform to find 4 sides of the paper %%%% 
    rho_res = 1;       % [40   30] 
    theta_res = 0.016; % [0.03 0.009]
    k_line = 4;
    
    [h,w] = size(edge_img);
    D = sqrt((h - 1)^2 + (w - 1)^2);
    D_rho = rho_res * ceil(D/rho_res);
    nrho = 2 * (ceil(D/rho_res)) + 1;
    ntheta = ceil(pi/theta_res);
    H = zeros(nrho, ntheta);
    
    for x = 1:h
        for y = 1:w
            if ~edge_img(x,y)
                continue
            end
            for theta = 1:ceil(pi/theta_res)
                thet = pi - (theta-1)*theta_res;
                rho = round(x*cos(thet) + y*sin(thet));
                
                r = int16((D_rho + rho)/rho_res);
                t = int16(theta);
                H(r, t) = H(r, t) + 1;
            end
        end
    end
    
    % threashold n-largest 
%     [M, I] = maxk(H(:), k_line);
%     [rhos, thetas] = ind2sub(size(H), I);
    
    % threashold top 5% 
%     T = max(H(:)) * 0.5;
%     [rhos, thetas] = find(H > T);
    
    % local maxima
%     l_max = imregionalmax(H .* T, 8); 
    % l_max = islocalmax(H .* T, 2); 
%     l_max = imhmax(H, T, 8);
%     [rhos, thetas] = find(l_max);

    numpeaks = 4;
    threshold = 0 * max(H(:));
    nHoodSize = floor(size(H) / 100.0) * 2 + 1 ;

    [M, N] = size(H);
    
    peaks = [];
    for m=1:numpeaks
        Hs = sort(H(:),'descend');
        
        pkval = Hs(1);
        if pkval >= threshold
            [h,k] = find(H==pkval,1);

            % Suppression
            lowX = max([floor(h-nHoodSize(1)) 1]);
            highX = min([ceil(h+nHoodSize(1)) M]);
            lowY = max([floor(k-nHoodSize(2)) 1]);
            highY = min([ceil(k+nHoodSize(2)) N]);
            H(lowX:highX,lowY:highY) = 0;

            peaks = [peaks; h, k];
        end
    end    
        
    % modal answer
%     peaks = houghpeaks(H, 4);
    rhos = peaks(:,1);
    thetas = peaks(:,2);
    
%     figure;
%     subplot(121);
%     imshow(imadjust(rescale(H)), 'XData', -pi/2:pi/2, 'YData', -D_rho:D_rho, ..., 
%         'InitialMagnification','fit');
%     xlabel('r'), ylabel('\rho');
%     axis on, axis normal, hold on;
%     colormap(gca,hot);


    %%%% to-do 3: plot four green lines on the input image %%%%
    figure, imshow(img), hold on
    for k = 1:length(rhos)
        x = 1:h;
        theta = (thetas(k) - 1) * theta_res - pi / 2 ;
        rho = rhos(k) * rho_res - D_rho;
        y = rho / sin(theta) - x * cos(theta) / sin(theta);
        plot(x,y,'LineWidth',2,'Color','green');
    end
    
%     [H,theta,rho] = hough(edge_img);
%     P = houghpeaks(H,5,'threshold',ceil(0.3*max(H(:))));
%     lines = houghlines(edge_img,theta,rho,P);
%     figure, imshow(edge_img), hold on
%     for k = 1:length(lines)
%        xy = [lines(k).point1; lines(k).point2];
%        plot(xy(:,1),xy(:,2),'LineWidth',2,'Color','green');
%     end
%     
%     subplot(122);
%     imshow(imadjust(rescale(H)),[],...
%            'XData',theta,...
%            'YData',rho,...
%            'InitialMagnification','fit');
%     xlabel('\theta (degrees)')
%     ylabel('\rho')
%     axis on
%     axis normal 
%     hold on
%     colormap(gca,hot)
end





  