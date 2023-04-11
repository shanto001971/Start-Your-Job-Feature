import React, { useState } from 'react';


const AppalidJob = () => {

    // const [localDb, setLocalDb]=useState()
    const dbdata = getStoredCart()
    console.log(dbdata)

    //  const localDbData=()=>{
    //     const dbData = localStorage.getItem('shopping-cart')
    //     console.log(dbData)
    //  }

    // useEffect(() => {
    //     fetch('/public/jobs.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const foundProduct = data.filter(product => product.id === dbData.id);
    //             setLocalDb(foundProduct)
    //         })
    // }, []);



    return (
        <div>
            <h1>this is appalid job section</h1>
        </div>
    );
};

export default AppalidJob;