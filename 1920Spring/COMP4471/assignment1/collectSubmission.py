import os
if os.path.isfile("assignment1.7z"):
	os.system("del assignment1.7z")
os.system("7z.exe a -r assignment1 . -xr!*cs231n/datasets* -xr!*ipynb_checkpoints* -xr!*README.md -xr!*collectSubmission* -xr!*requirements.txt -xr!*git* -xr!7z.exe")