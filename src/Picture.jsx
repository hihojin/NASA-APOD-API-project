import React, { useEffect, useState } from "react";
import axios from 'axios'
import Display from './Display';

function Picture() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const options = {
        method: 'GET',
        url: 'http://localhost:8000/api/picture'
        }
        axios.request(options).then((response) => {
        data.push(response.data); // as an object
        setData([...data]);
        })

  }, []) // run only once
    return (
    <>
      <Display data={data}/>
    </>
    )
    
}

export default Picture;