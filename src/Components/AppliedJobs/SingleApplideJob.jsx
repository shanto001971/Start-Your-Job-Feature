import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const SingleApplideJob = ({ singledata }) => {
    
    const { id, brandname, title, img, salary, location,onsite,fulltime } = singledata


    return (
        <div className='border m-5 rounded-md '>
            <div className="flex justify-between p-10">
                <div className="flex gap-4">
                    <img className='w-56' src={img} alt="" />
                    <div className="">
                        <h1 className='text-3xl'>{title}</h1>
                        <p>{brandname}</p>
                        <div className="flex gap-2">
                            <button className='border border-indigo-600 rounded p-1 m-1'>{onsite ? "On-site" : 'Remote'}</button>
                            <button className='border border-indigo-600 rounded p-1 m-1'>{fulltime ? "Full-time" : "Full-time"}</button>
                        </div>
                        <div className=" flex gap-3">
                            <p className='flex gap-2 justify-center items-center'><MapPinIcon className='w-4'/>{location}</p>
                            <p className='flex gap-2 justify-center items-center'><CurrencyDollarIcon className=' w-4'/>{salary}</p>
                        </div>
                    </div>
                </div>
                <Link
                    to={`/ReviewPage/${id}`}
                >
                    <button className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 w-40">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleApplideJob;