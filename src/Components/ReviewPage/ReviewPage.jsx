import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../Utiletis/Utiletis';


const ReviewPage = () => {
    const [info, setInfo] = useState();
    // const [loading, ]

    const { id } = useParams();

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const foundProduct = data.find(product => product.id === id);
                setInfo(foundProduct)
            })
    }, []);
    


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
                <div className="">
                    <div className="bg-slate-200 p-10 rounded">
                        <h1 className='text-2xl mb-4'>Job Details</h1>
                        <hr />
                        <div className="flex justify-center  gap-1">
                            <CurrencyDollarIcon className='w-4' />
                            <p><strong>Salary : </strong>{info?.salary}</p>
                        </div>
                        <div className="flex gap-1">
                            <BriefcaseIcon className='w-3' />
                            <p><strong>Job Title :</strong>{info?.title}</p>
                        </div>

                        <div className="mt-3">
                            <h1 className='text-2xl mb-4'>Contact Information</h1>
                            <hr />
                            <div className=" flex gap-1">
                                <PhoneIcon className='w-3'></PhoneIcon>
                                <p><strong>Phone :</strong>{info?.contact_info.phone}</p>
                            </div>
                            <div className=" flex gap-1">
                                <AtSymbolIcon className='w-3' />
                                <p><strong>Email :</strong>{info?.contact_info.email}</p>
                            </div>
                            <div className=" flex gap-1">
                                <MapPinIcon className='w-3' />
                                <p><strong>Address :</strong>{info?.location
                                }</p>
                            </div>

                        </div>

                    </div>
                    <Link
                    to="/AppliedJobs"
                    >
                    <button onClick={()=>addToDb(info?.id)} className="btn btn-active bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 w-full" >Apply Now</button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ReviewPage;