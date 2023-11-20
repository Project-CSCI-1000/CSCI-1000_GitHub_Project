import React from 'react'
import Image from 'next/image';
import denzel_portrait from "../../../../public/denzel_protrait.jpg";

const AboutDenzel = () => {
  return (
    <div>
      <h1 className="text-xl text-gray-800">About Me</h1>
      <div className="mt-4 flex flex-col sm:flex-row gap-6">
        <div>
          <Image src={denzel_portrait} alt='#' className='max-w-full sm:max-w-sm'></Image>
        </div>
        <div>
          <p>My name is Denzel. I am a freshman at the University of Colorado at Boulder. I am currently majoring in Computer Science and hope to work as a software engineer. I mostly like sleeping, but also play video games. I like spending time with friends and family and hope to learn a lot during my time at Boulder.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutDenzel;
