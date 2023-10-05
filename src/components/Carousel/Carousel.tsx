import CarouselImage from "../CarouselImage/CarouselImage"

interface CarouselProps {
  category: String
}


const Carousel = ({category}: CarouselProps) => {
  return (
    <div className="carousel w-[1363px] h-[184px] mx-[38px]">
    
      <div className="inline">
        <div 
          className="text-white text-base text font-bold font-['Roboto'] "
          style={{left: 45, top: 888.80, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>
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