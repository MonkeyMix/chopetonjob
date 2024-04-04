"use client"
import * as React from "react"
import { reviews } from "@/data/reviews"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Reviews() {
  return (
<Carousel
  opts={{
    align: "center",
  }}
  plugins={[
    Autoplay({
      delay: 5000,
    }),
  ]}
  className="w-full max-w-screen-xl mx-auto"
>
  <CarouselContent>
    {reviews.map((_, index) => (
      <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
        <Card className="flex flex-col items-center justify-center h-full relative">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-3 relative">
              <Image
                src={_.logo}
                width={150}
                height={150}
                alt={_.firstName}
                className="rounded-full"
              />
              <Image
                src="/linkedin.svg"
                width={10}
                height={10}
                alt="linkedin"
                className="absolute top-0 right-0 w-6 h-6 cursor-pointer"
              >
              </Image>
            </div>
            <CardTitle>{_.firstName} {_.lastName}</CardTitle>
            <CardDescription>
              <Label>{_.position} - {_.company}</Label>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-grow items-center justify-center">
            <div className="flex items-center">
              <span className="text-center">{_.description}</span>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    )
}
