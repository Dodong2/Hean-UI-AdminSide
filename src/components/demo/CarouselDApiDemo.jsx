import * as React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { historyData } from '../pages/admin-side/HistoryData/historyData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState(null); // Assuming the Carousel component provides an API object
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className='carousel-tailwind1'>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className='bg-custom-dark carousel-tailwind2 rounded-none'>
                <CardContent className="aspect-square p-0">
                  <div className="table-info">
                    <div className="table-date">Date <FaArrowDownLong className="icon4" /></div>
                    <h1 className="table-location">Location</h1>
                  </div>
                  <table className="main-table">{/*index + 1*/}
                    <thead className="table-head">
                      <tr className="table-row1">
                      </tr>
                      {historyData.map((item, index) => {
                        return (
                          <tr key={index} className='table-row2'>
                            <td className='history-date'>{item.date}</td>
                            <td className='history-location'>{item.loc}</td>
                          </tr>
                        )
                      })}
                    </thead>
                  </table>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='rounded absolute'/>
        <CarouselNext className='rounded absolute'/>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground text-white">
        Page {current} of {count}
      </div>
    </div>
  );
}
