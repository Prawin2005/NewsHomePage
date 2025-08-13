import { ArticlePreview } from "../Molecules/ArticlePreview";
import retro from '../../Asserts/image-retro-pcs.jpg';
import laptop from '../../Asserts/image-top-laptops.jpg';
import growth from '../../Asserts/image-gaming-growth.jpg';


const trendingData = [
  {
    imageSrc: retro,
   
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',

   
  },
  {
    imageSrc: laptop,
   
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
    
  },
  {
    imageSrc: growth,
    
    title: 'The Growth of Gaming',
    description: 'How the gaming industry has evolved over the years.',
    
  }
];

const TrendingSection = () => {
  return (

    
      <div className=" trend d-flex  ">
        {trendingData.map((item) => 
          <ArticlePreview
            key={item.number}
            image={item.imageSrc}
            title={item.title}
            description={item.description}
            
          />
          
        )}
      </div>
  
  );
};

export default TrendingSection;
