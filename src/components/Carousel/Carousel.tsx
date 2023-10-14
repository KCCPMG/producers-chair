import CarouselImage from "../CarouselImage/CarouselImage"
import { roboto } from "~/fonts"

interface CarouselProps {
  category: String
}


const Carousel = ({category}: CarouselProps) => {
  return (
    <div className="carousel max-w-7xl h-52 mx-auto">
    
      <div className={`text-white text-lg font-bold ${roboto.variable} break-words mt-8`}>
        <div className="inline">
          {category}
        </div>
        <div className="w-full overflow-x-scroll inline-block whitespace-nowrap">
          <CarouselImage />
          <CarouselImage />
          <CarouselImage/>
          <CarouselImage/>
        </div>

      </div>
    
    
    </div>
  )
}

export default Carousel;