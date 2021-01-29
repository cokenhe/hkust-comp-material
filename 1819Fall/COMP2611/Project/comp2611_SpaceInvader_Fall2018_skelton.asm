


.data
title: 		.asciiz "COMP2611 Game"
game_win:	.asciiz "You Win! Enjoy the game brought by COMP2611!"
game_lose:	.asciiz "Try to improve your skill in the next trial!"
# the level limit is 4
level_title:    .asciiz "Level:"
max_level:	.word 4
width:		.word 800 # the width of the screen
height:		.word 600 # the height of the screen
Ship_speed:     .word 8
Alien_ids:	.word 0:200 # used to keep track of the ids of Aliens
Alien_locs:	.word 0:400 # the array of initialized locations of Aliens
Alien_base:	.word 2 # base id of Aliens
Alien_num: 	.word 3 # the number of Aliens, init as 3 before game starts
Alien_row:	.word 1
Alien_col:	.word 3
Alien_speed:	.word 6
bomb_ids: 	.word 0:30 # used to keep track of the ids of bombs
bomb_base:	.word 50 # base id of the simple bomb
bomb_num:	.word 2 # the number of simple bombs
bomb_count:	.word 0 # the number of "running" simple bombs
rbomb_ids:	.word 0:10 # used to keep track of the ids of remote bombs
rbomb_base:	.word 80 # base id of the remote bomb
rbomb_num:	.word 1 # the number of remote bombs
rbomb_count:	.word 0 # the number of "running" remote bombs
game_level:	.word 1 # level of the game, initilized to be 1

endl:		.asciiz	"\n"
space:		.asciiz	" "


.text
main:		la $a0, title
		la $t0, width
		lw $a1, 0($t0)
		la $t0, height
		lw $a2, 0($t0)
		li $v0, 100 # Create the Game Screen
		syscall		
		add $a0, $zero, $zero
		addi $a1, $zero, 1
		li $v0, 105
		syscall # play the background sound
			
game_level_init:la $t0, Alien_num
		lw $a1, 0($t0)
		la $t0, bomb_num
		lw $a2, 0($t0)
		la $t0, rbomb_num
		lw $a3, 0($t0)
		
		la $t0, game_level
		lw $fp, 0($t0)
	        li $v0, 124 # set game level
		syscall		
		#Alien increment by 3, Alien speed increase by 3
		addi $a1, $a1, 3
		la $t0, Alien_num # 
		sw $a1, 0($t0)		
		la $t0, Alien_row # 
		lw $s0, 0($t0)
		addi $s0, $s0, 1
		sw $s0, 0($t0)
		la $t0, Alien_speed # 
		lw $s0, 0($t0)
		addi $s0, $s0, 3
		sw $s0, 0($t0)						
		# Initialize the game by create Game Objects based on game level
game_start:     jal init_game	       		
m_loop:		jal get_time
		add $s6, $v0, $zero # $s6: starting time of the game
		jal check_game_level_status
		bne $v0, $zero, game_end_status
		jal update_object_status	
		jal process_input
		jal check_bomb_hits
		jal move_Aliens
		jal move_bombs
		jal update_score
		# refresh screen
		li $v0, 119
		syscall
		add $a0, $s6, $zero
		addi $a1, $zero, 30 # iteration gap: 30 milliseconds
		jal have_a_nap
		j m_loop
		
game_end_status: 
                # $v0 hold the game status of current level, $v0 = 1 win, $v0 = 2 lose
                addi $t1, $zero, 1 # $t1 = constant 1
                addi $t2, $zero, 2 # $t2 = constant 2
                beq $v0, $t2, game_over # game over if lose in any level
                # the following handles win at any level
                la $t0, game_level
                lw $t3, 0($t0) # $t3 = current game level
                la $t0, max_level
                lw $t2, 0($t0) # $t2 = max_level
                beq $t3, $t2, win # win at level 2 means win the game
                # if win at level that lower than max_level, then need to promote to the next level
                addi $t3, $t3, 1
                la $t0, game_level
                sw $t3, 0($t0) # promote to next level                
                # destroy all bombs in last level 
                jal destroy_bomb            
		# start game next level 
                j game_level_init          
game_over:      
		add $a0, $zero, $zero # stop background sound
		li $v0, 122
		syscall
		addi $a0, $zero, -1 # special id for lose_text
		addi $a1, $zero, 80
		addi $a2, $zero, 280		
		la $a3, game_lose
		li $v0, 104
		syscall # game lose
		li $v0, 119
		syscall # refresh screen
		addi $a0, $zero, 4
		add $a1, $zero, $zero
		li $v0, 105
		syscall
		j game_pause
win:		add $a0, $zero, $zero # stop background sound
		li $v0, 122
		syscall
		addi $a0, $zero, -2 # special id for win_text
		addi $a1, $zero, 80
		addi $a2, $zero, 280
		la $a3, game_win
		li $v0, 104
		syscall # game win
		li $v0, 119
		syscall # refresh screen
		addi $a0, $zero, 4
		add $a1, $zero, $zero
		li $v0, 105
		syscall
game_pause:	add $a0, $s6, $zero
		addi $a1, $zero, 600
		jal have_a_nap
		li $v0, 10
		syscall


#--------------------------------------------------------------------
# func: destroy_bomb
# destroy all the bombs in Java memory
#--------------------------------------------------------------------
destroy_bomb:	
		addi $sp, $sp, -12
		sw $ra, 0($sp)
		sw $s0, 4($sp)
		sw $s1, 8($sp)
		
		# destory simple bombs
		la $s1, bomb_num # $s0 = bomb_num
		lw $s0, 0($s1)
		la $t0, bomb_ids # $t0 = starting address of bomb_ids
		add $t1, $zero, $zero # $t1 = loop counter i
db_loop: 	beq $t1, $s0, destroy_rbomb # finish loop all simple bomb, go to handle remote bomb
		add $t2, $t1, $zero # $t2 = i
		sll $t2, $t2, 2 # $t2 = 4i
		add $t2, $t2, $t0 # $t2 = bomb_ids base + 4i
		lw $a0, 0($t2)	# get bomb id in $a0 and destroy it
		li $v0, 116
		syscall
		addi $t1, $t1, 1
		j db_loop
		# destory remote bombs
