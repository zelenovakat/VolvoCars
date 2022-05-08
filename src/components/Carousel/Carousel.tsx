import React, { useCallback, useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"
import { Flex, IconButton, Click, View, Block, Spacer } from "vcc-ui"
import type { CarouselItemProps, CarouselProps } from "./Carousel.types"

function Carousel({ children, autoScrollInterval }: CarouselProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const childrenCount = React.Children.count(children)

  const updateIndex = useCallback(
    (newIndex: number) => {
      let index = newIndex
      if (index < 0) {
        index = childrenCount - 1
      } else if (index >= childrenCount) {
        index = 0
      }

      setActiveIndex(index)
    },
    [childrenCount]
  )

  const scrollForward = useCallback(() => {
    if (activeIndex < childrenCount - 1) {
      updateIndex(activeIndex + 1)
    }
  }, [activeIndex, updateIndex, childrenCount])

  const scrollBack = useCallback(() => {
    if (activeIndex > 0) {
      updateIndex(activeIndex - 1)
    }
  }, [activeIndex, updateIndex])

  useEffect(() => {
    const interval =
      autoScrollInterval &&
      setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1)
        }
      }, autoScrollInterval)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [activeIndex, autoScrollInterval, paused, updateIndex])
  useEffect(() => {
    updateIndex(0)
  }, [children, updateIndex])

  const handlers = useSwipeable({
    onSwipedLeft: () => activeIndex < childrenCount - 1 && updateIndex(activeIndex + 1),
    onSwipedRight: () => activeIndex > 0 && updateIndex(activeIndex - 1),
  })

  return (
    <Block
      extend={{ overflow: "hidden", width: "100%" }}
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <View
        direction="row"
        extend={{
          transition: "transform 0.3s",
          transform: `translateX(-${activeIndex * 80}%)`,
          fromM: {
            transform: `translateX(-${activeIndex * 100}%)`,
          },
        }}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as JSX.Element)
        })}
      </View>

      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "flex-end",
          display: "none",
          fromM: { display: "flex" },
          marginRight: "10px",
        }}>
        <IconButton
          onClick={scrollBack}
          aria-label="Slide back"
          iconName="navigation-chevronback"
          variant="outline"
        />
        <Spacer />
        <IconButton
          onClick={scrollForward}
          aria-label="Slide forward"
          iconName="navigation-chevronforward"
          variant="outline"
        />
      </Flex>

      <Flex extend={{ justifyContent: "center", flexDirection: "row", fromM: { display: "none" } }}>
        {React.Children.map(children, (child, index) => {
          const isActive = activeIndex === index
          return (
            <Click
              extend={({ theme }) => ({
                border: 0,
                borderRadius: "100%",
                height: "10px",
                width: "10px",
                padding: "0",
                margin: "8px",
                display: "block",
                backgroundColor: isActive
                  ? theme.color.foreground.primary
                  : theme.color.ornament.divider,
              })}
              onClick={() => {
                updateIndex(index)
              }}
            />
          )
        })}
      </Flex>
    </Block>
  )
}

export function CarouselItem({ children }: CarouselItemProps): JSX.Element {
  return (
    <Flex extend={{ flexShrink: 0, alignItems: "center", width: "80%", fromM: { width: "25%" } }}>
      {children}
    </Flex>
  )
}

export default Carousel
