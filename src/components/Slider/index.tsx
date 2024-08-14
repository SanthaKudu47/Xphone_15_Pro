import { useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import { SlideData } from "../types/common";

let isDragging = false;

function getSlidesList(wrapper: HTMLDivElement) {
  const nodeCollection = wrapper.children;
  const slides: HTMLDivElement[] = [];
  for (let index = 0; index < nodeCollection.length; index++) {
    const element = nodeCollection[index];
    if (element.classList.contains("slide"))
      slides.push(element as HTMLDivElement);
  }

  return slides;
}

function initialize(wrapper: HTMLDivElement, slides: HTMLDivElement[]) {
  console.log(":init");
  const nodeCollection = wrapper.children;
  const slide = slides[0];
  const react = slide.getBoundingClientRect();
  const margin = (wrapper.clientWidth - react.width) / 2;

  for (let index = 0; index < nodeCollection.length; index++) {
    const element = nodeCollection[index];
    if (element.classList.contains("edge_blocks")) {
      const initBlock = element as HTMLDivElement;
      initBlock.style.setProperty("width", `${margin}px`);
    }
  }
}

function mouseDownHandler(event: globalThis.MouseEvent) {
  if (!event.currentTarget) return;
  if (!event.currentTarget) return;
  const wrapper = event.currentTarget as HTMLDivElement;
  isDragging = true;
  //remove class
  wrapper.classList.remove("scroll-smooth");
}

function mouseUpHandler(event: globalThis.MouseEvent) {
  if (!event.currentTarget) return;
  const wrapper = event.currentTarget as HTMLDivElement;
  isDragging = false;
  wrapper.classList.add("scroll-smooth");
  const slides = getSlidesList(wrapper);

  let selected = null;

  for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    const react = slide.getBoundingClientRect();

    let gap = react.left;
    gap = gap < 0 ? gap * -1 : gap;

    // console.log(
    //   gap,
    //   react.width / 2,
    //   react.left < 0 && gap < react.width / 2,
    //   slide
    // );

    if (react.left >= 0) {
      if (gap <= react.width / 2) {
        selected = slide;
        break;
      }
    } else {
      //passed
      if (Math.abs(react.left) < react.width) {
        const passedAmount = Math.abs(react.left);
        if (passedAmount > react.width / 2) {
          const nextSlide = document.getElementById(
            `slide_${Number(slide.id.split("_")[1]) + 1}`
          );

          selected = nextSlide;
          break;
        } else {
          selected = slide;
          break;
        }
      }
    }

    // if (gap < react.width / 2) {
    //   //  wrapper.scrollLeft = slide.offsetLeft - margin;
    //   console.log(slide);

    // } else {
    //   console.log("456", slide);
    // }
    // break;
  }

  if (!selected) return;
  const margin =
    (wrapper.clientWidth - selected.getBoundingClientRect().width) / 2;
  wrapper.scrollLeft = selected.offsetLeft - margin;
}

function mouseMoveHandler(event: globalThis.MouseEvent) {
  event.preventDefault();
  if (!event.currentTarget) return;
  const wrapper = event.currentTarget as HTMLDivElement;
  if (isDragging) {
    wrapper.scrollLeft -= event.movementX;
  }
}

export default function Slider({ data,activeSlide=1 }: { data: SlideData[];activeSlide:number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  //const [active, setActive] = useState<number>(1);
  const active = activeSlide;
  const maxSlides = data.length;

 

  useEffect(() => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    //get child elements
    const nodeCollection = wrapper.children;
    const slides: HTMLDivElement[] = [];

    for (let index = 0; index < nodeCollection.length; index++) {
      const element = nodeCollection[index];
      if (element.classList.contains("slide"))
        slides.push(element as HTMLDivElement);
    }

    initialize(wrapper, slides);
    //registering eventListers
    wrapper.addEventListener("mousemove", mouseMoveHandler);
    wrapper.addEventListener("mousedown", mouseDownHandler);
    wrapper.addEventListener("mouseup", mouseUpHandler);

    //check current
    const react = slides[active - 1].getBoundingClientRect();
    const margin = (wrapper.clientWidth - react.width) / 2;
    const activeSlideOffSet = slides[active - 1].offsetLeft;
    wrapper.scrollLeft = activeSlideOffSet - margin;

    return () => {
      wrapper.removeEventListener("mousemove", mouseMoveHandler);
      wrapper.removeEventListener("mousedown", mouseDownHandler);
      wrapper.removeEventListener("mousedown", mouseUpHandler);
    };
  }, [active]);

  return (
    <div className="flex flex-col justify-center w-full items-center">
      <div
        className="gap-10 overflow-hidden wrapper w-full flex flex-row scroll-smooth"
        ref={wrapperRef}
      >
        <div className="edge_blocks opacity-0 flex-shrink-0" />

        {data.map((element, index) => {
          return (
            <Slide id={`slide_${index + 1}`}>{element.slideElement}</Slide>
          );
        })}
        <div className="edge_blocks opacity-0 flex-shrink-0" />
      </div>

      {/* <button
        onClick={(e) => {
          setActive(active + 1);
        }}
      >
        Right
      </button>
      <button
        onClick={(e) => {
          setActive(active - 1);
        }}
      >
        Left
      </button> */}
    </div>
  );
}
