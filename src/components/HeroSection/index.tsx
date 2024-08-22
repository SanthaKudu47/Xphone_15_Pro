import Container from "../Container";
import HeroArtWork from "../HeroArtWork";

import { useState } from "react";
import HeroArtWorkStatic from "../HeroArtWork/HeroArtWorkStatic";

import "./styles.css";
import Header from "./Header";
import ButtonAndText from "./ButtonAndText";

export default function Hero() {
  const [isAnimationDone, setAnimationDone] = useState(false);

  function animationDone() {
    setAnimationDone(true);
  }

  return (
    <div className="bg-black">
      <Container size="lg" customStylesCls="h-screen">
        <div className="flex flex-col items-center w-full relative justify-center">
          <div className="w-full flex flex-col items-center mx-auto">
            <Header isAnimationDone={isAnimationDone} size="lg" />
            <div className="w-full px-20">
              {isAnimationDone ? (
                <HeroArtWorkStatic size="lg" />
              ) : (
                <HeroArtWork size="lg" fn={animationDone} />
              )}
            </div>
          </div>

          <div className="absolute bottom-0 w-full flex flex-col items-center">
            <ButtonAndText isAnimationDone={isAnimationDone} size="lg" />
          </div>
        </div>
      </Container>

      <Container size="md" customStylesCls="h-screen">
        <div className="flex flex-col items-center w-full relative justify-center">
          <div className="w-full flex flex-col items-center mx-auto">
            <Header isAnimationDone={isAnimationDone} size="md" />
            <div className="w-full px-20">
              {isAnimationDone ? (
                <HeroArtWorkStatic size="md" />
              ) : (
                <HeroArtWork size="md" fn={animationDone} />
              )}
            </div>
          </div>

          <div className="absolute bottom-0 w-full flex flex-col items-center">
            <ButtonAndText isAnimationDone={isAnimationDone} size="md" />
          </div>
        </div>
      </Container>

      <Container size="sm" customStylesCls="h-screen">
        <div className="flex flex-col items-center w-full">
          <Header isAnimationDone={isAnimationDone} size="sm" />
          {isAnimationDone ? (
            <HeroArtWorkStatic size="md" />
          ) : (
            <HeroArtWork size="md" fn={animationDone} />
          )}
          <ButtonAndText isAnimationDone={isAnimationDone} size="sm" />
        </div>
      </Container>
    </div>
  );
}
