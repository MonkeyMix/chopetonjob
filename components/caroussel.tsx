"use client"
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel"
import Autoscroll from "embla-carousel-auto-scroll"
import { logos } from "@/data/caroussel";
  
export function Caroussel() {

    return (
    <div className="pl-5 pr-5 pt-10 flex justify-center">
    <Carousel opts={{ align: "start", loop: true,}} className="overflow-hidden w-full" plugins={[Autoscroll({speed:1, stopOnInteraction:false})]}>
      <CarouselContent className="-ml-1 ">
      {logos.map((_, index) => (
        <CarouselItem key={index} className="pl-1 flex-[0_0_25%] flex items-center">
          <Image
            src={_.logo}
            width={300}
            height={300}
            alt="airfrance"
            style={{ opacity: 0.5 }}
          />   
        </CarouselItem>
      ))}
      </CarouselContent>
    </Carousel>
    </div>
    );
}