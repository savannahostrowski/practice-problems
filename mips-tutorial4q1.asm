;; This program will put the remainder when you divide by y into
;; $3. Assume that you have an input from the front-end for the value
;; of $2 as x and the quadratic equation y=8x^2-x+5
;; Registers:
;; $1 - x
;; $2 - a number
;; $3 - result
;; $4 - 8



addi $3, $0, 8			;; initialize 8
mult $3, $1				;; 8x
mflo $3
mult $3, $1				;; 8x^2
mflo $3
sub $3, $3, $1			;; 8x^2 - x
addi $3, $3, 5          ;; 8x^2 - x - 5
div  $3, $2
mfhi $3
jr $31
