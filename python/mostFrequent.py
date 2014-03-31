#==========================================================
# mostFrequent - Find the most frequent integer in an array
#==========================================================

import sys

class mF:
	def __main__(self):
		print sys.argv[1]

	def mostFrequent(self, inputList):
		if not inputList:
			return []
		nums = dict()
		for i in range(len(inputList)):
			nums[inputList[i]] = nums.get(inputList[i], 0) + 1
		return max(nums, key=nums.get)
		