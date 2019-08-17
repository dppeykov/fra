import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import GreetingText from "../components/GreetingText/GreetingText";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognitionBox from "../components/FaceRecognitionBox/FaceRecognitionBox";

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <GreetingText />
        <Rank />
        <ImageLinkForm />
        <FaceRecognitionBox />
      </>
    );
  }
}
