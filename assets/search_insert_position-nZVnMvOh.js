import{j as e}from"./index-Dz8PbrvL.js";import{P as l,A as o,C as t,S as h}from"./Summary-Drn655bn.js";function u(){const r="Implement a function that efficiently identifies the correct index for the target in the array while maintaining the sorted order. The algorithm must be optimized to handle large input sizes within the given constraints. Return the index of the target if it exists in nums. Return the index where the target would be inserted if it does not exist.",a=`class Solution {
    public int searchInsert(int[] nums, int target) {`,i=`        int left = 0;
        int right = nums.length - 1;`,s=`        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }`,n=`      return left;
    }`;return e.jsxs("div",{className:"writeup-wrapper",children:[e.jsx(l,{definition:r}),e.jsx(o,{}),e.jsxs("p",{className:"writeup-p",children:["This method uses a ",e.jsx("b",{children:"binary search"})," approach with two pointers (",e.jsx("span",{class:"writeup-colored-bg",children:"left, right"}),") to repeatedly divide the search space in half."]}),e.jsx(t,{language:"java",codeString:i}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:"left:"})," points to the start of the array."]}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:"right:"})," points to the last index of the array."]}),e.jsxs("p",{className:"writeup-p",children:[e.jsx("span",{class:"writeup-colored-bg",children:e.jsx("b",{children:"Binary Search Loop:"})})," The loop continues as long as the left pointer is less than or equal to the right pointer."]}),e.jsx(t,{language:"java",codeString:s}),e.jsxs("ul",{children:[e.jsxs("li",{className:"writeup-p",children:["The mid point calculation avoids potential integer overflow when ",e.jsx("span",{class:"writeup-colored-bg",children:"left"})," and ",e.jsx("span",{class:"writeup-colored-bg",children:"right"})," are large. The mid point divides the current search range into two halves"]}),e.jsxs("li",{className:"writeup-p",children:["Compare ",e.jsx("span",{class:"writeup-colored-bg",children:"target"})," with ",e.jsx("span",{class:"writeup-colored-bg",children:"nums[mid]:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["if ",e.jsx("span",{class:"writeup-colored-bg",children:"nums[mid] == target"})," the target is found and its index is returned."]}),e.jsxs("li",{children:["if ",e.jsx("span",{class:"writeup-colored-bg",children:"nums[mid] < target"})," the target is greater than the midpoint value. Move the left pointer to mid+1 to search in the right half."]}),e.jsxs("li",{children:["if ",e.jsx("span",{class:"writeup-colored-bg",children:"nums[mid] > target"})," the target is less than the midpoint value. Move the right pointer to mid-1 to search in the left half."]})]})]}),e.jsx("li",{className:"writeup-p",children:"Target not found: If the loop exits without finding the target, the left pointer represents the correct insertion position for the target to maintain the sorted order:"})]}),e.jsx(t,{language:"java",codeString:n}),e.jsx("p",{className:"writeup-p",children:e.jsx("b",{children:"Time and Space Complexity"})}),e.jsxs("ul",{children:[e.jsxs("li",{className:"writeup-p",children:[e.jsx("b",{children:"Time Complexity"}),": Each iteration halves the search space: ",e.jsx("i",{children:"O(log(n))"}),", where ",e.jsx("b",{children:"n"})," is the length of the array."]}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("b",{children:"Space Complexity"}),": ",e.jsx("i",{children:"O(1)"}),". The method uses a constant amount of extra space"]})]}),e.jsx(h,{summary:"The searchInsert method is an optimal and elegant solution for finding the target's position in a sorted array. By leveraging the binary search technique, it ensures efficient performance even with large input sizes. Its simplicity, clarity, and efficiency make it a fundamental example of binary search in action."}),e.jsx(t,{language:"java",codeString:a+`

`+i+`

`+s+`

  `+n+`

}`})]})}export{u as default};
