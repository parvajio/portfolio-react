import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const ProjectCard = ({ proj, isReverse }) => {
    /* eslint react/prop-types: 0 */

    const linkCss = "hvr-underline-from-center hvr-grow hvr-icon-down btn btn-sm rounded-xl bg-violet-700/10 border-violet-600 hover:bg-violet-700/30 font-bold font-serif px-5 text-xs text-wrap"

    return (
        <div key={proj.id}>

            <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row '} items-center  font-serif gap-8`}>

                <figure
                    style={{ backgroundImage: `url(${proj?.img})` }}
                    className={`lg:w-1/2 w-full h-[350px] bg-cover  bg-top hover:bg-bottom transition-all ease-in-out  duration-[4s] rounded-xl hvr-grow border border-violet-600`}>
                    {/* <img
                                            className='w-full'
                                            src={proj.img}
                                            alt="Album" /> */}
                </figure>

                <div className="card-body lg:w-1/2 lg:mx-0 text-center hvr-grow bg-violet-700/5 border border-dashed border-violet-500 rounded-md mx-10 w-full">
                    <h2 className="text-2xl font-extrabold">{proj.title}</h2>
                    <p className='text-sm text-pretty'>{proj.shortDescription}</p>

                    {/* {proj.features && proj.features.length > 0 && (
                        <div className="mt-4 text-left text-sm">
                            <h3 className="text-md font-semibold text-violet-400">Key Features</h3>
                            <ul className="mt-2 space-y-1">
                                {proj.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <FaCheckCircle className="text-green-400 mr-2" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} */}

                    {/* Technologies Section */}
                    {proj.technologies && proj.technologies.length > 0 && (
                        <div className="mt-1">
                            <h3 className="text-lg font-semibold text-blue-700">Technologies Used</h3>
                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {proj.technologies.map((tech, index) => (
                                    <span key={index} className="bg-violet-900/20 text-xs px-3 py-1 rounded-full border font-bold text-violet-700 border-violet-700 ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                        <h3 className="text-lg font-semibold text-blue-700">Links</h3>
                    <div className='flex flex-wrap justify-center mt-1 gap-3'>
                        <a href={proj.link} target='_blank'><div className={linkCss}>Live <FaExternalLinkAlt /></div></a>
                        <a href={proj.client} target='_blank'><div className={linkCss}>Github  (client)<FiGithub /></div></a>
                        {proj?.server && <a href={proj.server} target='_blank'><div className={linkCss}> Github (server)<FiGithub /></div></a>}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard