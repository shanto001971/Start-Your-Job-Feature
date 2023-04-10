import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ReviewPage = () => {
    const [info, setInfo] = useState();
    // const [singleData, setSingleData] = useState({})
    // const [loading, setLoading] = useState(true)
   
    const { id }  = useParams();
   
      useEffect(() => {
        fetch('/public/jobs.json')
          .then(res => res.json())
          .then(data => {
            const foundProduct = data.find(product => product.id === id);
            setInfo(foundProduct)
          })
      }, []);
      console.log(info)
  

    return (
        <div>
            <h1>{info?.title}</h1>
        </div>
    );
};

export default ReviewPage;