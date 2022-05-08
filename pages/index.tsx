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
      <div>
        <Cars cars={carItems} />
      </div>
    </div>
  )
}
export default MainPage
