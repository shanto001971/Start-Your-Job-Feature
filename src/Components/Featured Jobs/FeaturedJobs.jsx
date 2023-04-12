import React, { useState } from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const FeaturedJobs = ({ data }) => {
    
    
    const { title, brandname, location, salary, onsite, fulltime, remote,id } = data
    // console(data.onsite)
    const [datas,setDatas]=useState({})
    const handelReviewPage=(item)=>{
        setDatas(item)
        
    }
    
    
    return (
        <div className='p-5 mt-5 border'>
            <img className='w-60 h-24' src={data.img} alt="" />
            <h1 className='text-2xl'>{title}</h1>
            <p>{brandname}</p>
            <div className="flex gap-2">
                <button className='border border-indigo-600 rounded p-2 m-1'>{onsite ? "On-site":"remote"}</button>
                <button className='border border-indigo-600 rounded p-2 m-1'>{fulltime ? "Full-time":"Full-time"}</button>
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
            to={`/ReviewPage/${id}`}
            >
            <button className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500 mt-3">View Details</button>
            </Link>
            
        </div>
    );
};

export default FeaturedJobs;