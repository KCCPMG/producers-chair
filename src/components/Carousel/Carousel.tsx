import CarouselImage from "../CarouselImage/CarouselImage"
import { roboto } from "~/fonts"

interface CarouselProps {
  category: String
}


const Carousel = ({category}: CarouselProps) => {
  return (
    <div className="carousel w-[1363px] h-[184px] mx-[38px]">
    
      <div className="inline">
        <div 
          className={`text-white text-base text font-bold ${roboto.variable} text-white text-base break-words mt-3`}
          // style={{left: 45, top: 888.80, position: 'absolute'}}
        >
            {category}
          </div>
        <CarouselImage />
        <CarouselImage />
        <CarouselImage/>
        <CarouselImage/>

      </div>
    
    
    </div>
  )
}

export default Carousel;