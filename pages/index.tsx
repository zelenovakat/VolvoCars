import React, { useEffect, useState } from "react"
import Cars from "../src/components/Cars/index"

function MainPage() {
  const [carItems, setCarItems] = useState([])
  useEffect(() => {
    const fetchCars = async () => {
      const carsResponse = await fetch(`/api/cars.json`)
      const carsResponseJson = await carsResponse.json()
      setCarItems(carsResponseJson)
    }
    fetchCars()
  }, [])

  return (
    <div>
      <Cars cars={carItems} />
    </div>
  )
}
export default MainPage
