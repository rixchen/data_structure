/**
 * 给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
解释：先反转子字符串 "love" ，然后反转整个字符串。
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"
 

提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
题目测试用例确保所有括号都是成对出现的
给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
解释：先反转子字符串 "love" ，然后反转整个字符串。
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"
 

提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
题目测试用例确保所有括号都是成对出现的

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
    let stack = [] // 定义一个栈，将每一层的字符串进栈
    let str = '' // 记录当前层的字符串
 
    for (let c  of s){ 
        if(c === '('){
         // 遇到左括号， 这一段字符串进栈， 清空str
         stack.push(str)
         str = ''
        }else if(c === ')'){
         // 遇到右括号，这一层结束，先反转这层的字符串，弹出栈顶，把这层反转的字符串拼接在后面，赋值给 str
         str =  stack.pop() +  str.split('').reverse().join('')
        }else{
            str = str + c
        }
    }
    return str
 };