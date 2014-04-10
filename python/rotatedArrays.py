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
		if inputA == inputB:
			return True
		self.localA = list(inputA)
		self.localA = self.RotateListR(self.localA)
		for i in range(len(inputA)):
			if self.localA == inputB:
				return True
			else:
				self.RotateListR(self.localA)

	def RotateListR(self, inputList):
		self.rotate = list(inputList)
		self.length = len(inputList)
		for i in range(self.length):
			if i < (self.length - 1):
				self.rotate[i] = inputList[i+1]
			else: 
				self.rotate[i] = inputList[-(i+1)]


			




	
