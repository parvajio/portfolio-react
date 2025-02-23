import React from 'react'
import graph from '/images/graph.png';

const ContactMe = () => {
    return (

        <div className='font-serif relative'>

            <div className='flex justify-center bg-gradient-to-b  from-violet-700/20 px-40 border-violet-700 border-t-2 rounded-t-3xl py-5'>
                <p className='py-5 text-3xl font-bold'>Contact Me</p>   
            </div>

            {/* <div className='absolute rellax left-2/3 -bottom-8' data-rellax-speed="4" data-rellax-zindex="-5">
                <img className="w-64 opacity-50" src={graph} alt="" />
            </div>

            <div className='absolute rellax left-2/3 -bottom-8' data-rellax-speed="2" data-rellax-zindex="-5">
                <img className="w-64 opacity-50" src={graph} alt="" />
            </div> */}

            <div className="flex flex-col lg:flex-row gap-5 items-center mt-5">

                <div className=" w-full py-6 md:py-0 md:px-6 flex-col flex items-center justify-center text-center">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">
                        Fill in the form to start a conversation
                    </p>
                    <div className="space-y-4 flex flex-col items-center">
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>mdparvajmosharof17@gmail.com</span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span>Uttara, Dhaka, Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+880-1400139998</span>
                        </p>
                    </div>

                    <div className='flex gap-20 mt-20'>
                        <a href="https://www.linkedin.com/in/parvajio/">
                            <p className="flex items-center gap-2 btn">
                                <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                                </svg>
                                <span>Linkedin</span>
                            </p>
                        </a>

                        <a href="https://github.com/parvajio">
                            <p className="flex items-center gap-2 btn">
                                <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                </svg>
                                <span>Github</span>
                            </p>
                        </a>
                    </div>
                </div>

                <div className='w-full '>
                    <form
                        noValidate=""
                        className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                    >
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input
                                type="text"
                                placeholder="Leroy Jenkins"
                                className="w-full p-4 rounded-md input mt-2 border dark:border-blue-700 shadow-lg dark:shadow-blue-950"
                            />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input
                                type="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full p-4 rounded-md input mt-2 border dark:border-blue-700 shadow-lg dark:shadow-blue-950"
                            />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea
                                rows="3"
                                placeholder="Your Message"
                                className="textarea w-full border p-4 rounded-md mt-2 dark:border-blue-700 shadow-lg dark:shadow-blue-950"
                            ></textarea>
                        </label>
                        <button
                            type="button"
                            className="btn btn-link"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default ContactMe
