% This file contains the implementation of the main routine for Assignment 2. 
% This routine reads a image, which contains three intensity classes.
% The routine employs the Expectation-maximization method to estimate the parameters
% of the three intensity classes with a mixture of three Gaussian distributions, and
% segment the image with minimum error thresholds.
%  
function segment_image() 

% Define convergence threshold.
threshold = 0.01;

% Read the input image and convert the color image into grayscale image.
Im = imread('go.jpeg');
Im = rgb2gray(Im);
% Build a histgoram of the image, it is for the sake of
% parameter estimations and visualization.
Hist = imhist(Im,256)';

%
% The Expectation-maximization algorithm.
%

% Initialize the paramters.
Weight = zeros(4,1);
Mu = zeros(4,1);
Sigma = zeros(4,1);
Weight(1) = 0.1;
Weight(2) = 0.25;
Weight(3) = 0.55;
Weight(4) = 0.1;
Mu(1) = 25;
Mu(2) = 85;
Mu(3) = 120;
Mu(4) = 220;
Sigma(1) = 20;
Sigma(2) = 5;
Sigma(3) = 10;
Sigma(4) = 10;

itn = 1;
while(1)

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	% TODO_1: Estimate the expected posterior probabilities.
    Z = [0:255];
    Pz = normpdf(Hist, Mu, Sigma);
    Pep = 1 / sum(Hist) * (Pz .* Weight / sum(Pz .* Weight, 'all'));
%     Pep = 1 / sum(Hist) * (sum(Pz .* Weight, 2) / sum(Pz .* Weight, 'all'));
	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	% Allocate spaces for the parameters estimated.
	NewWeight = zeros(4,1);
	NewMu = zeros(4,1);
	NewSigma = zeros(4,1);
    
    % TODO_2: Estimate the parameters.
    NewMu = sum(Pep .* Hist .* Z, 2) ./ sum(Pep .* Hist, 2);
    NewSigma = sqrt(sum(Pep .* Hist .* (Z - NewMu).^2, 2) ./ sum(Pep .* Hist, 2));
    NewWeight = 1 / sum(Hist) * sum(Pep .* Hist, 2);
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	
    % Check if convergence is reached.
	DiffWeight = abs(NewWeight-Weight)./Weight;
	DiffMu = abs(NewMu-Mu)./Mu;
	DiffSigma = abs(NewSigma-Sigma)./Sigma;
	
	if (max(DiffWeight) < threshold) & (max(DiffMu) < threshold) & (max(DiffSigma) < threshold)
        break;
	end
	
	% Update the parameters.
	Weight = NewWeight;
	Mu = NewMu;
	Sigma = NewSigma;
    
    disp(['Iteration #' num2str(itn)]);
    disp([' Weight: ' num2str(Weight(1)) ' ' num2str(Weight(2)) ' ' num2str(Weight(3)) ' ' num2str(Weight(4))]);
    disp([' Mu: ' num2str(Mu(1)) ' ' num2str(Mu(2)) ' ' num2str(Mu(3)) ' ' num2str(Mu(4))]);
    disp([' Sigma: ' num2str(Sigma(1)) ' ' num2str(Sigma(2)) ' ' num2str(Sigma(3)) ' ' num2str(Mu(4))]);
    itn = itn + 1;
    
end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
P = Weight .* Pz;
% TODO_3(a): Compute minimum error threshold between the first and the second
% Gaussian distributions.
[~, T] = min(abs(P(1) - P(2)));
FirstThreshold = T-1;
 
% TODO_3(b): Compute minimum error threshold between the second and the third
% Gaussian distributions.
[~, T] = min(abs(P(2) - P(3)));
SecondThreshold = T-1;

% TODO_3(c): Compute minimum error threshold between the thrid and the fourth
% Gaussian distributions.
[~, T] = min(abs(P(3) - P(4)));
ThirdThreshold = T-1;

% TODO_3(d): sort the 3 thresholds in ascending order
Threshold = sort([FirstThreshold SecondThreshold ThirdThreshold]);
FirstThreshold = Threshold(1);
SecondThreshold = Threshold(2);
ThirdThreshold = Threshold(3);
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Show the segmentation results.

figure;
subplot(2,3,1);imshow(Im);title('Go');
subplot(2,3,3);imshow(Im<=FirstThreshold);title('First Intensity Class');
subplot(2,3,4);imshow(Im>FirstThreshold & Im<=SecondThreshold);title('Second Intensity Class');
subplot(2,3,5);imshow(Im>SecondThreshold & Im<=ThirdThreshold);title('Third Intensity Class');
subplot(2,3,6);imshow(Im>ThirdThreshold);title('Fourth Intensity Class');
Params = zeros(12,1);
Params(1) = Weight(1);
Params(2) = Mu(1);
Params(3) = Sigma(1);
Params(4) = Weight(2);
Params(5) = Mu(2);
Params(6) = Sigma(2);
Params(7) = Weight(3);
Params(8) = Mu(3);
Params(9) = Sigma(3);
Params(10) = Weight(4);
Params(11) = Mu(4);
Params(12) = Sigma(4);
subplot(2,3,2);ggg(Params,Hist);
end

function gd = gaudist(Z, mu, sigma) 
    gd = 1 / (sigma * sqrt(2*pi)) * exp(-(Z - mu).^2 / (2*sigma*sigma));
end
