import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Statistics = () => {
    const data02 = useLoaderData()



    return (
        <div className=''>
            <div className="text-center mt-5">
                <h1 className='text-4xl'>
                    Statistics Section
                </h1>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <div className="">
                    <PieChart width={400} height={400}>
                        <Pie data={data02} dataKey="marks" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="marks" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </div>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;