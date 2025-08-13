import Image from "../Atoms/Image"
import Paragraph from "../Atoms/Paragraph"
import Heading from "../Atoms/Heading"


export const ArticlePreview = ({image, title, description}) => {
  return (
    <div className="d-flex gap-2 shadow w-100">
       
        <Image image={image} imageName="Logo" />
        <div className="d-flex flex-column gap-2">
        <Heading heading={title} />
        <Paragraph Paragraph={description} />
       </div>



    </div>
  )
}