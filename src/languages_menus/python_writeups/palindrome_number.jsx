import React from 'react';
import CodeSnippet from '../CodeSnippet';
import ProblemDefinition from '../writeups_units/ProblemDefinition';
import AlgorithmHeader from '../writeups_units/AlgorithmHeader';
import Summary from '../writeups_units/Summary';
function PalindromeNumber() {
  const definition = "A palindrome number is an integer that reads the same backward as forward. For instance, 121 is a palindrome because reversing it yields the same number, whereas 123 is not because its reverse is 321. The task is to determine whether a given integer x is a palindrome without converting the number to a string."
  const func = `class Solution:
    def isPalindrome(self, x: int) -> bool:`
  const init = `        if x < 0:
            return False
        if x != 0 and x % 10 == 0:
            return False`;
  const loop = `        reversed_half = 0
        while x > reversed_half:
            reversed_half = reversed_half * 10 + x % 10
            x //= 10`;
  const ret = `      return x == reversed_half or x == reversed_half // 10`;
  const summary = `This implementation efficiently determines if an integer is a palindrome by reversing only half of the number. It avoids the need for converting the integer to a string, making it suitable for scenarios where low memory usage and fast execution are critical.`;

  return (
    <div className="writeup-wrapper">
      <ProblemDefinition definition={definition}></ProblemDefinition>
      <AlgorithmHeader></AlgorithmHeader>
      <CodeSnippet
        language="python"
        codeString={init} 
      />
      <p className="writeup-p">If <span class="writeup-colored-bg">x</span> is negative,  it's not a palindrome because the negative sign appears only at the start, not at the end.</p>
      <p className="writeup-p">if x &ne; 0 and ends with 0(i.e., x % 10 == 0), it cannot be a palindrome. For instance, 10 reversed is 01, which is not valid.</p>
      <p className="writeup-p"><b>Reversing Half of the Number</b></p>
      <CodeSnippet
        language="python"
        codeString={loop} 
      />
      <p className='writeup-p'>The goal here is to reverse only half of the digits of <span class="writeup-colored-bg">x</span> rather than the entire number. This reduces the computational effort.</p>
      <p className="writeup-p">The variable <span class="writeup-colored-bg">reversed_half</span> starts at 0. In each iteration:</p>
      <ul>
        <li className="writeup-p">Add the last digit of <span className='writeup-colored-bg'>x</span>(obtained via x % 10) to <span className='writeup-colored-bg'>reversed_half</span> shifting its digits to the left by multiplying by 10.</li>
        <li className="writeup-p">Remove he last digit from <span className='writeup-colored-bg'>x</span>  using integer division x //= 10</li>
      </ul>
      <p className='writeup-p'>The loop runs until the original number x becomes less than or equal to <span className='writeup-colored-bg'>reversed_half</span></p>
      <p className="writeup-p"><b>Checking for Palindrome</b></p>
      <CodeSnippet
        language="python"
        codeString={ret} 
      />
      <p className="writeup-p">After the loop <span className='writeup-colored-bg'>x</span> represents the first half of the number, and <span className='writeup-colored-bg'>reversed_half</span> represents the reversed second half.</p>
      <p className="writeup-p">For even-length numbers (e.g., 1221):</p>
      <ul>
        <li className="writeup-p"><span className='writeup-colored-bg'>x == reversed_half</span> (the two halves are directly compared)</li>
      </ul>
      <p className="writeup-p">For odd-length numbers (e.g., 12321):</p>
      <ul>
        <li className="writeup-p">The middle digit does not affect palindromicity. Dividing <span className='writeup-colored-bg'>x == reversed_half</span> by 10 removes it, allowing <span className='writeup-colored-bg'>x == reversed_half // 10</span></li>
      </ul>

      <p className="writeup-p"><b>Time and Space Complexity</b></p>
      <ul>
        <li className="writeup-p"><b>Time Complexity</b>: <i>O(log<sub>10</sub>(n))</i>, because the loop runs approximately half the number of  digits in x. The number of digits is proportional to log<sub>10</sub>(n)</li>
        <br></br><li className="writeup-p"><b>Space Complexity</b>: <i>O(1)</i>. Only two variables (<span class="writeup-colored-bg">x</span> and <span class="writeup-colored-bg">reversed_half</span>) are used, making it space-efficient.</li>
      </ul>

      <Summary summary={summary} />
      <CodeSnippet
        language="python"
        codeString={func + "\n\n" +init + "\n\n" + loop + "\n\n  " + ret} 
      />
    </div>
  );
}

export default PalindromeNumber;
