import graph4 from '/images/graph4.png';
import graph5 from '/images/graph5.png';

const AboutMe = () => {
    return (
        <div className='lg:mx-10 font-serif relative'>
            <div className='flex items-center gap-5'>
                <div className='text-4xl font-bold'>About</div>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
            </div>

            <div className='absolute rellax right-1/2 bottom-28' data-rellax-speed="-5" data-rellax-zindex="5">
                <img className="w-56 opacity-50" src={graph4} alt="" />
            </div>
            <div className='absolute rellax left-2/3 -top-8' data-rellax-speed="-3" data-rellax-zindex="5">
                <img className="w-44 opacity-40" src={graph5} alt="" />
            </div>

            <div className='lg:ml-32 ml-10 space-y-5 lg:mr-20 mt-10 bg-violet-700/10 lg:p-10 p-3 rounded-md border border-violet-600 hvr-grow'>
                <p>
                    I am <span className='font-bold text-violet-700'>Md. Parvaj Mosharof</span>, a passionate and motivated
                    <span className='font-bold text-violet-700'> Junior Frontend Web Developer</span> with hands-on experience in creating engaging and responsive web applications. My expertise spans a range of technologies:
                </p>

                {/* <ul>
                    <li>
                        🖥️ <span className='font-bold'>Frontend:</span> HTML5, CSS3, JavaScript, <span className='font-bold text-violet-700'>React.js</span>, Tailwind CSS
                    </li>
                    <li>
                        🛠️ <span className='font-bold'>Backend:</span> Node.js, Express.js
                    </li>
                    <li>
                    🗃️ <span className='font-bold'>Database:</span> MongoDB 
                    </li>
                    <li>
                    ⚙️ <span className='font-bold'>Tools:</span> Git & GitHub, Visual Studio Code, Postman, Figma
                    </li>
                </ul> */}

                <p>

                </p>

                <p>
                    Currently, I am pursuing a <span className='font-bold text-violet-700'>B.Sc. in Computer Science</span> and Engineering at Uttara University. 🎓 In addition to my web development skills, I am actively involved in <span className='font-bold'>competitive programming</span>, which enhances my problem-solving abilities and helps me tackle complex challenges effectively. 🧩
                </p>

                <p>
                    I am excited to apply my skills in real-world projects and am seeking opportunities to grow professionally through internships or junior development roles. 🚀
                </p>

                <p>
                    Let’s connect and explore potential collaborations! 🤝
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
