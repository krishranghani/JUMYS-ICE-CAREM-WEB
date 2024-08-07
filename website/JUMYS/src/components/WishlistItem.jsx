import React from 'react';
// import { FaHeart } from 'react-icons/fa'; // Import icons
import Wishlist from '../assets/asset 30.jpeg';

const WishlistItem = () => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] h-[500px]">

                <div className="text-2xl font-semibold mb-6 font-serif ">
                    <button className="text-gray-500 hover:text-gray-700 text-lg ">
                        &#10084;
                    </button>  Wishlist (1)</div>
                <hr /><br />
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-evenly">
                        <div className='justify-between'>
                            <button className="text-gray-500 hover:text-gray-700 text-lg mr-5">
                                &#x2715;
                            </button>
                        </div>
                        <img
                            src={Wishlist}
                            alt="Blackout Chocolate Cake"
                            className="w-20 h-20 rounded-lg"
                        />
                        <div className="ml-4">
                            <h3 className="text-sm font-semibold">Blackout Chocolate Cake</h3>
                            <p className="text-sm text-red-500"><div className='line-through text-gray-600'>$12.00 </div> $12.00</p>
                            <p className="text-sm text-gray-600">August 1, 2024</p>
                        </div>
                        <div className="flex justify-between items-center ml-32">
                                <button className="bg-black text-white py-1 px-4 rounded-full hover:bg-gray-800">
                                    Read More
                                </button>
                            </div>
                    </div>

                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <hr /><br/>
                <div className="flex justify-between">
                    <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-red-600 font-serif">
                        Open Wishlist Page
                    </button>
                    <button className="border border-gray-500 text-black py-2 px-4 rounded-full hover:bg-red-600 font-serif">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
