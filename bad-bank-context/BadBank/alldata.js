import React, { useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function AllData() {
  const [data, setData] = useState([]);

  // function to add data to the state
  const addData = (newData) => {
    setData([...data, newData]);
  }

  // map over the data and create a list of entries
  const dataList = data.map((entry, index) => {
    return (
      <li key={index}>
        {entry.type}: {entry.amount}
      </li>
    );
  });

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">All Data</CardTitle>
          <ul>{dataList}</ul>
        </CardBody>
      </Card>
    </div>
  );
}
