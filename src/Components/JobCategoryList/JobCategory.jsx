import React, { useEffect, useState } from 'react';
import SingleJobData from './SingleJobData';
const jobCatagoryData = () => {

}

const JobCategory = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/public/JobCategoryList.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className=' border'>
            <div className="text-center mt-5">
                <h1 className='font-bold text-3xl '>
                    Job Category List
                </h1>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>

            <div className="mt-5 px-px lg:flex justify-center gap-3">
                {
                    data.map((singleData, index) => <SingleJobData
                        key={index}
                        singleData={singleData}
                    />)
                }
            </div>
        </div>
    );
};

export default JobCategory;