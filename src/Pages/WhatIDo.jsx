import React from 'react';

const WhatIDo = () => {
  return (
    <div className='font-serif'>

      {/* Section Heading */}
      <div className='flex justify-center bg-gradient-to-b  from-violet-700/20 py-14 px-6 border-violet-600 border-t-2 rounded-t-3xl'>
        <div className='text-4xl font-bold text-right '>What I Do</div>
      </div>

      {/* Cards Container */}
      <div className="mx-auto max-w-5xl py-10 px-6">
        <div className="flex justify-center flex-wrap gap-10">
          
          {/* Frontend Development */}
          <div className="flex justify-center flex-col hvr-pulse-slow items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
            <div className="text-lg mb-3 text-blue-600 font-bold text-center">🖥️ Frontend Development</div>
            <p className="text-center text-md">
              Building interactive and responsive UIs using modern technologies like HTML, CSS, React.js, and Tailwind CSS.
            </p>
          </div>

          {/* Backend Development */}
          <div className="flex justify-center flex-col hvr-pulse-slow items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
            <div className="text-lg mb-3 text-blue-600 font-bold text-center">🛠️ Backend Development</div>
            <p className="text-center text-md">
              Developing robust server-side applications and APIs with Node.js, Express.js, and JWT for authentication.
            </p>
          </div>

          {/* Database Management */}
          <div className="flex justify-center flex-col hvr-pulse-slow items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
            <div className="text-lg mb-3 text-blue-600 font-bold text-center">🗃️ Database Management</div>
            <p className="text-center text-md">
              Handling NoSQL databases with MongoDB, performing CRUD operations, and maintaining efficient database connections.
            </p>
          </div>

          {/* API Integration */}
          <div className="flex justify-center flex-col hvr-pulse-slow items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
            <div className="text-lg mb-3 text-blue-600 font-bold text-center">🌐 API Integration</div>
            <p className="text-center text-md">
              Integrating RESTful APIs to enable communication between frontend and backend services.
            </p>
          </div>

          {/* Tools and Workflow */}
          <div className="flex justify-center flex-col hvr-pulse-slow items-center gap-5 bg-violet-700/10 py-8 px-6 rounded-xl border border-violet-600 w-72">
            <div className="text-lg mb-3 text-blue-600 font-bold text-center">⚙️ Tools & Workflow</div>
            <p className="text-center text-md">
              Skilled in Git, GitHub, VSCode, Postman, and Figma to streamline development and design workflows.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default WhatIDo;
