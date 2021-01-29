#------- Data Segment ----------
.data
# Define the string messages and the array
msg1:           .asciiz "Please enter the Integer(range:1~3999) "
msg2:		.asciiz "\nThe Roman numeral representation is "
space:		.asciiz " "
newline:	.asciiz "\n" 


                      
roman_radix:   .word    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
roman_symbol:  .asciiz  "MCMDCDCXCLXLXIXVIVI"
roman_start: .word 0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18
roman_offset: .word 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1
roman_result: .byte 0:40

#------- Text Segment ----------
.text
.globl main
main:
	# load the starting address of the originarray to $s0~ $s3
	la      $s0, roman_radix
	la      $s1, roman_symbol
	la      $s2, roman_start
	la      $s3, roman_offset
	la      $s4, roman_result
	#la	$s4, 0x10010104 # s4 is the beginning addr of the output string
	addi    $s5, $zero, 0 # s5 is the offset of the output string

	# print msg1 to ask for integer input
	la 	$a0 msg1						
	li 	$v0 4
	syscall					

	# $a1 stores the integer
	li 	$v0, 5
	syscall					
	addi 	$a1, $v0, 0     
		
                 # print msg2	
	la $a0,msg2
	li $v0,4
	syscall
	
	# calculate Roman numeral representation
	jal intToRoman
	jal printresult
	j end
	
printresult: 
        # print the Roman stored in memory
        add $a0, $zero, $s4
        li $v0,4
        syscall
        # print a new line
        la $a0, newline
        li $v0, 4
        syscall

        jr $ra
 
#TODO below
# 1. argument passed in $a1 is the integer entered by the user, refer to main above for the values in $s0-$s4
# 2. registers $t1~$t7 can be used here
# 3. if you want to use $s0~$s7, you must back up them to the stack and then restore them correctly from the stack before returning back to the caller
# 4. you can add any label   	     	
# 5. add as many number of lines below as you want
intToRoman: 

	add	$t4,	$zero,	$s4		# pointer of resutl
forI:
	sgt	$t0,	$a1,	0		# t0 = (num > 0) ? 1 : 0	--------------------------	REUSABLE
	beq	$t0,	0,	endI		# end if (t0 == 0) which mean end if !(num > 0)
	add	$t2,	$zero,	$zero		# t2: count = 0
	
	sll	$t7,	$t1,	2		# t7 = i * 4
	add	$t7,	$t7,	$s0		# t7 = roman_radix[i*4]
	lw	$t7,	0($t7)			# t7 = load roman_radix[i]
	
while:
	slt	$t0,	$a1,	$t7		# t0 = (num < roman_radix[i]) ? 1 : 0  |  ( num >= roman_radix[i]) ? 0 : 1
	beq	$t0,	1,	endWhile	# end if (t0 == 1) which mean end if (num < roman_radix[i])
	
	sub	$a1,	$a1,	$t7		# num -= roman_radix[i]
	addi	$t2,	$t2,	1
	j	while
endWhile:

forWhat:
	sgt	$t0,	$t2,	0		# t0 = (count > 0) ? 1 : 0
	beq	$t0,	0,	endWhat
	add	$t3,	$zero,	$zero		# t3: J = 0			----------------------		REUSABLE OUTSIDE THIS SCOPE

	sll	$t7,	$t1,	2		# t7 = i * 4
	add	$t7,	$t7,	$s3		# t7 = roman_offset[i*4]
	lw	$t7,	0($t7)			# t7 = load roman_offset[i]
	
	sll	$t6,	$t1,	2		# t6 = i * 4
	add	$t6,	$t6,	$s2		# t6 = roman_start[i*4]
	lw	$t6,	0($t6)			# t6 = load roman_start[i]
forJ:
	slt	$t0,	$t3,	$t7		# t0 = (J < roman_offset[i]) ? 1 : 0
	beq	$t0,	0,	endJ
	
	add	$t5,	$t6,	$t3		# t5 = roman_start[i] + J
	add	$t5,	$t5,	$s1		# t5 = roman_symbol[roman_start[i] + J]
	lb	$t5,	0($t5)			# t5 = temp = load ( roman_symbol[roman_start[i] + J] )
	
	sb	$t5,	0($t4)			# roman[index] = temp
	addi	$t4,	$t4,	1		# t4: index++
	addi	$t3,	$t3,	1		# J++
	
	j	forJ
endJ:

	addi	$t2,	$t2,	-1		# count--
	j	forWhat
endWhat:

	addi	$t1,	$t1,	1		# t1: i
	j	forI
endI:

#TODO above
        jr $ra #last line of intToRoman()

        
#Terminate the program
end:
	li $v0, 10 
	syscall
        