destroy_rbomb:	la $s1, rbomb_num # $s0 = rbomb_num
		lw $s0, 0($s1)
		la $t0, rbomb_ids # $t0 = rstarting address of bomb_ids
		add $t1, $zero, $zero # $t1 = loop counter i
drb_loop: 	beq $t1, $s0, destroy_bomb_exit # finish loop all remote bomb, go to clear screen				
		add $t2, $t1, $zero # $t2 = i
		sll $t2, $t2, 2 # $t2 = 4i
		add $t2, $t2, $t0 # $t2 = rbomb_ids base + 4i
		lw $a0, 0($t2)	# get rbomb id in $a0 and destroy it
		li $v0, 116
		syscall
		addi $t1, $t1, 1
		j drb_loop
destroy_bomb_exit:
		lw $ra, 0($sp)
		lw $s0, 4($sp)
		lw $s1, 8($sp)
		addi $sp, $sp, 12
		jr $ra

#--------------------------------------------------------------------
# func: init_game (um_Alien, num_simple_boms, 
#                  num_remote_bombs)
# 1. create the ship: located at the point (320, 440)
# 2. create Aliens;     
# 3. init the ids for simple bombs and remote bombs
#--------------------------------------------------------------------
init_game:
	addi $sp, $sp, -20
	sw $ra, 16($sp)
	sw $s0, 12($sp)
	sw $s1, 8($sp)
	sw $s2, 4($sp)
	sw $s3, 0($sp)
	add $s1, $a1, $zero # $s1 = num_Alien
	add $s2, $a2, $zero # $s2 = num_bomb
	add $s3, $a3, $zero # $s3 = num_rbomb
	# 1. create the ship
	li $v0, 101
	li $a0, 1 # the id of ship is 1
	li $a1, 320 # the x_loc of ship
	li $a2, 440 # the y_loc of ship
	la $t0, Ship_speed
	lw $a3, 0($t0) # set the speed
	syscall
	# 2. create the specified number of Aliens
	add $a0, $s1, $zero
	jal create_multi_Aliens
	la $t0, Alien_num # keep the record of the num of Aliens
	sw $s1, 0($t0)
	# 3. init simple bombs ids and remote bombs ids
	add $a0, $s2, $zero
	add $a1, $s3, $zero
	jal init_bomb_settings	
	# refresh screen
	li $v0, 119
	syscall
ig_exit:
	lw $ra, 16($sp)
	lw $s0, 12($sp)
	lw $s1, 8($sp)
	lw $s2, 4($sp)
	lw $s3, 0($sp)
	addi $sp, $sp, 20
	jr $ra
#--------------------------------------------------------------------
# func create_multi_Aliens(num)
# @num: the number of Aliens
# Create multiple Aliens on the Game Screen.
#--------------------------------------------------------------------
create_multi_Aliens:
		addi $sp, $sp, -20
		sw $ra, 16($sp)
		sw $s0, 12($sp) # totoal num
		sw $s1, 8($sp) # created num
		sw $s2, 4($sp)		
		add $s2, $zero, $zero		
		# calculate id
		la $t0, Alien_base
		lw $t1, 0($t0)
		add $a0, $t1, $zero # set id
		la $t0, Alien_speed
		lw $a3, 0($t0)	# Alien speed
		addi $a2, $zero, 120				
		la $t0, Alien_row
		lw $s0, 0($t0)
cms_be_row:	beq $s0, $zero, cms_be_row_exit
		la $t0, Alien_col
		lw $s1, 0($t0)
		addi $a1, $zero, 200
cms_be_col:	beq $s1, $zero, cms_be_col_exit
		add $a0, $a0, $s2
		# before syscall, save id, (x_loc, y_loc)
		la $t0, Alien_ids
		add $t1, $s2, $zero
		sll $t1, $t1, 2
		add $t1, $t1, $t0
		sw $a0, 0($t1) # save id
		la $t0, Alien_locs
		add $t1, $s2, $zero
		sll $t1, $t1, 3
		add $t1, $t1, $t0
		sw $a1, 0($t1) # save x_loc
		sw $a2, 4($t1) # save y_loc
		li $v0, 102
		addi $t0, $zero, 1
		syscall
		addi $a1, $a1, 160
		addi $s2, $s2, 1
		subi $s1, $s1, 1
		j cms_be_col
cms_be_col_exit:	addi $a2, $a2, 60
			subi $s0, $s0, 1
			j cms_be_row
cms_be_row_exit:	lw $ra, 16($sp)
			lw $s0, 12($sp)
			lw $s1, 8($sp)
			lw $s2, 4($sp)
			addi $sp, $sp, 20
			jr $ra
		
	
#--------------------------------------------------------------------
# func init_bomb_settings(num_bombs, num_rbombs)
# Initialize the "data structure" for simple bombs and remote bombs:
# bomb_ids, bomb_num = @num_bombs, bomb_count = 0;
# rbomb_ids, rbomb_num = @num_rbombs, rbomb_count = 0;
#--------------------------------------------------------------------
init_bomb_settings:
		addi $sp, $sp, -16
		sw $ra, 12($sp)
		sw $s0, 8($sp)
		sw $s1, 4($sp)
		sw $s2, 0($sp)
		
		add $s0, $a0, $zero # $s0 = num_bombs
		add $s1, $a1, $zero # $s1 = num_rbombs
		la $t0, bomb_num # bomb_num = $a0
		sw $s0, 0($t0)
		la $t0, rbomb_num # rbomb_num = $a1
		sw $s1, 0($t0)
		add $a0, $s0, $zero
		add $a1, $s1, $zero
		li $v0, 123
		syscall # update bomb number info
		la $t0, bomb_count # bomb_count = 0
		sw $zero, 0($t0)
		la $t0, rbomb_count # rbomb_count = 0
		sw $zero, 0($t0)
		# set $s0 ids for bomb_ids
		la $t0, bomb_base
		lw $s2, 0($t0) # $s2 = base_id for simple bomb
		la $t0, bomb_ids # $t0 = starting address of bomb_ids
ibs_bb:		beq $s0, $zero, ibs_be # finish bomb id setting
		addi $t1, $s0, -1
		sll $t1, $t1, 2
		add $t1, $t1, $t0
		sw $s2, 0($t1)
		addi $s2, $s2, 1
		addi $s0, $s0, -1
		j ibs_bb
		# set $s1 ids for rbomb_ids
