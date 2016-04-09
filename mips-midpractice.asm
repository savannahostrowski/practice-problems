;; $1 - x
;; $2 - y

addi $3, $0, 4		;; 4
mult $3, $1			;; 4x
mflo $3
mult $3, $1			;; 4x^2
mflo $3
addi $3, $0, 3		;; 4x^2 + 3
mult $3, $2			;; 4x^2 + 3y
mflo $3
jr $31
