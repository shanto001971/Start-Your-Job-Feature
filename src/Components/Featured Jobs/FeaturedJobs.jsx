import React, { useState } from 'react';

const FeaturedJobs = ({ data }) => {
    console.log(data)
    const { title, brandname, location,salary,onsite,fulltime,remote} = data
    // console.log(data)
    // const [sortdata, setSortdata] = useState(false)
    // const[datas,setDatas]=useState([])

    // if (data) {

    //     const itemData = sortdata?data.slice(0,5):data
    //     setDatas(itemData)
    // }

    return (
        <div className='p-5 mt-5 border'>
            <img className='w-60 h-24' src={data.img} alt="" />
            <h1 className='text-2xl'>{title}</h1>
            <p>{brandname}</p>
            <div className="flex gap-2">
                <button className='border border-indigo-600 rounded p-2 m-1'>{onsite?"On-site":'Remote'}</button>
                <button className='border border-indigo-600 rounded p-2 m-1'>{fulltime&&"Full-time"}</button>
            </div>
            <div className="flex gap-5">
                <small>{location}</small>
                <small>{salary}</small>
            </div>
            <button className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500 mt-3">View Details</button>
        </div>
    );
};

export default FeaturedJobs;