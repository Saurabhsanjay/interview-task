// Task is:-
// 1 - Take data from the any mock service or create duplicate name json.
// 2 - Have the distinct name in table
// 3 - Table will have 2 columns, one is for the name and another for the number of times
//it was duplicated
// 4 - mark the background of that row red if the duplicates are more than 0 and less 3
// 5 - mark row yellow if more than 2 and less than 10
// 6 -Mark green if more than 10 times.

import React, {  useState } from "react";
import datas from './data.json'
const Task = () => {
  const [data, setData] = useState(datas);

  const getNames = () => {
    const distinctNames = [];
    data.forEach((item) => {
      if (!distinctNames.includes(item.name)) {
        distinctNames.push(item.name);
      }
    });
    return distinctNames;
  };

  const getDuplicatesCount = (name) => {
    let count = 0;
    data.forEach((item) => {
      if (item.name === name) {
        count++;
      }
    });
    return count;
  };

  const renderRows = () => {
    const distinctNames = getNames();
    return distinctNames.map((name, index) => (
      <tr key={index} style={getRowStyle(name)}>
        <td>{name}</td>
        <td>{getDuplicatesCount(name)}</td>
      </tr>
    ));
  };

  const getRowStyle = (name) => {
    const duplicatesCount = getDuplicatesCount(name);
    if (duplicatesCount > 0 && duplicatesCount < 3) {
      return { background: "red" };
    } else if (duplicatesCount >= 3 && duplicatesCount < 10) {
      return { background: "yellow" };
    } else if (duplicatesCount >= 10) {
      return { background: "green" };
    } else {
      return {};
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duplicates Count</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Task;

