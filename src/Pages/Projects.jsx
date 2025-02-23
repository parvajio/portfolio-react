import pro1 from "/images/diagno-d.png"
import pro2 from "/images/alterno.jpeg"
import pro3 from "/images/rento.jpeg"
import pro4 from "/images/touro.jpeg"
import ProjectCard from './ProjectCard'


const Projects = () => {

    const project = [
        {
            id: 5,
            title: "Librify",
            img: pro2, // Replace with the actual image variable or path
            description: "Librify is a modern and comprehensive University Library Management System designed to streamline book borrowing, user management, and library operations. It features advanced search and filtering, real-time availability tracking, automated email notifications, and an intuitive admin dashboard for efficient library management.",
            shortDescription: "Librify is a next-gen library management system with advanced search, real-time tracking, automated notifications, and an admin dashboard for seamless library operations.",
            link: "https://librify-library.web.app/", // Replace with your live demo link
            client: "https://github.com/yourusername/librify-client", // Replace with your frontend GitHub repo
            server: "https://github.com/yourusername/librify-server", // Replace with your backend GitHub repo
            features: [
                "Personalized onboarding flow with automated email notifications",
                "Advanced filtering, search, and pagination for book discovery",
                "Real-time availability tracking and detailed book information",
                "Customized PDF receipts for borrowed books",
                "Admin dashboard with analytics for users, books, and borrow requests",
                "Role management for inviting admins and managing user access",
                "Automated reminders for book returns via email",
                "Image and video optimization using ImageKit",
                "Scalable database management with Postgres and Neon",
                "Efficient caching with Upstash Redis for faster performance"
            ],
            technologies: [
                "Next.js", "TypeScript", "Tailwind CSS", "ShadCN",
                "Node.js", "Express.js", "PostgreSQL", "Neon",
                "Drizzle ORM", "Upstash Redis", "Resend", "ImageKit",
                "NextAuth", "Chart.js", "React Hook Form", "pdf-lib"
            ]
        },
        {
            id: 1,
            title: "Diagno",
            img: pro1,
            description: "Diagno is a comprehensive diagnostic center management platform that allows users to book appointments, view test results, and manage medical history efficiently. It features a robust admin dashboard, secure payment integration, and an intuitive UI for seamless healthcare management.",
            shortDescription: "Diagno is a diagnostic center platform with test booking, medical history tracking, Stripe payments, and an admin dashboard for seamless management.",
            link: "https://diagno-auth.web.app/",
            client: "https://github.com/parvajio/Diagno",
            server: "https://github.com/parvajio/diagno-server",
            features: [
                "Appointment Booking System with real-time admin approval",
                "Secure payment processing via Stripe API",
                "Admin Dashboard for managing users, appointments, and test records",
                "Seamless medical history tracking for users"
            ],
            technologies: [
                "React js", "Tailwind CSS", "Node.js",
                "Express.js", "MongoDB", "Stripe", "JWT", "AOS"
            ]
        },
        {
            id: 2,
            title: "Alterno",
            img: pro2,
            description: "Alterno is a tour-related application designed to showcase featured tours and experiences. The platform allows users to explore various destinations, view details, and book tours effortlessly. With its sleek design and responsive features, Alterno aims to enhance the travel planning experience, making it enjoyable and straightforward for users.",
            shortDescription:"Alterno is a tour platform showcasing featured destinations, allowing users to explore, view details, and book tours effortlessly.",
            link: "https://alterno-auth.web.app/",
            client: "https://github.com/parvajio/alterno",
            server: "https://github.com/parvajio/alterno-server",
            technologies: [
                "React js", "Tailwind CSS", "Node.js",
                "Express.js", "MongoDB", "JWT", 
            ]
        },
        {
            id: 3,
            title: "Rento",
            img: pro3,
            description: "Rento is a rental platform that connects users with various rental services, including homes, vehicles, and equipment. It provides a user-friendly interface for searching and booking rentals. The project emphasizes secure transactions, real-time updates, and user feedback, ensuring a smooth experience for both renters and property owners.",
            shortDescription:"Rento is a rental platform for homes, vehicles, and equipment, offering secure transactions, real-time updates, and user feedback.",
            link: "https://auth-rento.web.app/",
            client: "https://github.com/parvajio/Rento",
            technologies: [
                "React js", "Tailwind CSS", "Node.js",
                "Express.js", "MongoDB"
            ]
        },
        {
            id: 4,
            title: "Touro",
            img: pro4,
            description: "Touro is a dynamic platform for exploring and booking various travel experiences. It focuses on providing users with detailed information about featured tours, destinations, and activities. The application enhances user engagement with visually appealing design and easy navigation, making travel planning more accessible and enjoyable.",
            shortDescription:"Touro is a travel platform for exploring and booking tours, offering detailed destination info, a sleek design, and easy navigation.",
            link: "https://touro-f1537.web.app/",
            client: "https://github.com/parvajio/touro",
            technologies: [
                "React js", "Tailwind CSS", "Node.js",
                "Express.js", "MongoDB"
            ]
        }
    ];


    console.log(project[0].img)

    return (
        <div>

            <div className='flex items-center gap-5 '>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
                <div className='text-4xl font-bold text-right font-["Yeseva One", "serif"]'>Projects</div>
                <div className='h-1 mt-2 rounded-full bg-violet-700 w-full'></div>
            </div>

            <div className='space-y-10 lg:mx-10 mt-10 lg:mt-20'>
                {
                    project.map((proj, inx) => {

                        const isReverse = inx % 2 !== 0;

                        return (
                            <ProjectCard key={inx} proj={proj} isReverse={isReverse}></ProjectCard>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default Projects
