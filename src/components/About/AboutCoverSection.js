import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="markdown-blog" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Envision grand ambitions, labor with relentless dedication, and realize extraordinary outcomes.
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            This credo propels my vocation as an impassioned freelancer. I seamlessly integrate avant-garde technology with enduring aesthetics to craft immersive and compelling digital experiences. Drawing inspiration from the natural world and literary masterpieces, I am an incessant scholar who welcomes challenges as opportunities for growth. With each endeavor, I aspire to imprint a profound and lasting influence—meticulously refined, pixel by pixel.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection