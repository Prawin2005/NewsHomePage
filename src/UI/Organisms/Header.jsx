
import image from '../../Asserts/logo.svg'
import Image from '../../UI/Atoms/Image'
import NavBar from "../Molecules/NavBar"


const Header = () => {
  const navlist = ['Home' , 'New','Popular', 'Trending', 'Categories']
  return (
    <div className="d-flex justify-content-around align-items-center p-2">
        <Image image={image} imageName="News.W" />
        <NavBar navlist={navlist}/>
    </div>
  )
}

export default Header