ibs_be:		la $t0, rbomb_base
		lw $s2, 0($t0) # $s2 = base_id for remote bomb
		la $t0, rbomb_ids # $t0 = starting address of rbomb_ids	
ibs_rb:		beq $s1, $zero, ibs_exit # finish remote bomb id setting
		addi $t1, $s1, -1
		sll $t1, $t1, 2
		add $t1, $t1, $t0
		sw $s2, 0($t1)
		addi $s2, $s2, 1
		addi $s1, $s1, -1
		j ibs_rb
ibs_exit:	lw $ra, 12($sp)
		lw $s0, 8($sp)
		lw $s1, 4($sp)
		lw $s2, 0($sp)
		addi $sp, $sp, 16
		jr $ra

#--------------------------------------------------------------------
# func process_input
# Read the keyboard input and handle it!
#--------------------------------------------------------------------
process_input:	addi $sp, $sp, -4
		sw $ra, 0($sp)
		jal get_keyboard_input # $v0: the return value
		addi $t0, $zero, 32 # corresponds to key 'space'
		beq $v0, $t0, pi_emit_bomb
		addi $t0, $zero, 114 # corresponds to key 'r'
		beq $v0, $t0, pi_emit_rbomb
		addi $t0, $zero, 119 # corresponds to key 'w'
		beq $v0, $t0, pi_activate_rbombs
		addi $t0, $zero, 97 # corresponds to key 'a'
		beq $v0, $t0, pi_ship_left
		addi $t0, $zero, 100 # corresponds to key 'd'
		beq $v0, $t0, pi_ship_right
		j pi_exit
pi_emit_bomb:	jal emit_one_bomb
		j pi_exit
pi_emit_rbomb:	jal emit_one_rbomb
		j pi_exit
pi_activate_rbombs:
		jal activate_rbombs
pi_exit:	lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra

#--------------------------------------------------------------------
# func emit_one_bomb
# 1. check whether there are avaiable bombs to use.
# 2. if yes, create one bomb object
#--------------------------------------------------------------------
emit_one_bomb:	addi $sp, $sp, -16
		sw $ra, 12($sp)
		sw $s0, 8($sp)
		sw $s1, 4($sp)
		sw $s2, 0($sp)
		la $t0, bomb_num
		lw $s0, 0($t0)
		la $t0, bomb_count
		lw $s1, 0($t0)
		slt $t1, $s1, $s0
		bne $t1, $zero, eob_go
		j eob_exit
eob_go:		li $a0, 1 # get the location of ship
		li $v0, 110
		syscall
		sub $s0, $v0, 0 # x_loc for the bomb
		sub $s2, $v1, 10 # y_loc for the bomb
		la $t0, bomb_ids # create one bomb object
		sll $t1, $s1, 2
		add $t1, $t0, $t1
		lw $a0, 0($t1) # $a0: the id value to be used
		add $a1, $s0, $zero
		add $a2, $s2, $zero
		addi $a3, $zero, 6 # speed is 6
		li $v0, 106 # create a simple bomb
		syscall
		la $t0, bomb_count
		addi $s1, $s1, 1
		sw $s1, 0($t0) # bomb_count += 1
		la $t0, bomb_num
		lw $t1, 0($t0)
		sub $t1, $t1, $s1 # $t1: the left number of simple bombs
		add $a0, $t1, $zero
		addi $a1, $zero, -1
		li $v0, 123
		syscall # update the number of simple bomb left
		li $v0, 105
		addi $a0, $zero, 2
		add $a1, $zero, $zero
		syscall # play key sound
eob_exit:	lw $ra, 12($sp)
		lw $s0, 8($sp)
		lw $s1, 4($sp)
		lw $s2, 0($sp)
		addi $sp, $sp, 16
		
		# --------- REMOVE FROM -----------
		addi $sp, $sp, -4
		sw $ra, 0($sp)
		jal print_bomb_array
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		# --------- REMOVE TO   ------------
		jr $ra	

#--------------------------------------------------------------------
# func emit_one_rbomb
# 1. check whether there are avaiable remote bombs to use.
# 2. if yes, create one remote bomb object
#--------------------------------------------------------------------
emit_one_rbomb:	addi $sp, $sp, -16
		sw $ra, 12($sp)
		sw $s0, 8($sp)
		sw $s1, 4($sp)
		sw $s2, 0($sp)
		la $t0, rbomb_num
		lw $s0, 0($t0)
		la $t0, rbomb_count
		lw $s1, 0($t0)
		slt $t1, $s1, $s0
		bne $t1, $zero, eor_go
		j eor_exit
eor_go:		li $a0, 1 # get the location of ship
		li $v0, 110
		syscall
		sub $s0, $v0, 0 # x_loc for the bomb
		sub $s2, $v1, 10 # y_loc for the bomb
		la $t0, rbomb_ids # create one remote bomb object
		sll $t1, $s1, 2
		add $t1, $t0, $t1
		lw $a0, 0($t1) # $a0: the id value to be used
		add $a1, $s0, $zero
		add $a2, $s2, $zero
		addi $a3, $zero, 6 # speed is 6
		li $v0, 107 # create a remote bomb
		syscall
		la $t0, rbomb_count
		addi $s1, $s1, 1
		sw $s1, 0($t0) # rbomb_count += 1
		la $t0, rbomb_num
		lw $t1, 0($t0)
		sub $t1, $t1, $s1 # $t1: the left number of remote bombs
		add $a1, $t1, $zero
		addi $a0, $zero, -1
		li $v0, 123
		syscall # update the number of remote bomb left	
		li $v0, 105
		addi $a0, $zero, 2
		add $a1, $zero, $zero
		syscall # play key sound
eor_exit:	lw $ra, 12($sp)
		lw $s0, 8($sp)
		lw $s1, 4($sp)
		lw $s2, 0($sp)
		addi $sp, $sp, 16
		jr $ra	

#--------------------------------------------------------------------
# func activate_rbombs
# Activate all the remote bombs: change their status to "activated"!
#--------------------------------------------------------------------
activate_rbombs:
		addi $sp, $sp, -12
		sw $ra, 8($sp)
		sw $s0, 4($sp)
		sw $s1, 0($sp)
		la $t0, rbomb_count
		lw $s0, 0($t0) # $s0: the value of rbomb_count
		la $s1, rbomb_ids
