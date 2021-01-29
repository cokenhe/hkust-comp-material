#------- Data Segment ----------
.data
# Define the string messages and the array
msg1:		.asciiz "\nThe original array is"
msg2:           .asciiz "The array after removing duplicates is"
space:		.asciiz " "
newline:	.asciiz "\n" 
A:		.word 0:10

#------- Text Segment ----------
.text
.globl main
main:

#$s1 is the array size
addi $s1,$zero,10

# set random seed
	li $v0, 30
	syscall            
	move $a1, $a0
	li $a0, 0
	li $v0, 40
	syscall

# load the starting address of the array to $s0
	la $s0, A
	addi $t0, $zero, 0
	
# fill the array with $s1 random elements within range [1, 8]
array_filling:	
	jal random_number_generate	
	sll $t1, $t0, 2
	add $t1, $s0, $t1
	sw $v1, 0($t1)
	addi $t0, $t0, 1 
	bne $t0, $s1, array_filling
	
	#Print msg1
	la $a0, msg1
	li $v0, 4
	syscall
	
	# print setting, $a3 is the length of the print array
	add	$a3, $zero, $s1
	
	# print the original array
                 jal print
         
	subi $s7,$s1,1          # $7 is n-1
	addi $s2, $zero, 0      # $s2 is the loop counter i, initialized to 0
	addi $s3, $zero, 0      # $s3 is the loop counter j, initialized to 0
	
	jal sort
	
	jal removeDuplicates   # return the length of duplicate removed array in $t7
	
	#Print msg2
	la $a0, msg2
	li $v0, 4
	syscall
	
	# print setting, $a3=$t7 is the length of the print array
	add $a3, $zero, $t7
	
	# print the final result after sorting and deleting duplicates
                 jal print
	
	j end

#sort the random generated array
sort:
	addi $sp,$sp,-4
	sw $ra,0($sp)

loop_i: 
        	slt $t1,$s2,$s7       #check to see if $s2 (i) is still within the correct range (max value == n-1 == $s7)
	beq  $t1,$zero, end_sort #if i>=n-1 end the loop and execute deleteDuplicates
	addi $s3,$zero, 0           #init j=0
	

loop_j:

	sub $s4, $s7,$s2       # $s4=$s7-$s2=n-1-i
                 slt $t1,$s3,$s4       # check to see if $s3 (j) is still within the correct range (max value == n-1-i-1 == $s4-1)
	beq $t1,$zero, new_i_iter  # if i>=10 end the loop 

	sll $t2, $s3, 2       # $s3x2 to get the the byte offset 
	add $t3, $s0,$t2      # base+byte offset to get a[j]
	lw  $s5, ($t3)        # $s5=a[j]
	
	lw $s6, 4($t3)        # $s6=a[j+1] 



				
	slt $t1, $s6, $s5     #  check to see if $s6<$s5 i.e. a[j+1]<a[j]
	beq $t1, $zero, new_j_iter

	#swap a[j+1] and a[j] if a[j+1]<a[j]
	sw $s6, ($t3) 
	sw $s5, 4($t3)       
	
new_j_iter:

	addi $s3,$s3,1     # j=j+1
	j loop_j

new_i_iter:
 	addi $s2,$s2,1     # i=i+1
	j loop_i
	
end_sort:
	lw $ra,0($sp)
        	addi $sp,$sp,4
	jr $ra
	
# TODO below
# 1. argument passed in $s0 is the starting address of A[] and $s1 is the array size of A[] (i.e. n)
# 2. you may use $s2 in the removeDuplicates() as the loop counter
# 3. you must record the length of new array in $t7 (i.e. corresponds to index+1 in the C++ program), otherwise the print() function will not print correctly
# 4. if you use $s0~$s7, then they must be backed up to the stack and then be restored correctly from the stack before returning back to the caller
# 5. you can add any label   	     	
# 6. add as many number of lines below as you want
removeDuplicates:
	addi	$t1,	$zero,	1
	beq	$s0,	0,	return		# return if A[] (s0) is NULL
	add	$t2,	$zero,	$s0		# t2 = [index] = A[0]
	addi	$s2,	$zero,	1		# s2 = i = 1
for:	
	bne	$t1,	1	return		# t1 = i < n :: end if (i < n) false(0) 
	
	sll	$t5,	$s2,	2		# t7 = i * 4
	add	$t5,	$t5,	$s0		# t7 = A[i*4]
	lw	$t5,	0($t5)			# load A[i]
	
	lw	$t6,	0($t2)			# load a[index]
	
	beq	$t6,	$t5,	endIf		# if (A[index] == A[i])
	addi	$t2,	$t2,	4		# [index++]
	addi	$t7,	$t7,	1		# index++
	sw	$t5,	0($t2)			# A[index] = A[i]
endIf:
	
	addi	$s2,	$s2,	1
	slt	$t1,	$s2,	$s1		# [s2: i; s1: n]    =>   t1 = ( i < n ) ? 1 : 0 
	j 	for

return:
	addi	$t7,	$t7,	1
# TODO: above 	
       jr $ra #last line of removeDuplicates()
       
       
#print()       
print:
       addi $sp,$sp,-4
       sw $ra,0($sp)
	
        jal printmain
        
        lw $ra,0($sp)
        addi $sp,$sp,4
        jr $ra
        
# print array     
printmain:
	addi 	$sp, $sp, -4
	sw 	$ra, 0($sp)

	#Print a new line
	la 	$a0, newline
	li 	$v0, 4
	syscall
	
        addi	$t1, $zero, 0  			#$t1 is the index for printing sorted A[i]
printloop:        

        slt  	$t0, $t1, $a3     		#check to see if $t1 (i) is still within the correct range 
        
        beq  	$t0, $zero, endprintloop 	#if i>=20 end print numbers
        
	
	sll  	$t2, $t1, 2       		#$t1*4 to get the byte offset
	add  	$t3, $s0, $t2     		#base+byte offset to get address of A[i]
	lw   	$a0, 0($t3)
	li   	$v0, 1
	syscall
	
	#Print a space to separate the numbers
	la 	$a0, space
	li 	$v0, 4
	syscall
	
	#i=i+1 and start another iteration of the loop
	addi 	$t1,$t1,1      
	j 	printloop

endprintloop:	
#Print a new line
	la $a0, newline
	li $v0, 4
	syscall
	lw $ra,0($sp)
        addi $sp,$sp,4
        jr $ra

#no input paramter
#output result in $v0
random_number_generate:
	addi $sp,$sp,-8
	sw   $ra,0($sp)
	sw   $a0,4($sp)
	
	addi $a1,$zero, 8 #set upper bound to be 8	
	li $a0, 0
	li $v0, 42
	syscall
	
	addi $v1, $a0, 1	
	
	lw $a0,4($sp)
	lw $ra,0($sp)
	addi $sp,$sp,8
		
	jr $ra		

#Terminate the program
end:
	li $v0, 10 
	syscall
