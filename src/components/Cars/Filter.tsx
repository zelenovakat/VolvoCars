import React from "react"
import { Flex, TabNav, TabNavItem } from "vcc-ui"
import { FilterPropsType } from "./Filter.types"

export default function Filter({ setBodyTypeFilter, bodyTypeFilter }: FilterPropsType) {
  const selectBodyType = (value: string) => {
    setBodyTypeFilter(value)
  }
  return (
    <Flex extend={{ flexDirection: "row", justifyContent: "center" }}>
      <TabNav>
        <TabNavItem
          isActive={bodyTypeFilter === ""}
          onClick={() => {
            selectBodyType("")
          }}>
          All
        </TabNavItem>
        <TabNavItem
          isActive={bodyTypeFilter === "suv"}
          onClick={() => {
            selectBodyType("suv")
          }}>
          Suv
        </TabNavItem>
        <TabNavItem
          isActive={bodyTypeFilter === "estate"}
          onClick={() => {
            selectBodyType("estate")
          }}>
          Estate
        </TabNavItem>
        <TabNavItem
          isActive={bodyTypeFilter === "sedan"}
          onClick={() => {
            selectBodyType("sedan")
          }}>
          Sedan
        </TabNavItem>
      </TabNav>
    </Flex>
  )
}