ar_loop:	beq $s0, $zero, ar_exit
		addi $t0, $s0, -1
		sll $t0, $t0, 2
		add $t0, $t0, $s1
		lw $t1, 0($t0)
		beq $t1, $zero, ar_next
		add $a0, $t1, $zero
		li $v0, 109 # activate remote bomb
		syscall
ar_next:	addi $s0, $s0, -1
		j ar_loop
ar_exit:	lw $ra, 8($sp)
		lw $s0, 4($sp)
		lw $s1, 0($sp)
		addi $sp, $sp, 12
		jr $ra

#--------------------------------------------------------------------
# func check_intersection(recA, recB)
# @recA: ((x1, y1), (x2, y2)), top-left and bottom-right coordinates
# @recB: ((x3, y3), (x4, y4))
# these 8 parameters are passed through stack!
# @params: the coordinates of RectA and RectB are passed through stack.
# 	   In total, 8 words are passed. RectA is followed by RectB, as shown below. 
#	
#	| RectA.topleft_x |
#	| RectA.topleft_y |
#	| RectA.botrigt_x |
#	| RectA.botrigh_y |
#	| RectB.topleft_x |
#	| RectB.topleft_y |
#	| RectB.botrigt_x |
#	| RectB.botrigh_y | <-- $sp 

# This function is to check whether the above two rectangles are intersected!
# @return $v0=1: true(intersect with each other); 0: false
#--------------------------------------------------------------------
check_intersection:
#***Task 2:
# Hints:
# Firstly, load 8 parameters/coordinates from the stack.
# Secondly, check the conditions in which there could be no intersection:
#          condition1: whether recA's left edge is to the right of recB's right edge;
#          condition2: whether recA's right edge is to the left of recB's left edge;
#          condition3: whether recA's top edge is below recB's bottom edge;
#          condition4: whether recA's bottom edge is above recB's top edge.
# Thirdly, set the value of $v0 based on the check result. Then: jr $ra 
#***You codes start here
		lw $t0, 28($sp)		# A_top_left_x
		lw $t1, 24($sp)		# A_top_left_y
		lw $t2, 20($sp)		# A_bot_right_x
		lw $t3, 16($sp)		# A_bot_right_y
		lw $t4, 12($sp)		# B_top_left_x
		lw $t5, 8($sp)		# B_top_left_y
		lw $t6, 4($sp)		# B_bot_right_x
		lw $t7, 0($sp)		# B_bot_right_y
		
		sgt $t8, $t0, $t6	# Condition1: A_left > B_right 
		beq $t8, 1, no_intersection
		slt $t8, $t2, $t4	# Condition2: A_right < B_left
		beq $t8, 1, no_intersection
		sgt $t8, $t1, $t7	# Condition3: A_top > B_bot
		beq $t8, 1, no_intersection
		slt $t8, $t3, $t5	# Condition4L A_bot < B_top
		beq $t8, 1, no_intersection
		
		li $v0, 1		
		jr $ra
		
no_intersection:
		li $v0, 0
		jr $ra
#***Your codes end here





#--------------------------------------------------------------------
# func check_bomb_hits
# 1. For each simple bomb, check whether it hits any Alien.
# 2. For each remote bomb, check whether the activated one hits
#    any Alien.
# 3. update the score value! 
#--------------------------------------------------------------------
check_bomb_hits:
		addi $sp, $sp, -16
		sw $ra, 12($sp)
		sw $s0, 8($sp)
		sw $s1, 4($sp)
		sw $s2, 0($sp)
		la $t0, bomb_count
		lw $s0, 0($t0) # $s0: the number of 'running' simple bombs
		la $s1, bomb_ids
cbh_bn:		beq $s0, $zero, cbh_rb
		addi $t0, $s0, -1
		sll $t0, $t0, 2
		add $t0, $s1, $t0
		lw $s2, 0($t0) # $s2: the id of the simple bomb
		add $a0, $s2, $zero
		jal check_one_bomb_hit
		addi $s0, $s0, -1
		j cbh_bn
cbh_rb:		la $t0, rbomb_count
		lw $s0, 0($t0) # $s0: the number of 'running' remote bombs
		la $s1, rbomb_ids
cbh_rbb:	beq $s0, $zero, cbh_exit
		addi $t0, $s0, -1
		sll $t0, $t0, 2
		add $t0, $s1, $t0
		lw $s2, 0($t0) # $s2: the id of the remote bomb
		# check the status of the bomb: whether it is already activated
		add $a0, $s2, $zero
		li $v0, 108
		syscall
		li $t0, 1
		bne $v0, $t0, cbh_mn
		add $a0, $s2, $zero
		jal check_one_bomb_hit
cbh_mn:		addi $s0, $s0, -1
		j cbh_rbb
cbh_exit:	lw $ra, 12($sp)
		lw $s0, 8($sp)
		lw $s1, 4($sp)
		lw $s2, 0($sp)
		addi $sp, $sp, 16
		jr $ra

#--------------------------------------------------------------------
# check_one_bomb_hit
# Given the bomb id, check whether it hits with any alien.
# $a0: bomb id
# check_one_bomb_hit calls check_intersection to check whether the bomb hits with a single alien
#--------------------------------------------------------------------
check_one_bomb_hit:

#***Task 3:
# Hints:
# Preserve registers in stack
# Given the bomb id in $a0, get (x, y) location of the bomb.
# Loop for all aliens, check whether the bomb hit any of them
# For each alien
	# Grab its id, if alien id is 0, it's already dead, go to check next alien. Otherwise, the alien is still alive.
	# if the alien is still alive, get (x, y) location of the alien.
	# Check whether the bomb intersects with the alien by calling check_intersection
	# check_intersection checks interseciton of 2 objects. Refer to details in the check_intersection procedure
	# check_intersection returns 1 (intersect) or 0 (not intersect) in $v0
	# If the bomb hits an alien, reduce HP of bomb and alien to 0 (syscall 114), play hit sound (syscall 105)
	# If the bomb doesn't hit an alien, do nothing, go to next iteration
# pop preserved registers then: jr $ra 

