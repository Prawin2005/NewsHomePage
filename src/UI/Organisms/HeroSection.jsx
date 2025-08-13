import Image from "../Atoms/Image"
import Hero from "../Molecules/Hero"
import image from '../../Asserts/image-web-3-desktop.jpg'
import NewsItem from "../Molecules/NewsItem"

const HeroSection = () => {
  return ( 
    <div className="img ">
      <div className="d-flex gap-5 ">
       <img src={image} alt="News.W" className="w-75 h-100"/>
       <NewsItem />
       </div>
      <Hero className="h-100"/>
    </div>
  )
}

export default HeroSection