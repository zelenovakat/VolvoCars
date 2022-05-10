import React from "react"
import { Block, Link, Spacer, Text, View } from "vcc-ui"

export default function ComingSoon() {
  return (
    <View>
      <Block extend={{ textAlign: "center", margin: "20px" }}>
        <Text variant="hillary" subStyle="emphasis">
          Coming soon stay tuned
        </Text>
      </Block>
      <Spacer />
      <Block extend={{ textAlign: "center" }}>
        <Link href="/" arrow="left">
          Go back to the main page
        </Link>
      </Block>
    </View>
  )
}
