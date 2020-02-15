# tasks
repository with my hobby

### minSteps

Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
Return the minimum number of steps to make t an anagram of s.
An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

1. Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

2. Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

3. Example 3:

Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 

Constraints:
1 <= s.length <= 50000
s.length == t.length
s and t contain lower-case English letters only.

### numWays

You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position to the left, 1 position to the right in the array or stay in the same place  (The pointer should not be placed outside the array at any time).
Given two integers steps and arrLen, return the number of ways such that your pointer still at index 0 after exactly steps steps.
Since the answer may be too large, return it modulo 10^9 + 7.

1. Example 1:

Input: steps = 3, arrLen = 2
Output: 4
Explanation: There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay

2. Example 2:

Input: steps = 2, arrLen = 4
Output: 2
Explanation: There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay

3. Example 3:

Input: steps = 4, arrLen = 2
Output: 8
 
Constraints:

1 <= steps <= 500
1 <= arrLen <= 10^6

### find Slice

Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.

In case of a tie, return the minimum such integer.

Notice that the answer is not neccesarilly a number from arr.

1. Example 1:
Input: arr = [4,9,3], target = 10
Output: 3
Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.

2. Example 2:
Input: arr = [2,3,5], target = 10
Output: 5

3. Example 3:
Input: arr = [60864,25176,27249,21296,20204], target = 56803
Output: 11361
 

Constraints:
1 <= arr.length <= 10^4
1 <= arr[i], target <= 10^5
