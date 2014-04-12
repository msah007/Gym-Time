#========================================================
# RotatedArrayChecker
# Check if second array is a 
# Rotated version of the first array. 
#       Ex. Original Array 
# A={1,2,3,5,6,7,8} Rotated Array B={5,6,7,8,1,2,3}
#
# Funny text conventions
#
# Assuming length of rotated arrays is constrained equal
# from this assumption, only have to rotate N times 
# can save time checking B[0], B[n], b[1], b[n-1]
#========================================================

class rac:

	# Check for rotated array
	def RotatedArray(self, inputA, inputB):
		self.localA = list(inputA)
		self.localAr = list(inputA)
		for i in range(len(inputA)):
			if self.localA == inputB:
				return True
			else:
				for i in range(len(inputA)):
					if i < (len(inputA) - 1):
						self.localAr[i] = self.localA[i+1]
					else: 
						self.localAr[i] = self.localA[-(i+1)]
				self.localA = list(self.localAr)
		return False


		


			




	
