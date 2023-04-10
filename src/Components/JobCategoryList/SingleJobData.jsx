import React, { useEffect, useState } from 'react';

const SingleJobData = ({singleData}) => {
   

    const{img,subtitle,title}=singleData
    return (
        <div>
            
            <div className="p-5 text-center bg-slate-100 rounded">
                    <img className='w-20 mx-auto' src={img} alt="" />
                    <h1 className='font-semibold'>
                        {
                          title  
                        }
                    </h1>
                    <p>
                        {subtitle}
                    </p>
                </div>
        </div>
    );
};

export default SingleJobData;