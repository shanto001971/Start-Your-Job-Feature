import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ReviewPage = () => {
    const [info, setInfo] = useState();


    const { id } = useParams();

    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
            .then(data => {
                const foundProduct = data.find(product => product.id === id);
                setInfo(foundProduct)
            })
    }, []);
    console.log(info)
    //   const {job_description,job_responsibility,location,required_experience,salary,title}=info

    return (
        <div>
            <div className="h-48 text-center mt-5">
                <h1 className='text-5xl'>Job Details</h1>
            </div>
            <div className="lg:flex gap-5 p-10 border">
                <div className="w-9/12 p-5">
                    <p className='mt-5'><strong>Job Description:</strong>{info?.job_description}</p>
                    <p className='mt-5'><strong>Job Responsibility:</strong>{info?.job_responsibility}</p>
                    <p className='mt-5'><strong >Educational Requirements:</strong></p>

                    <p className=''>{info?.certifications}</p>

                    <p className='mt-5'><strong >Experiences:</strong></p>
                    <p className=''>{info?.required_experience}</p>

                </div>
                <div className="bg-slate-200 p-10 rounded">
                    <h1>Job Details</h1>
                    <p><strong>Salary : </strong>{info?.salary}</p>
                    <p><strong>Job Title :</strong>{info?.title}</p>
                    <div className="">
                        <h1>Contact Information</h1>
                        <p><strong>Phone :</strong>{info?.contact_info.phone}</p>
                        <p><strong>Email :</strong>{info?.contact_info.email}</p>
                        <p><strong>Address :</strong>{info?.location
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;