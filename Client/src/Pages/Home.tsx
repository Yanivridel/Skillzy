import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { subjects } from '@/utils/stracture'
import SubCard from "@/components/SubCard";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const subCarouselImages = [
  "/images/Mathematics.jpg",
  "/images/Music.jpg",
  "/images/Technology.jpg",
  "/images/Environmental-Studies.jpg",
  "/images/Psychology.jpg",
];

function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
);
  return (
    <div className="w-[100%] mr-[26px]">
       <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl mx-auto p-[30px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {subCarouselImages.map((url, index) => (
          <CarouselItem key={index} className="relative">
            <div className="p-2">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden">
                <img
                        src={url}
                        alt={`Sub ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                        />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    <div className="flex justify-center p-5 text-[30px]">Choose the subject you want to study</div>
      <div className="grid w-[100%]  p-[10px] ">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 ">
          {subjects.map(subject =><Link key={subject.name} to={``}> <SubCard subject={subject}/></Link>)}
        </div>
      </div>
    </div>
  );
}

export default Home;
