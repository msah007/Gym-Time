#*********************************************************
# haveSumWillAdd
# Find pairs in an integer array whose sum is equal to 10 
# (bonus: do it in linear time)
#    so only go through list once
# Extension: any sum
# ********************************************************



class hswa:

	#following sum equal to 10 rule
	def haveSumWAnaive(self, inputList):
		self.outputSet = set()
		for x in inputList:
			for y in inputList:
				if (x + y) == 10:
					#prevent duplicates
					if (x,y) not in self.outputSet and (y,x) not in self.outputSet:
						self.outputSet.add((x,y))
		return sorted(self.outputSet) 


	def hSWAsetComprehension(self, inputList):
		self.outputSet = set()
