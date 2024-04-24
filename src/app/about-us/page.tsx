import React from 'react'
import AboutUs from "@/components/about-us"
import { FaGithub } from 'react-icons/fa';
import ankit from "@/assets/ankit.jpg"
import akhil from "@/assets/akhil.jpeg"
import yash from "@/assets/yash.jpeg"
import Navbar from '@/components/navbar';
const page = () => {
    const TeamMembers = [
        {
          name: "Ankit Yadav",
          role: "Frontend Developer",
          imageUrl: ankit,
          social: [
            {
              name: "Github",
              href: "https://github.com/ANKITy102",
              icon: <FaGithub />,
            },
          ],
        },
        {
          name: "Akhilesh Jyotishi",
          role: "Frontend Developer",
          imageUrl: akhil,
          social: [
            {
              name: "Github",
              href: "https://github.com/AkhileshJyotishi",
              icon: <FaGithub />,
            },
          ],
        },
        {
          name: "Yash Agarwal",
          role: "Backend Developer",
          imageUrl: yash,
          social: [
            {
              name: "Github",
              href: "https://github.com/Yash7426",
              icon: <FaGithub />,
            },
          ],
        },
      
        // Add more team members as needed
      ];
    return (
        <div className="h-screen w-screen  dark:bg-black bg-white  flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <Navbar/>
            <div className="flex-grow flex justify-center  w-full">
                <div className="w-full pb-14">

                <AboutUs teamMembers={TeamMembers} />
                </div>

            </div>
        </div>
    )
}

export default page
