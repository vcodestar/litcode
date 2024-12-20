import React from 'react';
import CodeSnippet from '../CodeSnippet';
import ProblemDefinition from '../writeups_units/ProblemDefinition';
import AlgorithmHeader from '../writeups_units/AlgorithmHeader';
import Summary from '../writeups_units/Summary';

function SingleElement() {
  const definition = "Implement a function that efficiently identifies the correct index for the target in the array while maintaining the sorted order. The algorithm must be optimized to handle large input sizes within the given constraints. Return the index of the target if it exists in nums. Return the index where the target would be inserted if it does not exist."
  const func = `class Solution {
    public int searchInsert(int[] nums, int target) {`;
  const init = `        int left = 0;
        int right = nums.length - 1;`;
  const loop = `        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }`;
  const ret = `      return left;
    }`;
  const summary = `The searchInsert method is an optimal and elegant solution for finding the target's position in a sorted array. By leveraging the binary search technique, it ensures efficient performance even with large input sizes. Its simplicity, clarity, and efficiency make it a fundamental example of binary search in action.`;

  return (
    <div className="writeup-wrapper">
      <ProblemDefinition definition={definition}></ProblemDefinition>
      <AlgorithmHeader></AlgorithmHeader>
      <p className="writeup-p">This method uses a <b>binary search</b> approach with two pointers (<span class="writeup-colored-bg">left, right</span>) to repeatedly divide the search space in half.</p>
      <CodeSnippet
        language="java"
        codeString={init} 
      />
      <p className="writeup-p"><span class="writeup-colored-bg">left:</span> points to the start of the array.</p>
      <p className="writeup-p"><span class="writeup-colored-bg">right:</span> points to the last index of the array.</p>
      <p className="writeup-p">
        <span class="writeup-colored-bg"><b>Binary Search Loop:</b></span> The loop continues as long as the left pointer is less than or equal to the right pointer.
      </p>
      <CodeSnippet
        language="java"
        codeString={loop} 
      />
      <ul>
        <li className='writeup-p'>The mid point calculation avoids potential integer overflow when <span class="writeup-colored-bg">left</span> and <span class="writeup-colored-bg">right</span> are large. The mid point divides the current search range into two halves</li>
        <li className='writeup-p'>
            Compare <span class="writeup-colored-bg">target</span> with <span class="writeup-colored-bg">nums[mid]:</span>
            <ul>
                <li>if <span class="writeup-colored-bg">nums[mid] == target</span> the target is found and its index is returned.</li>
                <li>if <span class="writeup-colored-bg">nums[mid] &lt; target</span> the target is greater than the midpoint value. Move the left pointer to mid+1 to search in the right half.</li>
                <li>if <span class="writeup-colored-bg">nums[mid] &gt; target</span> the target is less than the midpoint value. Move the right pointer to mid-1 to search in the left half.</li>
            </ul>
        </li>
        <li className='writeup-p'>Target not found: If the loop exits without finding the target, the left pointer represents the correct insertion position for the target to maintain the sorted order:</li>
      </ul>
      <CodeSnippet
        language="java"
        codeString={ret} 
      />

      <p className="writeup-p"><b>Time and Space Complexity</b></p>
      <ul>
        <li className="writeup-p"><b>Time Complexity</b>: Each iteration halves the search space: <i>O(log(n))</i>, where <b>n</b> is the length of the array.</li>
        <li className="writeup-p"><b>Space Complexity</b>: <i>O(1)</i>. The method uses a constant amount of extra space</li>
      </ul>

      <Summary summary={summary} />
      <CodeSnippet
        language="java"
        codeString={func + "\n\n" +init + "\n\n" + loop + "\n\n  " + ret + "\n\n" + "}"} 
      />
    </div>
  );
}

export default SingleElement;
