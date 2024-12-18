import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>
            ABOUT <span className='text-gray-700 font-medium'>US</span>
          </p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'> 
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to <b>E-Clinic</b>  , where healthcare meets innovation. We are a cutting-edge, digital healthcare platform committed to providing accessible, reliable, and quality medical services right at your fingertips.</p>
            <p>In today's fast-paced world, we understand that convenience and efficiency are essential for your health and well-being. Our mission is to revolutionize the healthcare experience by offering online consultations, digital health management, and seamless medical support through our easy-to-use platform.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>we aim to bridge the gap between technology and healthcare, making medical services more accessible, efficient, and patient-centered. Our vision is to empower individuals to take control of their health, while providing them with the tools and support they need to live healthier, happier lives.</p>
          </div>
        </div>
        <div className='text-xl my-4' >  
          <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span> </p>

        </div>
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border  px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5  text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointers '>
            <b> Expert Medical Care, At Your Fingertips: </b>
             <p>Our network consists of highly qualified, experienced doctors and specialists across various fields — from general medicine to dermatology, pediatrics, and more. No matter your concern, we ensure that you receive the right care from the right expert. </p>
          </div>
          <div className='border  px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5  text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointers '>     
          <b> Unmatched Convenience: </b>
          <p> Forget long waiting times and stressful in-person visits. Our platform allows you to connect with certified doctors and healthcare professionals from the comfort of your home — anytime, anywhere. All you need is an internet connection. </p>
          </div>
          <div className='border  px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5  text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointers '>
          <b> User-Friendly Experience:</b>
          <p> We believe healthcare should be simple. Our platform is designed for ease of use, whether you’re booking an appointment, consulting with a doctor. It’s intuitive, fast, and hassle-fre</p>
          </div>
        </div>
    </div>
  )
}

export default About