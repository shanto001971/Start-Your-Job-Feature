import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-700 text-white'>
            <div className="lg:flex justify-center gap-16">
                <div className="p-10">
                    <h1 className='text-2xl'>
                    Start Your Job Feature
                    </h1>
                    <p>
                    There are many variations <br /> of passages of Lorem Ipsum , <br /> but the majority have suffered  <br /> alteration in some form.
                    </p>
                    <div className=" flex gap-3">
                        <img className='w-7' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt="" />
                        <img className='w-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4Lk6AEB0PQWFqeDy6nBdSd3V38pZAMg3LCNa1QFubQ&s" alt="" />
                        <img className='w-7' src="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-ggh8x3cn.png" alt="" />
                    </div>
                </div>
                <div className="p-10">
                    <h1 className='text-2xl'>Company</h1>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className="p-10">
                    <h1 className='text-2xl'>Product</h1>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className="p-10">
                    <h1 className='text-2xl'>Support</h1>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className="p-10">
                    <h1 className='text-2xl'>Contact</h1>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                    
                </div>
                
            </div>
            <div className="lg:flex justify-between p-10 border">
            
                <p>@2023 Your Job Feature. All Rights Reserved</p>
                <p>Powered by Start Your Job Feature</p>
            </div>
        </div>
    );
};

export default Footer;