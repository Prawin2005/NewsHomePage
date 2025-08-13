
const Image = ({image, imageName}) => {
  return (
    <div >
        <img src={image} alt={imageName}  />
    </div>
  )
}

export default Image