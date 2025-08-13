import Button from '../Atoms/Button'
import React from 'react'
import Heading from '../Atoms/Heading'
import Paragraph from '../Atoms/Paragraph'

const Hero = () => {
  return (
    <div className="hero d-flex w-75 gap-2 mb-5 ">
        <Heading heading="The Bright Future of Web 3.0?" className="font"/>
      <div className='d-flex flex-column gap-2'>
        <Paragraph Paragraph="We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?" />
        <Button buttontext='Read More'></Button>
      </div>

    </div>
  )
}

export default Hero;