#***You codes start here
		addi $sp, $sp, -40
		sw $a0, 36($sp)
		sw $ra, 32($sp)
		
		# Process coor of bomb
		li $v0, 110
		syscall
		sw $v0, 28($sp)			# push bomb top_left_x to stack
		sw $v1, 24($sp)			# push bomb top_left_y to stack
		addi $v0, $v0, 30
		addi $v1, $v1, 30
		sw $v0, 20($sp)			# push bomb bot_right_x to stack
		sw $v1, 16($sp)			# push bomb bot_right_y to stack
		
		# Aliens iteration
		la $s3, Alien_num
		lw $s3, 0($s3)			# $s3: the number of aliens
		li $s4, 0			# $s4: processed number of aliens
		la $s5, Alien_ids		# $s5: array of Alien_ids
		li $t9, 0			# $t9: Bool = hit any alien
		
next_alien_iteration:
		sll $a0, $s4, 2			# $a0 = current alien * 4
		add $a0, $a0, $s5		# $a0 = address of ID of alien
		lw $a0, 0($a0)			# $a0 = current id of alien
		bne $a0, 0, alien_not_dead
		j bomb_not_hit
alien_not_dead:
		li $v0, 110
		syscall
		addi $v0, $v0, 35		# Ref. to Doc 4.2
		sw $v0, 12($sp)			# push alien top_left_x to stack
		sw $v1, 8($sp)			# push alien top_left_y to stack
		addi $v0, $v0, 10
		addi $v1, $v1, 60
		sw $v0, 4($sp)			# push alien bot_right_x to stack
		sw $v1, 0($sp)			# push alien bot_right_y to stack
		
		li $v0, 118				# get alien hp
		syscall
		beq $v0, 0, bomb_not_hit

		jal check_intersection
		beq $v0, 0, bomb_not_hit

		li $t9, 1			# a flag that help check if bomb hit any alien
		
		li $a1, 20
		li $v0, 114			# set HP to 0
		syscall
		
bomb_not_hit:
		addi $s4, $s4, 1		
		beq $s4, $s3, end_alien_iteration	# end iteration if (current num == alien_num after addition)
		j next_alien_iteration

end_alien_iteration:
		bne $t9, 1, not_hitting_any_alien
		
		lw $a0, 36($sp)
		li $a1, 1
		li $v0, 114			# set bomb_HP to 0
		syscall	

		li $a0, 1
		li $a1, 0			
		li $v0, 105			# play sound
		syscall

		# --------- REMOVE FROM -----------
		addi $sp, $sp, -4
		sw $ra, 0($sp)
		jal print_bomb_array
		lw $ra, 0($sp)
		addi $sp, $sp, 4
		# --------- REMOVE TO   ------------
		
not_hitting_any_alien:
		lw $ra, 32($sp)
		addi $sp, $sp, 40
		jr $ra

#***Your codes end here


#--------------------------------------------------------------------
# func: update_score
# The score will be collected from Aliens.
#--------------------------------------------------------------------
update_score:	addi $sp, $sp, -16
		sw $ra, 12($sp)
		sw $s0, 8($sp)
		sw $s1, 4($sp)
		sw $s2, 0($sp)
		add $s2, $zero, $zero # $s2: score
		la $t0, Alien_num
		lw $s0, 0($t0)
us_loop:	beq $s0, $zero, us_exit
		addi $t0, $s0, -1
		sll $t0, $t0, 2
		la $t1, Alien_ids
		add $t0, $t1, $t0
		lw $s1, 0($t0) # the id of the Aliens
		beq $s1, $zero, us_des # already destroyed Alien
		add $a0, $s1, $zero
		li $v0, 115 # get object score
		syscall
		add $s2, $s2, $v0
		addi $s0, $s0, -1
		j us_loop
us_des:		addi $s2, $s2, 20 
		addi $s0, $s0, -1
		j us_loop
us_exit:	add $a0, $s2, $zero
		li $v0, 117
		syscall # update the game score	
		lw $ra, 12($sp)
		lw $s0, 8($sp)
		lw $s1, 4($sp)
		lw $s2, 0($sp)
		addi $sp, $sp, 16
		jr $ra


#--------------------------------------------------------------------
# func: check_game_level_status
# Check whether the game of current level is win/lose/continue playing
# $v0=0: continue playing the current level; =1: win current level; =2: lose the current level
# If one alien touch the space base, namely its y-label exceeds 420, the status is lose. 
# If all aliens is destroyed, the status is win.
# Otherwise, the status is continue
#--------------------------------------------------------------------

#***Task 4:
# Hints:
# Preserve registers in stack.
# For each alien
	# Grab its id and check whether it is alive
	# if it is alive, get its (x, y) location, check whether its y-label exceeds 420
# If there is any alien's y-label exceeding 420, the game of current level status is lose.
# Else if there is no alien still alive, the game of current level status is win.
# Else continue the game.
# pop preserved registers then: jr $ra 

check_game_level_status:
# Your codes start here.
		la $t0, Alien_num
		lw $t0, 0($t0)			# $t0 = num of aliens
		
		la $t1, Alien_ids		# $t1 = array of alien id
		li $t2, 0			# $t2 = i pointting array $t1
		
		li $t3, 0			# a flag indicate that any surviving alien
		
game_status_iteration:
		sll $a0, $t2, 2			# $a0 = 4 * i
		add $a0, $a0, $t1		# $a0 = Alien_ids[a0]
		lw $a0, 0($a0)			# $a0 = current alien's id
		
		# TWO OPTIONS :
		# 1. ID == 0
		# 2. HP == 0
		
		beq $a0, 0, dead_alien		# if (alienID == 0) next iteration
		
		li $t3, 1			# at least 1 alien survive
		
		li $v0, 110			# get alien coor
		syscall


		sgt $t4, $v1, 419		# check yloc > 420
		bne $t4, 1, dead_alien		# if (yloc <= 420) enter next iteration
		li $v0, 2			# else GAME OVER
		jr $ra
		

dead_alien:					# process for next iteration
		addi $t2, $t2, 1
		beq $t2, $t0, end_game_status_iteration
		j game_status_iteration
		
end_game_status_iteration:
		beq $t3, 1, game_will_continue	# if (there is / are alien, and not yet lose) continue
		li $v0, 1			# else WIN
		jr $ra
		
game_will_continue:
		li $v0, 0 
		jr $ra
# Your codes end here. 	

	
			
