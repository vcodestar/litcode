import React from 'react';
import CodeSnippet from '../CodeSnippet';
import ProblemDefinition from '../writeups_units/ProblemDefinition';
import AlgorithmHeader from '../writeups_units/AlgorithmHeader';
import Summary from '../writeups_units/Summary';

function MajorityElement() {
  const definition = "The goal of the function is to find the \"majority element\" in a given array nums. A majority element is defined as an element that appears more than ⌊n/2⌋ times, where n is the size of the array."
  const func = `int majorityElement(int* nums, int numsSize) {`
  const init = `  //initilization\n  int i; //used for loop\n  int tmpMaj = nums[0];\n  int counter = 1;`;
  const loop = `  // loop through nums array
  for (int i = 1; i < numsSize; i++) {
      if (nums[i] == tmpMaj) {
          counter++;
      } else {
          counter--;
      }

      if (counter == 0) {
          tmpMaj = nums[i];
          counter = 1;
      }
  }`;
  const ret = `return tmpMaj;`;
  const summary = `The majorityElement function implements the Boyer-Moore Voting Algorithm, an efficient method for finding the majority element in an array. It operates in O(n) time and uses O(1) space, making it suitable for large datasets. This function is highly reliable when a majority element is guaranteed to exist.`;

  return (
    <div className="writeup-wrapper">
      <ProblemDefinition definition={definition}></ProblemDefinition>
      <AlgorithmHeader></AlgorithmHeader>
      <CodeSnippet
        language="c"
        codeString={init} 
      />
      <p className="writeup-p"><span class="writeup-colored-bg">tmpMaj:</span> This variable temporarily stores the candidate for the majority element.</p>
      <p className="writeup-p"><span class="writeup-colored-bg">counter:</span> A counter to track the relative frequency of the candidate element.</p>
      <p className="writeup-p">
        <span class="writeup-colored-bg"><b>Iterating Through the Array:</b></span> The algorithm loops through the array starting from the second element:
      </p>
      <CodeSnippet
        language="c"
        codeString={loop} 
      />
      <p className='writeup-p'>If the current element <span class="writeup-colored-bg">nums[i]</span> is equal to the current candidate <span class="writeup-colored-bg">tmpMaj</span>, the counter is incremented.</p>
      <p className="writeup-p">If the current element is different, the counter is decremented.</p>
      <p className='writeup-p'>When the counter reaches zero, the algorithm assumes that the current candidate is no longer a viable majority element. The candidate (<span class="writeup-colored-bg">tmpMaj</span>) is updated to the current element, and the counter is reset to 1.
      </p>
      <CodeSnippet
        language="c"
        codeString={ret} 
      />
      <p className="writeup-p"><b>Key Insights</b></p>
      <p className="writeup-p">The algorithm used is the Boyer-Moore Voting Algorithm which works on the principle of cancelation:</p>
      <ul>
        <li className="writeup-p">If two different elements are paired together, they cancel each other out.</li>
        <li className="writeup-p">A majority element will always remain after all other elements are canceled out.</li>
      </ul>

      <p className="writeup-p"><b>Time and Space Complexity</b></p>
      <ul>
        <li className="writeup-p"><b>Time Complexity</b>: <i>O(n)</i>, where <b>n</b> is the size of the array. The algorithm processes each element of the array exactly once.</li>
        <li className="writeup-p"><b>Space Complexity</b>: <i>O(1)</i>. Only two variables (<span class="writeup-colored-bg">tmpMaj</span> and <span class="writeup-colored-bg">counter</span>) are used, making it space-efficient.</li>
      </ul>

      <Summary summary={summary} />
      <CodeSnippet
        language="c"
        codeString={func + "\n\n" +init + "\n\n" + loop + "\n\n  " + ret + "\n\n" + "}"} 
      />
    </div>
  );
}

export default MajorityElement;
