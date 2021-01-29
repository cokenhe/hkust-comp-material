#------- Data Segment ----------
.data
# Define the string messages and the matrix
msg1:           .asciiz "The original matrix is"
msg2:		.asciiz "\nThe transposed matrix is"
space:		.asciiz " "
newline:	.asciiz "\n" 
                     
originMatrix:    .word 0:20
transposeMatrix: .word 0:20

#------- Text Segment ----------
.text
.globl main
main:
	# $s1 is the matrix size
	addi 	$s1,$zero,20
	
	# $s6 is the row number
	addi	$s6,$zero,4
	
	# $s7 is the colum number
	addi    $s7,$zero,5
	
	# set random seed
	li 	$v0, 30
	syscall            
	addi 	$a1, $a0, 0
	li 	$a0, 0
	li 	$v0, 40
	syscall

	# load the starting address of the origin matrix to $s0, $s4
	la 	$s0, originMatrix
	la      $s4, transposeMatrix
	
# fill the matrix with $s1 random elements within range [1, 100]
matrix_filling:	
	jal 	random_number_generate	
	sll 	$t1, $t0, 2
	add 	$t1, $s0, $t1
	
	sw 	$v1, 0($t1)
	addi	$t0, $t0, 1 
	bne 	$t0, $s1, matrix_filling

	# print msg1	
	la 	$a0, msg1
	li 	$v0, 4
	syscall
	
	# print setting
	add	$a2, $zero, $s7 # $a2 stores the numer of elements on each line when printing
	add	$a3, $zero, $s0 # $a3 stores the start address of the array when printing
	
	# Print the original matrix
 	jal 	print
	
	# Transpose matrix	
	jal 	transpose
	
	la 	$a0, msg2
	li 	$v0, 4
	syscall
	
	# print setting
	add	$a2, $zero, $s6 # $a2 stores the numer of elements on each line when printing
	add	$a3, $zero, $s4 # $a3 stores the start address of the array when printing
	
	# Print the transposed matrix
	jal 	print
 	
	# Terminate the program
	li 	$v0, 10 
	syscall

# TODO below
# Transpose the originMatrix and write the result to transposeMatrix
# 1. $s1 has stored the matrix size n, 
# 2. $s0 has stored the starting address of the originMatrix, $s4 has stored the starting address of the transposeMatrix
# 3. $s6 has stored the row number of the original Matrix,
# 4. $s7 has stored the column number of the original Matrix,
# 5. you may use $s2 as the loop counter i, and $s3 is the loop counter j
# 6. if you use $s0~$s7, then they must be backed up to the stack and then be restored correctly from the stack before returning back to the caller
# 7. you can add any label   
# 8. add as many number of lines below as you want
transpose:

# initialize the variable
	addi	$t1,	$zero,	1
	addi	$t2,	$zero,	1
	add	$t7,	$zero,	$s4		# t7 is the pointer of transposeMatrix
forJ:
	beq	$t1,	0, 	exitJ		# t1 store the value j < col
	add	$s2,	$zero,	$s3		# i = j
forI:	
	beq	$t2,	0,	exitI		# t2 store the value i < n
	sll	$t6,	$s2,	2		# t6 = i*4
	add	$t6,	$t6,	$s0		# t6 = s0[i*4]
	
	lw	$t3,	0($t6)			# t3 store originMatrix[i]
	sw	$t3,	0($t7)			# save t3 to transponseMatrix[index]
	addi 	$t7,	$t7,	4		# index++
	add	$s2,	$s2,	$s7		# i += col
	slt	$t2,	$s2,	$s1		# t2 = i < n
	j	forI
exitI:
	addi	$t2,	$zero,	1		# reset t2
	addi	$s3,	$s3,	1		# j++
	slt	$t1,	$s3,	$s7		# t1 = j < col
	j	forJ
exitJ:




# TODO above
jr $ra #last line of transpose()


# print original matrx
print:
        addi 	$sp, $sp, -4
        sw 	$ra, 0($sp)
	
        jal 	printmain
        
        lw 	$ra, 0($sp)
        addi 	$sp, $sp, 4
        jr 	$ra

# print matrx     
printmain:
	addi 	$sp, $sp, -4
	sw 	$ra, 0($sp)

	#Print a new line
	la 	$a0, newline
	li 	$v0, 4
	syscall
	
        addi	$t1, $zero, 0  			# $t1 is the index for printing originMatrix[i]
        addi	$t8, $zero, 0                   # $t8 is record the counter for recording number printed on each line
printloop:
	slt  	$t0, $t1, $s1     		#check to see if $t1 (i) is still within the correct range (max value == $s1-1)       
        beq  	$t0, $zero, endprintloop 	#if i>=20 end print numbers
        
	slt	$t0, $t8, $a2                   # check to see if $t8 is still within the correct range (max value == $a2-1)
	beq	$t0, $zero, next_line           # if $t8 == $a2 - 1, then enter next_line
	j	go_on
next_line:
	#Print a new line
	la 	$a0, newline
	li 	$v0, 4
	syscall
	
	# reset $t8
	addi $t8, $zero, 0
	        
go_on:
	sll  	$t2, $t1, 2       		#$t1*4 to get the byte offset
	add  	$t3, $a3, $t2     		#base+byte offset to get the address of originMatrix[i]
	# print originMatrix[i]
	lw   	$a0, 0($t3)                
	li   	$v0, 1
	syscall
	
	#Print a space to separate the numbers
	la 	$a0, space
	li 	$v0, 4
	syscall
	
        #i=i+1 and start another iteration of the loop		
	addi 	$t1,$t1,1     
	# renew $t8
	addi	$t8, $t8, 1 
	j 	printloop 

endprintloop:	
#Print a new line
	la 	$a0, newline
	li 	$v0, 4
	syscall
	lw 	$ra, 0($sp)
        addi 	$sp, $sp, 4
        jr 	$ra

#no input paramter
#output result in $v0
random_number_generate:
	addi  	$sp, $sp, -8
	sw    	$ra, 0($sp)
	sw    	$a0, 4($sp)
	
	addi 	$a1, $zero, 100  #set upper bound to be 100	
	li 	$a0, 0
	li 	$v0, 42
	syscall
	
	addi 	$v1, $a0, 1	
	
	lw 	$a0, 4($sp)
	lw 	$ra, 0($sp)
	addi 	$sp, $sp, 8
	jr 	$ra		


