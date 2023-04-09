import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategoryList/JobCategory';
import FeaturedJobs from '../Featured Jobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';



const Homes = () => {
    // // const {data,setData}=useState()
    // // console.log(data)
    // useEffect(()=>{
    //     fetch('/public/jobs.json')
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    

    const items = useLoaderData()
    // console.log(items)

    return (
        <div className='p-5'>
            <section className='lg:flex justify-center'>
            <div className="my-auto">
            <h1 className='text-3xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-3xl font-bold text-blue-600'>Dream Job</span></h1>
            <small>Explore thousands of <br /> job opportunities with all the information you need. Its your future. <br /> Come find it. Manage all your job application from start to finish.</small>
            <br />
            <button className="mt-4 btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
            </div>
            <div className="">
                <img src={"https://img.freepik.com/free-photo/bohemian-man-thinking_1368-3693.jpg"} alt="" />
            </div>
            </section>
            
            {/* JobCategory */}

            <section>
                <JobCategory/>
            </section>
            {/* Featured Jobs */}
            <section>
                <div className="">
                    
                </div>
                <div className="grid lg:grid-cols-2 gap-3">
                {
                    items.map(data=><FeaturedJobs key={data.id} data={data} />)
                }
                </div>
                
                
            </section>
        </div>
    );
};

export default Homes;