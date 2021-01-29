function img_warp = img_warping(img, corners, n)

% Implement the image warping to transform the target A4 paper into the
% standard A4-size paper
% Input parameter:
% .    img - original input image
% .    corners - the 4 corners of the target A4 paper detected by the Hough transform
% .    (You can add other input parameters if you need. If you have added
% .    other input parameters, please state for what reasons in the PDF file)
% .    n - determine the size of the result image
% Output parameter:
% .    img_warp - the standard A4-size target paper obtained by image warping

syms a11 a12 a13 a21 a22 a23;
cell = num2cell(corners);
[x1, y1, x2, y2, x3, y3, x4, y4] = cell{:};
eq1 = 1*a11 + 1*a12 + a13 == x1;
eq2 = 1*a21 + 1*a22 + a23 == y1;

eq3 = 210*n*a11 + 1*a12 + a13 == x2;
eq4 = 210*n*a21 + 1*a22 + a23 == y2;

eq5 = 1*a11 + 297*n*a12 + a13 == x3;
eq6 = 1*a21 + 297*n*a22 + a23 == y3;

% eq7 = 210*n*a11 + 297*n*a12 + a13 == x4;
% eq8 = 210*n*a21 + 297*n*a22 + a23 == y4;

eqns = [eq1 eq2 eq3 eq4 eq5 eq6];
vars = [a11 a12 a13 a21 a22 a23];
sol = solve(eqns, vars);

img_warp = uint8(zeros(297*n, 210*n, 3));

i = 1:297*n;
j = 1:210*n;
[i_grid, j_grid] = ndgrid(j,i);
x = round(double(sol.a11) * i_grid + double(sol.a12) * j_grid + double(sol.a13));
y = round(double(sol.a21) * i_grid + double(sol.a22) * j_grid + double(sol.a23));

for i = 1:297*n
    for j = 1:210*n
        img_warp(i,j,:) = img(y(j,i),x(j,i),:);
    end
end

% for i = 1:297*n
%    for j = 1:210*n
%        x = round(sol.a11 * j + sol.a12 * i + sol.a13);
%        y = round(sol.a21 * j + sol.a22 * i + sol.a23);
%        
% %        x = subs(j*a11 + i*a12 + a13, sol);
% %        y = subs(j*a21 + i*a22 + a23, sol);
% %        syms a b c d;
% %        I1 = a*floor(x) + b*floor(y) + c*floor(x)*floor(y) + d;
% %        I2 = a*ceil(x) + b*floor(y) + c*ceil(x)*floor(y) + d;
% %        I3 = a*floor(x) + b*ceil(y) + c*floor(x)*ceil(y) + d;
% %        I4 = a*ceil(x) + b*ceil(y) + c*ceil(x)*ceil(y) + d;
% %        M = solve([I1 I2 I3 I4], [a b c d]);
% %        I = subs(a*x + b*y + c*x*y + d, M);
% %        img_warp(i,j) = I;
%        img_warp(i,j,1) = img(y,x,1);
%        img_warp(i,j,2) = img(y,x,2);
%        img_warp(i,j,3) = img(y,x,3);
%    end
% end