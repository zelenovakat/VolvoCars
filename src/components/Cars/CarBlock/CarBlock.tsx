import React from "react"
import Image from "next/image"
import { Text, Link, Flex, View, Spacer } from "vcc-ui"
import { CarBlockPropsType } from "./CarBlock.types"

function CarBlock({ car }: CarBlockPropsType) {
  return (
    <Flex extend={{ margin: "10px" }}>
      <Text extend={{ text: "bold" }}>{car.bodyType}</Text>
      <Flex extend={{ fromM: { flexDirection: "row" } }}>
        <Text subStyle="emphasis">{car.modelName} </Text>
        <Spacer size={{ default: 0, "@media (min-width: 768px)": 1 }} />
        <Text>{car.modelType}</Text>
      </Flex>
      <Spacer size={2} />
      <Image
        layout="responsive"
        objectFit="cover"
        alt={`Image for ${car.modelName}`}
        width="250"
        height="187"
        src={car.imageUrl}
      />
      <Spacer size={2} />
      <Flex extend={{ flexDirection: "row", justifyContent: "center" }}>
        <Link href={`/${car.id}/learn`} arrow="right">
          Learn
        </Link>
        <Spacer size={4} />
        <Link href={`/${car.id}/shop`} arrow="right">
          Shop
        </Link>
      </Flex>
    </Flex>
  )
}

export default CarBlock