#--------------------------------------------------------------------
# Move the ship by one step, determined by its speed and input direction.
# If the ship is going to cross the boarder, block the move operation!
#--------------------------------------------------------------------	
#***Task 1:
# Hints:
# grab ship location (x, y)
# set ship direction in terms of user's input
# calculate new ship location, in terms of direction and speed.
# if the new location is within game screen, syscall 120
# if the new location is outside the game screen, syscall 120 to fix it in boundary

#***Your codes start here.
pi_ship_left:	
		li $a0, 1				# get coor of space ship (ID = 1)
		li $v0, 110				# save result to $v0, $v1
		syscall
		
		la $t0, Ship_speed
		lw $t0, 0($t0)				# load space ship speed
		sub $a1, $v0, $t0			# x-coor shift left by speed
		add $a2, $v1, $zero			# y-coor remain unchange
		
		slti $t1, $a1, 0			# check out of bound
		beq $t1, 0, ship_inside_bound
		li $a1, 0				# set x-coor to 0 if left out of bound
		j ship_inside_bound

# ship_left_inside_bound:
# 		li $v0, 120				# update location
# 		syscall	
# 		j pi_exit

pi_ship_right:	
		li $a0, 1
		li $v0, 110
		syscall	
		
		la $t0, Ship_speed
		lw $t0, 0($t0)
		add $a1, $v0, $t0			# shift right by speed
		add $a2, $v1, $zero
		
		la $t2, width
		lw $t2, 0($t2)				# load screen width
		addi $t2, $t2, -40			# this width can perfectly show the ship within bound, DONT ASK ME WHY
		sgt $t1, $a1, $t2
		beq $t1, 0, ship_inside_bound
		add $a1, $t2, $zero			# set x-coor to bound if right out of bound
		
ship_inside_bound:
		li $v0, 120				# update location
		syscall	
		j pi_exit
#***Your codes end here.





#--------------------------------------------------------------------
# func: move_Aliens 
# Move aliens to the next location. 
# If any alien passes across the border, turn all aliens around 
# and all aliens will go down of 20-pixel.
#--------------------------------------------------------------------	
move_Aliens:
		addi $sp, $sp, -20
		sw $v0, 16($sp)
		sw $ra, 12($sp)
		sw $s0, 8($sp)
		sw $s1, 4($sp)
		sw $s2, 0($sp)
		la $t0, Alien_num
		lw $s2, 0($t0) # $s2: the number of Aliens
mm_be:		beq $s2, $zero, mm_exit
		la $t0, Alien_ids # $t0: unchanged till the end
		addi $t1, $s2, -1
		sll $t1, $t1, 2
		add $t2, $t1, $t0 # $t2: the address of id
		lw $t1, 0($t2) # $t1: the id of a Alien	
		beq $t1, $zero, mm_next
		li $v0, 110
		add $a0, $t1, $zero # id of Alien
		syscall  # v0=x_loc v1=y_loc
		add $s0, $v0, $zero #xold
		add $s1, $v1, $zero #yold
		li $v0, 112 # get direction
		syscall
		add $t0, $v0, $zero 
		beq $t0, $zero, mm_left # Alien direction: left; check left border
		addi $t0, $zero, 720
		slt $t1, $t0, $s0
		bne $t1, $zero, all_left
		li $v0, 121 # no need to turn direction, move one step
		syscall 
		j mm_next	
all_left:	addi $sp, $sp, -44
		sw $a0, 40($sp)
		sw $a1, 36($sp)
		sw $a2, 32($sp)
		sw $t0, 28($sp)
		sw $t1, 24($sp)
		sw $t2, 20($sp)
		sw $s0, 16($sp)
		sw $s1, 12($sp)
		sw $s2, 8($sp)
		sw $v0, 4($sp)
		sw $v1, 0($sp)
		la $t0, Alien_num
         	lw $s2, 0($t0) # $s2: the number of Aliens
left_be:	beq $s2, $zero, turn_exit
		la $t0, Alien_ids 
		addi $t1, $s2, -1
		sll $t1, $t1, 2
		add $t2, $t1, $t0 # $t2: the address of id
		lw $t1, 0($t2) # $t1: the id of a Alien	
		add $a0, $t1, $zero # id of Alien
		beq $t1, $zero, left_next
		li $v0, 110
		syscall
		add $a1, $v0, $zero
		addi $a2, $v1, 20  # Aline goes down
		li $v0, 120 # set object location
		syscall
		li $v0, 113
		li $a1, 0 # turn left
		syscall
		j left_next
left_next:	addi $s2, $s2, -1
		j left_be		
turn_exit:     	lw $a0, 40($sp)
		lw $a1, 36($sp)
		lw $a2, 32($sp)
		lw $t0, 28($sp)
		lw $t1, 24($sp)
		lw $t2, 20($sp)
		lw $s0, 16($sp)
		lw $s1, 12($sp)
		lw $s2, 8($sp)
		lw $v0, 4($sp)
		lw $v1, 0($sp)
		addi $sp, $sp, 44
		j mm_exit
all_right:	addi $sp, $sp, -44
		sw $a0, 40($sp)
		sw $a1, 36($sp)
		sw $a2, 32($sp)
		sw $t0, 28($sp)
		sw $t1, 24($sp)
		sw $t2, 20($sp)
		sw $s0, 16($sp)
		sw $s1, 12($sp)
		sw $s2, 8($sp)
		sw $v0, 4($sp)
		sw $v1, 0($sp)
		la $t0, Alien_num
         	lw $s2, 0($t0) # $s2: the number of Aliens
right_be:	beq $s2, $zero, turn_exit
		la $t0, Alien_ids 
		addi $t1, $s2, -1
		sll $t1, $t1, 2
		add $t2, $t1, $t0 # $t2: the address of id
		lw $t1, 0($t2) # $t1: the id of a Alien	
		add $a0, $t1, $zero # id of Alien
		beq $t1, $zero, right_next
		li $v0, 110
		syscall
		add $a1, $v0, $zero
		addi $a2, $v1, 20  # Aline goes down
		li $v0, 120 # set object location
		syscall
		li $v0, 113
		li $a1, 1 # turn right
		syscall
		j right_next
right_next:	addi $s2, $s2, -1
		j right_be		
mm_left:	slti $t0, $s0, 0
		bne $t0, $zero, all_right
		li $v0, 121 # no need to turn direction, move one step
		syscall
		j mm_next
mm_next:	addi $s2, $s2, -1
		j mm_be
