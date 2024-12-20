import{j as e}from"./index-Dz8PbrvL.js";import{P as l,A as o,C as t,S as c}from"./Summary-Drn655bn.js";function d(){const s='The goal of the function is to find the "majority element" in a given array nums. A majority element is defined as an element that appears more than ⌊n/2⌋ times, where n is the size of the array.',a="int majorityElement(int* nums, int numsSize) {",i=`  //initilization
  int i; //used for loop
  int tmpMaj = nums[0];
  int counter = 1;`,n=`  // loop through nums array
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
  }`,r="return tmpMaj;";return e.jsxs("div",{className:"writeup-wrapper",children:[e.jsx(l,{definition:s}),e.jsx(o,{}),e.jsx(t,{language:"c",codeString:i}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:"tmpMaj:"})," This variable temporarily stores the candidate for the majority element."]}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:"counter:"})," A counter to track the relative frequency of the candidate element."]}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:e.jsx("b",{children:"Iterating Through the Array:"})})," The algorithm loops through the array starting from the second element:"]}),e.jsx(t,{language:"c",codeString:n}),e.jsxs("p",{className:"writeup-p",children:["If the current element ",e.jsx("span",{class:"writeup-colored-bg",children:"nums[i]"})," is equal to the current candidate ",e.jsx("span",{class:"writeup-colored-bg",children:"tmpMaj"}),", the counter is incremented."]}),e.jsx("p",{className:"writeup-p",children:"If the current element is different, the counter is decremented."}),e.jsxs("p",{className:"writeup-p",children:["When the counter reaches zero, the algorithm assumes that the current candidate is no longer a viable majority element. The candidate (",e.jsx("span",{class:"writeup-colored-bg",children:"tmpMaj"}),") is updated to the current element, and the counter is reset to 1."]}),e.jsx(t,{language:"c",codeString:r}),e.jsx("p",{className:"writeup-p",children:e.jsx("b",{children:"Key Insights"})}),e.jsx("p",{className:"writeup-p",children:"The algorithm used is the Boyer-Moore Voting Algorithm which works on the principle of cancelation:"}),e.jsxs("ul",{children:[e.jsx("li",{className:"writeup-p",children:"If two different elements are paired together, they cancel each other out."}),e.jsx("li",{className:"writeup-p",children:"A majority element will always remain after all other elements are canceled out."})]}),e.jsx("p",{className:"writeup-p",children:e.jsx("b",{children:"Time and Space Complexity"})}),e.jsxs("ul",{children:[e.jsxs("li",{className:"writeup-p",children:[e.jsx("b",{children:"Time Complexity"}),": ",e.jsx("i",{children:"O(n)"}),", where ",e.jsx("b",{children:"n"})," is the size of the array. The algorithm processes each element of the array exactly once."]}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("b",{children:"Space Complexity"}),": ",e.jsx("i",{children:"O(1)"}),". Only two variables (",e.jsx("span",{class:"writeup-colored-bg",children:"tmpMaj"})," and ",e.jsx("span",{class:"writeup-colored-bg",children:"counter"}),") are used, making it space-efficient."]})]}),e.jsx(c,{summary:"The majorityElement function implements the Boyer-Moore Voting Algorithm, an efficient method for finding the majority element in an array. It operates in O(n) time and uses O(1) space, making it suitable for large datasets. This function is highly reliable when a majority element is guaranteed to exist."}),e.jsx(t,{language:"c",codeString:a+`

`+i+`

`+n+`

  `+r+`

}`})]})}export{d as default};
