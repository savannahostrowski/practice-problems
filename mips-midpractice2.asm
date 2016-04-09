;; $1 - positive integer
;; $2 - positive integer
;; if $1 is a multiple of the value in $2 then print 'Y', else print
;; 'N'

	lis $4
	.word 0xFFFF000c	;; set up $4 as output
	div $1, $2
	mfhi $7
if:
	beq $7, $0, yes
	addi $5, $0, 78		;; 'N'
	beq $0, $0, endif
yes:
	addi $5, $0, 89		;; 'Y'
endif:
	sw $5, 0($4) 		;; output 'Y'
	jr $31