mm_exit:	lw $v0, 16($sp)
		lw $ra, 12($sp)
		lw $s0, 8($sp)
		lw $s1, 4($sp)
		lw $s2, 0($sp)
		addi $sp, $sp, 20
		jr $ra

			
#--------------------------------------------------------------------
# func: move_bombs
# If a bomb is going to cross the bottom, destroy the bomb and
# increase the available number of boms.
# Eg:=> if y_old + speed >= 600, then destory it;
#--------------------------------------------------------------------	
move_bombs:	addi $sp, $sp, -20
		sw $ra, 16($sp)
		sw $s0, 12($sp)
		sw $s1, 8($sp)
		sw $s2, 4($sp)
		sw $s3, 0($sp)
		# process simple bombs
		la $t0, bomb_count
		lw $s0, 0($t0) # $s0: the left number of bombs to move
		add $s3, $s0, $zero # $s3: the last end of the active bomb ids
		la $s1, bomb_ids # $s1: starting address of bomb ids
mb_bb:		beq $s0, $zero, mb_rbb
		addi $t1, $s0, -1
		sll $t1, $t1, 2
		add $t1, $s1, $t1 # $t1: the address of one bomb id
		lw $s2, 0($t1) # $s2: the id of a bomb
		add $a0, $s2, $zero # get bomb location
		li $v0, 110
		syscall # $v0: xloc, $v1: yloc
		slti $t1, $v1, 4
		beq $t1, $zero, mb_mn # if $t1 == 0, simply move one step
		# have to destroy this bomb object
		li $v0, 116 # destory the object
		syscall
		# ! exchage bomb_id[$s0] <-> bomb_id[$s3]
		addi $t0, $s3, -1
		sll $t0, $t0, 2
		add $t0, $s1, $t0
		lw $t2, 0($t0) # $t2 = bomb_id[$s3]
		addi $t3, $s0, -1
		sll $t3, $t3, 2
		add $t3, $s1, $t3
		sw $t2, 0($t3) # bomb_id[$s0] = $t2
		sw $s2, 0($t0) # bomb_id[$s3] = bomb_id[$s0]
		addi $s3, $s3, -1
		la $t0, bomb_count # bomb_count -= 1
		sw $s3, 0($t0)
		la $t0, bomb_num
		lw $t1, 0($t0)
		sub $t1, $t1, $s3 # $t1: the left number of simple bombs
		add $a0, $t1, $zero
		addi $a1, $zero, -1
		li $v0, 123
		syscall # update the number of simple bomb left
		addi $s0, $s0, -1
		j mb_bb
mb_mn:		li $v0, 121
		syscall
		addi $s0, $s0, -1
		j mb_bb
mb_rbb:		# process remote bombs
		la $t0, rbomb_count
		lw $s0, 0($t0) # $s0: the left number of remote bombs to move
		add $s3, $s0, $zero # $s3: the last end of the active remote bomb ids
		la $s1, rbomb_ids # $s1: starting address of remote bomb ids
mb_rb:		beq $s0, $zero, mb_exit
		addi $t1, $s0, -1
		sll $t1, $t1, 2
		add $t1, $s1, $t1 # $t1: the address of one remote bomb id
		lw $s2, 0($t1) # $s2: the id of a remote bomb
		add $a0, $s2, $zero # get remote bomb location
		li $v0, 110
		syscall # $v0: xloc, $v1: yloc
		slti $t1, $v1, 4
		beq $t1, $zero, mb_rmn # if $t1 == 0, simply move one step
		# have to destroy this remote bomb object
		li $v0, 116 # destory the object
		syscall
		# ! exchage rbomb_id[$s0] <-> rbomb_id[$s3]
		addi $t0, $s3, -1
		sll $t0, $t0, 2
		add $t0, $s1, $t0
		lw $t2, 0($t0) # $t2 = rbomb_id[$s3]
		addi $t3, $s0, -1
		sll $t3, $t3, 2
		add $t3, $s1, $t3
		sw $t2, 0($t3) # rbomb_id[$s0] = $t2
		sw $s2, 0($t0) # rbomb_id[$s3] = rbomb_id[$s0]
		addi $s3, $s3, -1
		la $t0, rbomb_count # bomb_count -= 1
		sw $s3, 0($t0)
		la $t0, rbomb_num
		lw $t1, 0($t0)
		sub $t1, $t1, $s3 # $t1: the left number of remote bombs
		add $a1, $t1, $zero
		addi $a0, $zero, -1
		li $v0, 123
		syscall # update the number of remote bomb left
		addi $s0, $s0, -1
		j mb_rb
mb_rmn:		li $v0, 121
		syscall
		addi $s0, $s0, -1
		j mb_rb
mb_exit:	lw $ra, 16($sp)
		lw $s0, 12($sp)
		lw $s1, 8($sp)
		lw $s2, 4($sp)
		lw $s3, 0($sp)
		addi $sp, $sp, 20
		jr $ra

#--------------------------------------------------------------------
# func update_object_status
# 1. if the Alien is destroyed, then destroy the game object;
# 3. if the (r)bomb is already bombed, then destroy the game object;
#--------------------------------------------------------------------
update_object_status:
		addi $sp, $sp, -20
		sw $ra, 16($sp)
		sw $s0, 12($sp)
		sw $s1, 8($sp)
		sw $s2, 4($sp)
		sw $s3, 0($sp)
uos_sb:		# check the Aliens
		la $t0, Alien_num
		lw $s0, 0($t0) # $s0: the number of Aliens
uos_sbb:	beq $s0, $zero, uos_bb
		la $t0, Alien_ids
		addi $t1, $s0, -1
		sll $t1, $t1, 2
		add $s2, $t0, $t1
		lw $s1, 0($s2) # $s1: the id of the Alien
		beq $s1, $zero, uos_sd # this Alien already died
		add $a0, $s1, $zero
		li $v0, 118
		syscall # get the hit point of Alien
		bne $v0, $zero, uos_sd 
		add $a0, $s1, $zero # destroy the Alien object
		li $v0, 116
		syscall
		sw $zero, 0($s2) # set the Alien_ids[.] = 0
uos_sd: 	addi $s0, $s0, -1
		j uos_sbb
uos_bb:		# check the simple bombs
		la $t0, bomb_count
		lw $s0, 0($t0) # $s0: the number of running simple bombs
		add $s3, $s0, $zero # $s3: the last end of active bomb ids
