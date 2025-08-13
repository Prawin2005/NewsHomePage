import React from 'react'
import SubTitle from '../Atoms/SubTitle'
import Heading from '../Atoms/Heading';
import Paragraph from '../Atoms/Paragraph';

const NewsItem = () => {
  
  return (
    <div  className="news gap-5 bg-dark text-white col-md-5 h-60">
       
        <Heading heading="New" className="bg"/>
        <SubTitle subtitle="Hydrogen VS Electric Cars" />
        <Paragraph Paragraph="will hydrogen-fueled cars ever catch up to EVs?"/>
        <hr></hr>
        <SubTitle subtitle="The Downsides of AI Artistry" />
        <Paragraph Paragraph="What are the possible adverse effects of on-demand AI image generation?"/>
        <hr></hr>
        <SubTitle subtitle="Is VC Funding Drying Up?" />
        <Paragraph Paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means."/>

    </div>
  )
}

export default NewsItem;