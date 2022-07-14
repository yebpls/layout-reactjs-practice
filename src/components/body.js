import React, { Component } from "react"
import Banner from "./banner"
import Features from "./features"

export class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Features />
      </div>
    )
  }
}

export default Body
