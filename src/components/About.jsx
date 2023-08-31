import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled and dedicated team member with a proven track record in
        software development. My expertise encompasses a wide range of
        technologies, making me a versatile contributor to any project. As a
        smart contract developer, I've demonstrated my proficiency in creating
        secure and efficient blockchain-based solutions. My experience extends
        to software engineering and web developement, having worked extensively
        with technologies like React, Next.js, Angular, and Node.js. I am no
        stranger to TypeScript and have utilized it to enhance code reliability
        and maintainability. My commitment to efficiency is evident in my
        approach to problem-solving. I thrive on tackling real-world challenges
        head-on and finding innovative solutions that drive tangible results. As
        a team player, I believe in open communication and collaboration,
        ensuring that the collective effort yields the best outcomes. My ability
        to adapt swiftly to new technologies and my passion for continuous
        learning are key drivers behind my contributions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} 
      </div>
    </>
  )
}

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

export default SectionWrapper(About, 'about')
