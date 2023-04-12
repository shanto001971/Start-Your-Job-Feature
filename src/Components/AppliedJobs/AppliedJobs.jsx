import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleApplideJob from './SingleApplideJob';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const AppliedJobs = () => {
    const [info, setInfo] = useState([]);
    const [isRemote, setIsRemote] = useState(false);
    const [filteredInfo, setFilteredInfo] = useState([]);
    // console.log(filteredInfo)
    const data = useLoaderData()
    useEffect(() => {
        setInfo(data)
        setFilteredInfo(data)
    }, [data, info])
    // console.log((isRemote))


    const handleFilterBtn = (event) => {
        if (event.target.textContent === "Show remote jobs") {
            setIsRemote(true);
        } else if (event.target.textContent === "Show On-Site jobs") {
            setIsRemote(false);
        };
        if (isRemote === true) {
            const remoteJob = info.filter(product => product.onsite === true);
            // console.log(remoteJob)
            setFilteredInfo(remoteJob)
        }

        if (isRemote === false) {
            const onsiteJob = info.filter(product => product.onsite === false);
            // console.log(onsiteJob)
            setFilteredInfo(onsiteJob)
        }
    }








    return (
        <div>
            <div className="text-center h-48 text-white mt-6 " style={{
                backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-blue-technology-web-banner-image_122453.jpg")`
            }}>
                <h1 className='text-5xl'>Applied Jobs</h1>
            </div>
            <div className='flex justify-end mr-20 mt-32'>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost bg-base-200 rounded-none px-6 pt-4 pb-5 m-1 normal-case flex gap-2">Filter By <ChevronDownIcon className='w-4'></ChevronDownIcon></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={handleFilterBtn}>Show remote jobs</button></li>
                        <li><button onClick={handleFilterBtn}>Show On-Site jobs</button></li>
                    </ul>
                </div>
            </div>
            <div>
                {
                    filteredInfo.map(singledata => <SingleApplideJob key={singledata.id} singledata={singledata} />)
                }

            </div>
        </div>
    );
};

export default AppliedJobs;