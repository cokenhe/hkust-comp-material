% GGG plots the histogram against the mixture of four Gaussian distributions.
% The parameter param consists of the parameters of the mixture model in the
% following order:
% 
%   1) Weight of the first Gaussina distribution.
%   2) Mean of the first Gaussina distribution.
%   3) Standard deviation of the first Gaussina distribution.
%   4) Weight of the second Gaussina distribution.
%   5) Mean of the second Gaussina distribution.
%   6) Standard deviation of the second Gaussina distribution.
%   7) Weight of the third Gaussina distribution.
%   8) Mean of the third Gaussina distribution.
%   9) Standard deviation of the third Gaussina distribution.
%
function ggg(param, histogram)

P = param;

weightG = zeros(3,1);
muG = zeros(3,1);
sigmaG = zeros(3,1);
weightG(1) = P(1);
muG(1) = P(2);
sigmaG(1) = P(3);
weightG(2) = P(4);
muG(2) = P(5);
sigmaG(2) = P(6);
weightG(3) = P(7);
muG(3) = P(8);
sigmaG(3) = P(9);
weightG(4) = P(10);
muG(4) = P(11);
sigmaG(4) = P(12);

H = histogram;
X = [1:size(H,2)];
plot(X,H);
base = sum(H);

funcG = zeros(4,size(H,2));
for i = [1:4]
    funcG(i,:) = 1/(sqrt(2*pi)*sigmaG(i)).*exp(-((X-muG(i)).^2)/(2*sigmaG(i)^2));
end

ax1 = gca;
line(X,(weightG(1)*funcG(1,:)+weightG(2)*funcG(2,:)+weightG(3)*funcG(3,:)+weightG(4)*funcG(4,:))*base,'Color','g','Parent',ax1);
line(X,(weightG(1)*funcG(1,:))*base,'Color','r','Parent',ax1);
line(X,(weightG(2)*funcG(2,:))*base,'Color','r','Parent',ax1);
line(X,(weightG(3)*funcG(3,:))*base,'Color','r','Parent',ax1);
line(X,(weightG(4)*funcG(4,:))*base,'Color','r','Parent',ax1);
axis tight;

return;