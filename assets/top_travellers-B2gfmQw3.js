import{j as e}from"./index-Dz8PbrvL.js";import{P as d,A as c,C as s,S as h}from"./Summary-Drn655bn.js";function p(){const l="Return the result table ordered by travelled_distance in descending order, if two or more users traveled the same distance, order them by their name in ascending order.",n="This query is efficient in ensuring that all users are included in the result, with their total distance traveled correctly displayed, including 0 for users who have not taken any rides. Additionally, it sorts the results by distance in descending order and by name in ascending order when there are ties.",i=`SELECT 
    users.name,
    IFNULL(SUM(rides.distance), 0) AS travelled_distance  `,r=`FROM 
    users
LEFT JOIN 
    rides 
ON 
    users.id = rides.user_id`,t=`GROUP BY 
    users.id`,a=`ORDER BY 
    travelled_distance DESC, 
    users.name ASC;`;return e.jsxs("div",{className:"writeup-wrapper",children:[e.jsx(d,{definition:l}),e.jsx("p",{className:"writeup-p",children:"Users Table:"}),e.jsxs("table",{id:"xorTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Column Name"}),e.jsx("th",{children:"Type"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"id"}),e.jsx("td",{children:"int"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"name"}),e.jsx("td",{children:"varchar"})]})]})]}),e.jsx("p",{className:"writeup-p",children:"Rides Table:"}),e.jsxs("table",{id:"xorTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Column Name"}),e.jsx("th",{children:"Type"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"id"}),e.jsx("td",{children:"int"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"user_id"}),e.jsx("td",{children:"int"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"distance"}),e.jsx("td",{children:"int"})]})]})]}),e.jsx(c,{}),e.jsx(s,{language:"sql",codeString:i}),e.jsx("p",{className:"writeup-p",children:"This is part specifies the columns to be selected:"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"users.name:"})," This will select the name column from the users table, which contains the names of the users"]}),e.jsx("br",{}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"IFNULL(SUM(rides.distance), 0)"})," AS ",e.jsx("span",{className:"writeup-colored-bg",children:"travelled_distance:"}),e.jsxs("ul",{children:[e.jsx("br",{}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"SUM(rides.distance)"}),": This will sum the distance values from the rides table for each user. The distance column indicates how far a user has traveled."]}),e.jsx("br",{}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"IFNULL(SUM(rides.distance), 0)"}),": The SUM(rides.distance) will return NULL for users who have no corresponding rows in the rides table (i.e., users who haven't taken any rides). IFNULL is used to replace this NULL value with 0, ensuring that users without rides have their total distance displayed as 0 instead of NULL."]}),e.jsx("br",{}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"AS travelled_distance"}),": This gives an alias name to the summed distance column, making it more readable and identifiable in the results as travelled_distance."]})]})]})]}),e.jsx(s,{language:"sql",codeString:r}),e.jsx("p",{className:"writeup-p",children:"This part of the query specifies the tables being used and how they are joined:"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"FROM users"}),": The users table is the primary table from which we are selecting data. This table contains user information like id, name, etc."]}),e.jsx("br",{}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"LEFT JOIN rides"}),": The LEFT JOIN ensures that all users will be included in the result, even if they have no corresponding entries in the rides table. A regular INNER JOIN would exclude users who have no rides."]}),e.jsx("br",{}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"ON users.id = rides.user_id"}),": This specifies the condition for the join — it links the id field in the users table with the user_id field in the rides table. This relationship indicates which user has taken which ride."]})]}),e.jsx(s,{language:"sql",codeString:t}),e.jsxs("p",{className:"writeup-p",children:["The",e.jsx("span",{className:"writeup-colored-bg",children:"GROUP BY "}),"  clause is used to group the result by each unique user (identified by users.id)."]}),e.jsx("ul",{children:e.jsx("li",{className:"writeup-p",children:"This ensures that the total distance is calculated for each user individually. Without this clause, the query would aggregate all the data from the users and rides tables into a single row."})}),e.jsx(s,{language:"sql",codeString:a}),e.jsx("p",{className:"writeup-p",children:"This part orders the results:"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"ORDER BY travelled_distance DESC"}),": The results will be ordered in descending order based on the travelled_distance column. This ensures that the users who have traveled the most appear at the top of the result."]}),e.jsx("br",{}),e.jsxs("li",{className:"writeup-p",children:[e.jsx("span",{className:"writeup-colored-bg",children:"users.name ASC"}),": If two or more users have traveled the same distance, they will be ordered alphabetically by their name in ascending order (from A to Z)."]})]}),e.jsx(h,{summary:n}),e.jsx(s,{language:"sql",codeString:i+`
`+r+t+`
`+a})]})}export{p as default};
