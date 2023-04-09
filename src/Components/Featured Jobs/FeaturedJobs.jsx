import React, { useState } from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import ReviewPage from '../ReviewPage/ReviewPage';

const FeaturedJobs = ({ data }) => {
    // console.log(data)
    const [item,setItem]=useState({})
    const { title, brandname, location, salary, onsite, fulltime, remote } = data
    // console.log(data)
    // const [sortdata, setSortdata] = useState(false)
    // const[datas,setDatas]=useState([])

    // if (data) {

    //     const itemData = sortdata?data.slice(0,5):data
    //     setDatas(itemData)
    // }

    const handelViewDetails=(pd)=>{
        setItem(pd)
    }
    return (
        <div className='p-5 mt-5 border'>
            <img className='w-60 h-24' src={data.img} alt="" />
            <h1 className='text-2xl'>{title}</h1>
            <p>{brandname}</p>
            <div className="flex gap-2">
                <button className='border border-indigo-600 rounded p-2 m-1'>{onsite ? "On-site" : 'Remote'}</button>
                <button className='border border-indigo-600 rounded p-2 m-1'>{fulltime && "Full-time"}</button>
            </div>
            <div className="flex gap-5">
                <div className="flex gap-1">
                    <MapPinIcon className='w-4' />
                    <small>{location}</small>
                </div>
                <div className="flex gap-1">
                    <CurrencyDollarIcon className='w-4' />
                    <small>{salary}</small>
                </div>
            </div>
            <Link
            to={'ReviewPage'}
            >
            <button onClick={()=>handelViewDetails(data)} className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500 mt-3">View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJobs;