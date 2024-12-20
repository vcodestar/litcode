import{j as e}from"./index-Dz8PbrvL.js";import{P as l,A as h,C as t,S as o}from"./Summary-Drn655bn.js";function m(){const r="Given a non-empty array of integers, where every element appears twice except for one element which appears once, you need to find and return the element that appears only once.",a="int singleNumber(int* nums, int numsSize) {",n=`    int i; // used in for loop
    int tmpNonDup = nums[0];`,i=`    for (i = 1; i < numsSize; i++) {
        tmpNonDup = tmpNonDup ^ nums[i];
    }`,s="  return tmpNonDup;";return e.jsxs("div",{className:"writeup-wrapper",children:[e.jsx(l,{definition:r}),e.jsx(h,{}),e.jsx(t,{language:"c",codeString:n}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:"tmpNonDup:"})," Initialize the variable with the first element of the array(",e.jsx("span",{class:"writeup-colored-bg",children:"nums[0]"}),"). This will ne used to accumulate the XOR of all the elements in the array"]}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:e.jsx("b",{children:"Iterating Through the Array:"})})," The algorithm loops through the array starting from the second element:"]}),e.jsx(t,{language:"c",codeString:i}),e.jsxs("table",{id:"xorTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"A"}),e.jsx("th",{children:"B"}),e.jsx("th",{children:"A ⊕ B"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"0"}),e.jsx("td",{children:"0"}),e.jsx("td",{children:"0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"0"}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"0"}),e.jsx("td",{children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:"1"}),e.jsx("td",{children:"0"})]})]})]}),e.jsx("p",{className:"writeup-p",children:e.jsx("b",{children:"XOR Properties"})}),e.jsxs("ul",{children:[e.jsx("li",{className:"writeup-p",children:"XOR is a bitwise operation that outputs 1 when the bits being compared are different and 0 when they are the same."}),e.jsx("li",{className:"writeup-p",children:'a ⊕ a = 0 (where "⊕" is "^" in the code)  for any integer a. This property is critical because it means that when you XOR two identical numbers, the result is 0.'}),e.jsx("li",{className:"writeup-p",children:'a ⊕ 0 = a (where "⊕" is "^" in the code) for any integer a, which means XORing a number with 0 does not change the number.'})]}),e.jsx("p",{className:"writeup-p",children:"XOR is both commutative and associative, meaning the order of operations does not matter. Thus, the sequence of XORing all the elements results in the cancellation of all the paired elements that appear twice, leaving the unique element (the one that appears only once) at the end."}),e.jsx(t,{language:"c",codeString:s}),e.jsxs("p",{className:"writeup-p",children:["After the loop completes, ",e.jsx("span",{class:"writeup-colored-bg",children:"tmpNonDup"})," contains the element that appears only once in the array. This is returned as the result."]}),e.jsx("p",{className:"writeup-p",children:e.jsx("b",{children:"Time and Space Complexity"})}),e.jsxs("ul",{children:[e.jsxs("li",{className:"writeup-p",children:[e.jsx("b",{children:"Time Complexity"}),": ",e.jsx("i",{children:"O(n)"}),", the function iterates through the entire array exactly once, where ",e.jsx("b",{children:"n"})," is the size of the array. ach XOR operation is constant time, so the overall time complexity is linear."]}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("b",{children:"Space Complexity"}),": ",e.jsx("i",{children:"O(1)"}),". The function uses a fixed amount of extra space, only storing the variable ",e.jsx("span",{class:"writeup-colored-bg",children:"tmpNonDup"})," to keep track of the XOR results. No additional data structures are used that depend on the size of the input."]})]}),e.jsx(o,{summary:"The singleNumber function efficiently solves the problem of finding the element that appears only once in an array where all other elements appear twice. By leveraging the properties of XOR, it operates in linear time with constant space, making it both time-efficient and space-efficient."}),e.jsx(t,{language:"c",codeString:a+`

`+n+`

`+i+`

  `+s+`

}`})]})}export{m as default};
