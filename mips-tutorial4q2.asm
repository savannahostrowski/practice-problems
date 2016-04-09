;; This program will complete the following computations:
;; a) p = (m + 10) - (n + 20)
;; b) if n is not 0, p = m/n
;; Assume $1 and $2 have been initialized using a front-end
;; Registers:
;; $1 - m
;; $2 - n
;; $3 - p


add $3, $1, $0			;; p = m
addi $3, $0, 10			;; p = m + 10
sub $3, $3, $2			;; p = m + 10 - n
addi $3, $3, 20			;; p = m + 10 - n + 20
beq $2, $0, 2			;; if $1 is 0, jump to jr $31 else...
div $1, $2				;; divide m by n
mflo $3					;; move result to p
jr $31



