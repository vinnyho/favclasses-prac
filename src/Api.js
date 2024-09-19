import React, { useEffect,useState } from 'react'
import Displayf from './display';
const Api = ({classid}) => {
  const [data, setData] = useState(null);
  const [sqdata,setSq] = useState(null);
    const url = "https://api.peterportal.org/rest/v0/courses/";
    const url1 = "https://api.peterportal.org/graphql/";

    const query = `
    query {
      course(id: "${classid}") {
        id
        department
        school
        description
      }
    }
  `;


    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url+classid);
        const result= await response.json();
        setData(result);

        const response1 = await fetch(url1, {
          "method": "POST",
          "body": JSON.stringify({query}),
        "headers" : {
            "Content-Type": "application/json",
          }
      });
      const result1 = await response1.json();
      console.log(result1)
      setSq(result1.data.course);

    }
    fetchData();
    },[classid]);


  return (
    <div>
        <Displayf data={data} sq={sqdata} />
    </div>
  );
};

export default Api;
