import React from 'react';
import CodeSnippet from '../CodeSnippet';
import ProblemDefinition from '../writeups_units/ProblemDefinition';
import AlgorithmHeader from '../writeups_units/AlgorithmHeader';
import Summary from '../writeups_units/Summary';

function SingleElement() {
  const definition = "Given a non-empty array of integers, where every element appears twice except for one element which appears once, you need to find and return the element that appears only once."
  const func = `int singleNumber(int* nums, int numsSize) {`;
  const init = `    int i; // used in for loop
    int tmpNonDup = nums[0];`;
  const loop = `    for (i = 1; i < numsSize; i++) {
        tmpNonDup = tmpNonDup ^ nums[i];
    }`;
  const ret = `  return tmpNonDup;`;
  const summary = `The singleNumber function efficiently solves the problem of finding the element that appears only once in an array where all other elements appear twice. By leveraging the properties of XOR, it operates in linear time with constant space, making it both time-efficient and space-efficient.`;

  return (
    <div className="writeup-wrapper">
      <ProblemDefinition definition={definition}></ProblemDefinition>
      <AlgorithmHeader></AlgorithmHeader>
      <CodeSnippet
        language="c"
        codeString={init} 
      />
      <p className="writeup-p"><span class="writeup-colored-bg">tmpNonDup:</span> Initialize the variable with the first element of the array(<span class="writeup-colored-bg">nums[0]</span>). This will ne used to accumulate the XOR of all the elements in the array</p>
      <p className="writeup-p">
        <span class="writeup-colored-bg"><b>Iterating Through the Array:</b></span> The algorithm loops through the array starting from the second element:
      </p>
      <CodeSnippet
        language="c"
        codeString={loop} 
      />
    <table id="xorTable">
        <thead>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>A ⊕ B</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>0</td>
        </tr>
        </tbody>
    </table>
    <p className="writeup-p"><b>XOR Properties</b></p>
    <ul>
      <li className="writeup-p">XOR is a bitwise operation that outputs 1 when the bits being compared are different and 0 when they are the same.</li>
      <li className="writeup-p">a &oplus; a = 0 (where "&oplus;" is "^" in the code)  for any integer a. This property is critical because it means that when you XOR two identical numbers, the result is 0.</li>
      <li className="writeup-p">a &oplus; 0 = a (where "&oplus;" is "^" in the code) for any integer a, which means XORing a number with 0 does not change the number.</li>
    </ul>
      <p className='writeup-p'>XOR is both commutative and associative, meaning the order of operations does not matter. Thus, the sequence of XORing all the elements results in the cancellation of all the paired elements that appear twice, leaving the unique element (the one that appears only once) at the end.</p>
      <CodeSnippet
        language="c"
        codeString={ret} 
      />
      <p className="writeup-p">After the loop completes, <span class="writeup-colored-bg">tmpNonDup</span> contains the element that appears only once in the array. This is returned as the result.</p>

      <p className="writeup-p"><b>Time and Space Complexity</b></p>
      <ul>
        <li className="writeup-p"><b>Time Complexity</b>: <i>O(n)</i>, the function iterates through the entire array exactly once, where <b>n</b> is the size of the array. ach XOR operation is constant time, so the overall time complexity is linear.</li>
        <li className="writeup-p"><b>Space Complexity</b>: <i>O(1)</i>. The function uses a fixed amount of extra space, only storing the variable <span class="writeup-colored-bg">tmpNonDup</span> to keep track of the XOR results. No additional data structures are used that depend on the size of the input.</li>
      </ul>

      <Summary summary={summary} />
      <CodeSnippet
        language="c"
        codeString={func + "\n\n" +init + "\n\n" + loop + "\n\n  " + ret + "\n\n" + "}"} 
      />
    </div>
  );
}

export default SingleElement;
