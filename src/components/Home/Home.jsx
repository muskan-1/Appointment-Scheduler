import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-20 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Appointment Booking
                            {/* <span className="hidden sm:block text-4xl">Lorem Ipsum</span> */}
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-7 py-3.5 font-medium bg-blue-700 rounded-lg hover:opacity-75"
                            to="/book-appointment"
                        >
                          
                            Book now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg?size=626&ext=jpg&ga=GA1.1.273342889.1688560184&semt=ais" alt="image1" />
                </div>
            </aside>
        </div>
    );
}
