import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="p-5 text-center">
                <h1 className='text-5xl'>Blog Section</h1>
                <hr className='mt-5' />
            </div>
            <div className="p-20">
                <h1 className='text-4xl'>When to use the Contex API?</h1>
                <p>Contex API is used when data is sent from <br /> parent to child and that data can be accepted from anywhere.</p>
                <div className="">
                    <h1 className='text-4xl'>what is custom hooks?</h1>
                    <p>custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.</p>
                </div>
                <div className="">
                    <h1 className='text-4xl'>What is useRef and Usage Memo used for?</h1>
                    <p>useRef can be used to store local <br /> mutable value in a component. It doesn't participate in <br /> rerendering unline state data. useMemo is used to memoize (like we do in Dynamic Programming, concept wise) and skip recalculation.</p>
                </div>
                <div className="">
                    <h1 className='text-4xl'>What is useRef?</h1>
                    <p>useRef can be used to store local mutable value in a component</p>
                </div>
                <div className="">
                    <h1 className='text-4xl'>Usage Memo used for?</h1>
                    <p>useMemo is used to memoize like we do in Dynamic Programming, concept wise and skip recalculation.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;