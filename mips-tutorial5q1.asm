;; Convert all keyboard input to uppercase, ignoring symbols

	lis $1
	.word 0xFFFF0004			;; sets up $1 as input
	lis $2
	.word 0xFFFF000C			;; sets up $2 as output
	addi $3, $0, 0x1b			;; sets up $3 as ESC char
	addi $5, $0, 97				;; sets up $5 as 'a'
	addi $6, $0, 122			;; sets up $6 as 'z'
	addi $7, $0 32				;; difference between upper and lower
loop:
	lw $4, 0($1)				;; load from $1 into $4
	slt $8, $4, $5				;; is it less than 'a'?
	bne $8, $0, end				;; if so, then end
	slt $8, $6, $6 				;; is it greater than 'z'?
	bne $8, $0, end				;; if so, then end
	sub $4, $4, $7				;; convert to lowercase
end:
	sw $4, 0 ($2)				;; put in $2 for output
	bne $3, $4, loop			;; if not ESC then loop
	jr $31







