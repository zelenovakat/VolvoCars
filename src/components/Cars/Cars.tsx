import React, { useState, useMemo } from "react"
import CarBlock from "./CarBlock"
import { CarsPropsType } from "./Cars.types"
import { Carousel, CarouselItem } from "../Carousel"
import Filter from "../Filter"

function Cars({ cars }: CarsPropsType) {
  const [bodyTypeFilter, setBodyTypeFilter] = useState("")
  const getFilteredList = () => {
    return cars.filter((itemOfCar) => {
      if (bodyTypeFilter) {
        return itemOfCar.bodyType === bodyTypeFilter
      } else {
        return itemOfCar
      }
    })
  }
  const filterBodyTypeList = useMemo(getFilteredList, [bodyTypeFilter, cars])

  return (
    <div>
      <div>
        <Filter setBodyTypeFilter={setBodyTypeFilter} bodyTypeFilter={bodyTypeFilter} />
      </div>
      <Carousel autoScrollInterval={0}>
        {filterBodyTypeList.map((car) => (
          <CarouselItem key={car.id}>
            <CarBlock car={car} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  )
}

export default Cars
