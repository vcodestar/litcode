import React from 'react';
import CodeSnippet from '../CodeSnippet';
import ProblemDefinition from '../writeups_units/ProblemDefinition';
import AlgorithmHeader from '../writeups_units/AlgorithmHeader';
import Summary from '../writeups_units/Summary';
function PalindromeNumber() {
  const definition = "Return the result table ordered by travelled_distance in descending order, if two or more users traveled the same distance, order them by their name in ascending order."
  const func = ``
  const init = ``;
  const loop = ``;
  const ret = ``;
  const summary = `This query is efficient in ensuring that all users are included in the result, with their total distance traveled correctly displayed, including 0 for users who have not taken any rides. Additionally, it sorts the results by distance in descending order and by name in ascending order when there are ties.`;
  const select = `SELECT 
    users.name,
    IFNULL(SUM(rides.distance), 0) AS travelled_distance  `;
  const from = `FROM 
    users
LEFT JOIN 
    rides 
ON 
    users.id = rides.user_id`;
  const groupby = `GROUP BY 
    users.id`;
  const orderby = `ORDER BY 
    travelled_distance DESC, 
    users.name ASC;`;

  return (
    <div className="writeup-wrapper">
      <ProblemDefinition definition={definition}></ProblemDefinition>
      <p className='writeup-p'>Users Table:</p>
      <table id="xorTable">
        <thead>
            <tr>
                <th>Column Name</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>id</td>
                <td>int</td>
            </tr>
            <tr>
                <td>name</td>
                <td>varchar</td>
            </tr>
        </tbody>
    </table>
    <p className='writeup-p'>Rides Table:</p>
    <table id="xorTable">
    <thead>
            <tr>
                <th>Column Name</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>id</td>
                <td>int</td>
            </tr>
            <tr>
                <td>user_id</td>
                <td>int</td>
            </tr>
            <tr>
                <td>distance</td>
                <td>int</td>
            </tr>
        </tbody>
    </table>
    <AlgorithmHeader></AlgorithmHeader>
      <CodeSnippet
        language="sql"
        codeString={select} 
      />
      <p className="writeup-p">This is part specifies the columns to be selected:</p>
      <ul>
        <li className="writeup-p"><span className="writeup-colored-bg">users.name:</span> This will select the name column from the users table, which contains the names of the users</li>
        <br></br><li className="writeup-p">
            <span className="writeup-colored-bg">IFNULL(SUM(rides.distance), 0)</span> AS <span className="writeup-colored-bg">travelled_distance:</span>
            <ul>
                <br></br><li className='writeup-p'><span className="writeup-colored-bg">SUM(rides.distance)</span>: This will sum the distance values from the rides table for each user. The distance column indicates how far a user has traveled.</li>
                <br></br><li className='writeup-p'><span className="writeup-colored-bg">IFNULL(SUM(rides.distance), 0)</span>: The SUM(rides.distance) will return NULL for users who have no corresponding rows in the rides table (i.e., users who haven't taken any rides). IFNULL is used to replace this NULL value with 0, ensuring that users without rides have their total distance displayed as 0 instead of NULL.</li>
                <br></br><li className='writeup-p'><span className="writeup-colored-bg">AS travelled_distance</span>: This gives an alias name to the summed distance column, making it more readable and identifiable in the results as travelled_distance.</li>
            </ul>
        </li>
      </ul>
      <CodeSnippet
        language="sql"
        codeString={from} 
      />
      <p className='writeup-p'>This part of the query specifies the tables being used and how they are joined:</p>
      <ul>
        <li className="writeup-p"><span className="writeup-colored-bg">FROM users</span>: The users table is the primary table from which we are selecting data. This table contains user information like id, name, etc.</li>
        <br></br><li className="writeup-p"><span className="writeup-colored-bg">LEFT JOIN rides</span>: The LEFT JOIN ensures that all users will be included in the result, even if they have no corresponding entries in the rides table. A regular INNER JOIN would exclude users who have no rides.</li>
        <br></br><li className="writeup-p"><span className="writeup-colored-bg">ON users.id = rides.user_id</span>: This specifies the condition for the join — it links the id field in the users table with the user_id field in the rides table. This relationship indicates which user has taken which ride.</li>
      </ul>
      <CodeSnippet
        language="sql"
        codeString={groupby} 
      />
      <p className="writeup-p">The<span className="writeup-colored-bg">GROUP BY </span>  clause is used to group the result by each unique user (identified by users.id).</p>
      <ul>
        <li className="writeup-p">This ensures that the total distance is calculated for each user individually. Without this clause, the query would aggregate all the data from the users and rides tables into a single row.</li>
      </ul>
      
      <CodeSnippet
        language="sql"
        codeString={orderby} 
      />
      <p className="writeup-p">This part orders the results:</p>
      <ul>
        <li className="writeup-p"><span className="writeup-colored-bg">ORDER BY travelled_distance DESC</span>: The results will be ordered in descending order based on the travelled_distance column. This ensures that the users who have traveled the most appear at the top of the result.</li>
        <br></br><li className="writeup-p"><span className="writeup-colored-bg">users.name ASC</span>: If two or more users have traveled the same distance, they will be ordered alphabetically by their name in ascending order (from A to Z).</li>
      </ul>

      <Summary summary={summary} />
      <CodeSnippet
        language="sql"
        codeString={select + "\n" + from + groupby + "\n" + orderby} 
      />
    </div>
  );
}

export default PalindromeNumber;
