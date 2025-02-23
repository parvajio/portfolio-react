import React from 'react';
import graph5 from '/images/graph5.png';

const Extracurricular = () => {
    const activities = [
        {
            icon: '🏅',
            title: 'Team Leader',
            description: 'Intra University Programming Contest 2024',
        },
        {
            icon: '🏆',
            title: '20th Position',
            description: 'Achieved 20th position in the contest',
        },
        {
            icon: '🎓',
            title: 'Certificate',
            description: 'Received a certificate for team leadership and participation',
        },
    ];

    return (
        <div className='font-serif relative'>
            <div className='flex justify-center bg-gradient-to-b  from-violet-700/20 py-14 px-6 border-violet-600 border-t-2 rounded-t-3xl'>
                <div className='lg:text-4xl text-lg font-bold text-nowrap'>EXTRACURRICULAR ACTIVITIES</div>
            </div>

            {/* <div className='absolute rellax right-1/2 bottom-0' data-rellax-speed="3" data-rellax-zindex="-5">
                <img className="w-64 opacity-35" src={graph5} alt="" />
            </div> */}

            {/* Medium Description */}
            <div className="mx-auto max-w-5xl py-6 px-6 text-center">
                <p className="text-lg text-gray-700 mx-8">
                    Engaging in extracurricular activities has been a crucial part of my personal and professional development. 
                    Leading teams and participating in contests has not only enhanced my technical skills but also fostered teamwork and leadership qualities.
                </p>
            </div>

            <div className="mx-auto max-w-5xl py-10 px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex flex-col items-center bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 text-center hvr-wobble-bottom">
                            <div className="text-4xl mb-4">{activity.icon}</div>
                            <div className="text-xl font-bold">{activity.title}</div>
                            <p className="mt-2 text-violet-900">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Extracurricular;
