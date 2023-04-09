import React from 'react';

const JobCategory = () => {
    return (
        <div className='mt-5 border'>
            <div className="text-center">
                <h1 className='font-bold text-3xl '>
                Job Category List
                </h1>
                <p>
                Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="px-px lg:flex justify-center gap-3 mt-5 ">
            <div className="p-5 text-center bg-slate-100 rounded">
                <img className='w-20 mx-auto' src="https://media.istockphoto.com/id/1211396774/vector/calculator-with-coin-thin-line-icon-budget-money-saving-symbol-outline-style-pictogram-on.jpg?b=1&s=170667a&w=is&k=20&c=z2AlFQqK1VulwRbkWELqzEdws_hXR_oqYa7z196EHe8=" alt="" />
                <h1 className='font-semibold'>
                    Account & Finance
                </h1>
                <p>
                    300 Jobs Available
                </p>
            </div>
            <div className="p-5 text-center bg-slate-100 rounded">
                <img className='w-20 mx-auto' src="https://static.vecteezy.com/system/resources/previews/006/757/534/original/light-bulb-icon-free-vector.jpg" alt="" />
                <h1 className='font-semibold'>
                    Creative Design
                </h1>
                <p>
                    100+ Jobs Available
                </p>
            </div>
            <div className="p-5 text-center bg-slate-100 rounded">
                <img className='w-20 mx-auto' src="https://static.thenounproject.com/png/1013164-200.png" alt="" />
                <h1 className='font-semibold'>
                    Marketing & Sales
                </h1>
                <p>
                    150 Jobs Available
                </p>
            </div>
            <div className="p-5 text-center bg-slate-100 rounded">
                <img className='w-20 mx-auto' src="https://thumbs.dreamstime.com/b/engineering-working-process-line-icon-engineer-architect-helmet-sign-vector-industrial-job-symbol-colorful-thin-outline-concept-185408677.jpg" alt="" />
                <h1 className='font-semibold'>
                    Engineering Job
                </h1>
                <p>
                    224 Jobs Available
                </p>
            </div>
            </div>
        </div>
    );
};

export default JobCategory;