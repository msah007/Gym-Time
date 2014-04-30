#==============================================
#  fib_iterative
#  Iterative fibonacci just for kicks
# F(0) = 0, F(1) = 1, F(2) = 0
# Fn = Fn-1 + Fn-2
# Iteratively, start from 0
# i = 0, 
#==============================================

class fibint: #fibit sounds like drunk fitness watch

	#iteratively compute fib(n) super naive
	def fib_int(self, n):
		if n is 0:
			return 0
		elif n is 1: 
			return 1
		else:
			totes = 0
			minus = 1
			minus2 = 0

			for i in xrange(1, n):
				totes = minus + minus2
				minus2 = minus
				minus = totes

			return totes