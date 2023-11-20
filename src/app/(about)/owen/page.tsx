import React from 'react'
import Image from 'next/image';
import portrait_owen from "../../../../public/portrait_owen.jpg";

const AboutOwen = () => {
  return (
    <div>
      <h1 className="text-xl text-gray-800">About Me</h1>
      <div className="mt-4 flex flex-col sm:flex-row gap-6">
        <div>
          <Image src={portrait_owen} alt='#' className='max-w-full sm:max-w-sm'></Image>
        </div>
        <div>
          <p>My name is Owen. I am a freshman at The University of Colorado in Boulder studying Computer Science. During my free time, I enjoy Rock Climbing, skiing (during the winter), spending time with my friends and family, and hiking my dog. In the future, I hope to work as a backend/cyber security engineer. I find internet security and data protection very interesting because the world continues to lean more and more on the internet each year, and online security is  becoming increasingly more important as this happens.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutOwen;