"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoscroll from 'embla-carousel-auto-scroll'

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll({speed:3, stopOnInteraction:false,})])

  return (
    <div className="overflow-hidden border border-solid w-full" ref={emblaRef}>
      <div className="ml-1 flex">
        <div className="flex-[0_0_50%] min-w-0">Slide 1</div>
        <div className="flex-[0_0_50%] min-w-0">Slide 2</div>
        <div className="flex-[0_0_50%] min-w-0">Slide 3</div>
      </div>
    </div>
  )
}