uos_bbb:	beq $s0, $zero, uos_rb
		addi $t1, $s0, -1
		sll $t1, $t1, 2
		la $t0, bomb_ids
		add $t1, $t0, $t1
		lw $s2, 0($t1) # the id of the simple bomb
		add $a0, $s2, $zero 
		li $v0, 118 # get the hit point of the bomb
		syscall
		bne $v0, $zero, uos_bbd
		add $a0, $s2, $zero # destory the bomb object
		li $v0, 116
		syscall
		# ! exchange bomb_ids[$s0] <-> bomb_ids[$s3]
		addi $t0, $s3, -1
		sll $t0, $t0, 2
		la $t1, bomb_ids
		add $t0, $t1, $t0
		lw $t2, 0($t0) # $t2 = bomb_ids[$s3]
		addi $t3, $s0, -1
		sll $t3, $t3, 2
		add $t3, $t1, $t3
		sw $t2, 0($t3) # bomb_ids[$s0] = $t2
		sw $s2, 0($t0) # bomb_ids[$s3] = bomb_ids[$s0]
		addi $s3, $s3, -1
		la $t0, bomb_count
		sw $s3, 0($t0)
		la $t0, bomb_num
		lw $t1, 0($t0)
		sub $t1, $t1, $s3 # $t1: the left number of simple bombs
		add $a0, $t1, $zero
		addi $a1, $zero, -1
		li $v0, 123
		syscall # update the left number of simple bombs
uos_bbd:	addi $s0, $s0, -1
		j uos_bbb
uos_rb:		# check the remote bombs
		la $t0, rbomb_count
		lw $s0, 0($t0) # $s0: the number of running rbombs
		add $s3, $s0, $zero # $s3: the last end of the active rbomb ids
uos_rbb:	beq $s0, $zero, uos_exit
		addi $t1, $s0, -1
		sll $t1, $t1, 2
		la $t0, rbomb_ids
		add $t1, $t0, $t1
		lw $s2, 0($t1) # the id of the remote bomb
		add $a0, $s2, $zero 
		li $v0, 118 # get the hit point of the bomb
		syscall
		bne $v0, $zero, uos_rbd
		add $a0, $s2, $zero # destory the bomb object
		li $v0, 116
		syscall
		# ! exchange rbomb_ids[$s0] <-> rbomb_ids[$s3]
		addi $t0, $s3, -1
		sll $t0, $t0, 2
		la $t1, rbomb_ids
		add $t0, $t1, $t0
		lw $t2, 0($t0) # $t2 = rbomb_ids[$s3]
		addi $t3, $s0, -1
		sll $t3, $t3, 2
		add $t3, $t1, $t3
		sw $t2, 0($t3) # rbomb_ids[$s0] = $t2
		sw $s2, 0($t0) # rbomb_ids[$s3] = rbomb_ids[$s0]
		addi $s3, $s3, -1
		la $t0, rbomb_count
		sw $s3, 0($t0) 
		la $t0, rbomb_num
		lw $t1, 0($t0)
		sub $t1, $t1, $s3 # $t1: the left number of remote bombs
		add $a1, $t1, $zero
		addi $a0, $zero, -1
		li $v0, 123
		syscall # update the left number of remote bombs
uos_rbd:	addi $s0, $s0, -1
		j uos_rbb
uos_exit:	lw $ra, 16($sp)
		lw $s0, 12($sp)
		lw $s1, 8($sp)
		lw $s2, 4($sp)
		lw $s3, 0($sp)
		addi $sp, $sp, 20
		jr $ra
		
		
		

#--------------------------------------------------------------------
# func: get_time
# Get the current time
# $v0 = current time
#--------------------------------------------------------------------
get_time:	li $v0, 30
		syscall # this syscall also changes the value of $a1
		andi $v0, $a0, 0x3FFFFFFF # truncated to milliseconds from some years ago
		jr $ra

#--------------------------------------------------------------------
# func: have_a_nap(last_iteration_time, nap_time)
#--------------------------------------------------------------------
have_a_nap:
	addi $sp, $sp, -8
	sw $ra, 4($sp)
	sw $s0, 0($sp)
	add $s0, $a0, $a1
	jal get_time
	sub $a0, $s0, $v0
	slt $t0, $zero, $a0 
	bne $t0, $zero, han_p
	li $a0, 1 # sleep for at least 1ms
han_p:	li $v0, 32 # syscall: let mars java thread sleep $a0 milliseconds
	syscall
	lw $ra, 4($sp)
	lw $s0, 0($sp)
	addi $sp, $sp, 8
	jr $ra
	
#--------------------------------------------------------------------
# func get_keyboard_input
# $v0: ASCII value of the input character if input is available;
#      otherwise, the value is 0;
#--------------------------------------------------------------------
get_keyboard_input:
		addi $sp, $sp, -4
		sw $ra, 0($sp)
		add $v0, $zero, $zero
		lui $a0, 0xFFFF
		lw $a1, 0($a0)
		andi $a1, $a1, 1
		beq $a1, $zero, gki_exit
		lw $v0, 4($a0)
gki_exit:	lw $ra, 0($sp)
		addi $sp, $sp, 4
		jr $ra



print_bomb_array:
# ---------- REMOVE ME--------------
# 		addi $sp, $sp, -16
# 		sw $t2, 12($sp)
# 		sw $t1, 8($sp)
# 		sw $t0, 4($sp)
# 		sw $a0, 0($sp)

# 		la $t0, bomb_ids
# 		la $t1, bomb_count
# 		lw $t1, 0($t1)
# 		li $t2, 0
# print_iteration:
# 		beq $t2, $t1, print_end_line
# 		sll $a0, $t2, 2
# 		add $a0, $a0, $t0
# 		lw $a0, 0($a0)
# 		li $v0, 1
# 		syscall

# 		la $a0, space
# 		li $v0, 4
# 		syscall
# 		addi $t2, $t2, 1
# 		j print_iteration
# print_end_line:
# 		la $a0, endl
# 		li $v0, 4
# 		syscall

# 		lw $t2, 12($sp)
# 		lw $t1, 8($sp)
# 		lw $t0, 4($sp)
# 		lw $a0, 0($sp)
# 		addi $sp, $sp, 16

		jr $ra
# ---------- REMOVE ME--------------
