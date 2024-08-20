import p17 from "../../assets/svgs/p17pro.svg";
import video_small from "../../assets/videos/small_2x.mp4";
import video_medium from "../../assets/videos/medium_2x.mp4";
import video_large from "../../assets/videos/large_2x.mp4";
import phone_frame_small from "../../assets/images/xphone_frame_small.png";
import phone_frame_medium from "../../assets/images/xphone_frame_medium.png";
import phone_frame_large from "../../assets/images/xphone_frame_large.png";
import WidgetV4 from "../WidgetV4";
import { useRef } from "react";
import useInInView from "../../hooks/useInView";

export default function P17ProChip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewWidget = useInInView(ref, { threshold: "init", once: false });
  return (
    <div className="bg-black-400 w-full relative">
      <div className="absolute w-full h-1/2  bottom-0 z-0" ref={ref}></div>
      <div className="flex flex-col max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-xl px-4 sm:px-5 md:px-6 mx-auto">
        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mx-auto mt-[100px] mb-[60px]">
          <img src={p17} alt="p17pro_chip" />
        </div>
        <div className="font-base  text-white">
          <h4 className="text-[40px] sm:text-[64px] md:text-[70px] font-bold text-center leading-[45px] sm:leading-[60px] md:leading-[70px]">
            P17 Pro chip. <br />A monster win for gaming.
          </h4>

          <h5 className="text-title text-[21px] sm:text-[28px] font-bold my-8 sm:my-10 text-center md:hidden">
            It's here. The biggest <br />
            redesign in the history of <br /> XPhone GPUs.
          </h5>
          <h5 className="text-[35px] font-bold my-8 sm:my-10 text-center hidden md:block text-title">
            It's here. The biggest redesign in the history of XPhone GPUs.
          </h5>
        </div>
        <div className="sm:hidden my-5">
          <div className="flex flex-col justify-center items-center">
            <img className="absolute" src={phone_frame_small} alt="" />
            <video
              className=""
              autoPlay={true}
              muted
              src={video_small}
              width={319}
              height={157}
            />
          </div>
        </div>

        <div className="hidden sm:block lg:hidden my-5">
          <div className="flex flex-col justify-center items-center">
            <img className="absolute" src={phone_frame_medium} alt="" />
            <video
              className=""
              autoPlay={true}
              muted
              src={video_medium}
              width={696}
              height={342}
            />
          </div>
        </div>

        <div className="hidden lg:block my-5">
          <div className="flex flex-col justify-center items-center">
            <img className="absolute" src={phone_frame_large} alt="" />
            <video
              className=""
              autoPlay={true}
              muted
              src={video_large}
              width={1054}
              height={517}
            />
          </div>
        </div>

        <div className="my-8">
          <h5 className="font-base text-title text-[20px] font-bold text-center">
            Honkai: Star Rail
          </h5>
        </div>

        <div className="grid grid-flow-row sm:grid-flow-col gap-x-5 lg:gap-x-2 mx-1 sm:mx-5 lg:mx-16">
          <div className="grid-cols-1 font-base font-bold text-[19px] text-white mx-auto w-[300px] text-left">
            <p>
              <span className="text-title">
                A17 Pro is an entirely new class of iPhone chip that delivers
                our &nbsp;
              </span>
              best graphics performance by far.
            </p>
            <p>
              <br />
              <span className="text-title">Mobile</span> games will look and
              feel so immersive
              <span className="text-title">
                , with incredibly detailed environments and more realistic
                characters. And with industry-leading speed and efficiency, A17
                Pro takes fast and runs with it.
              </span>
            </p>
          </div>
          <div className="grid-cols-1 font-base font-bold w-[300px] mx-auto">
            <h5 className="block text-title text-[21px]">New</h5>
            <h2 className="text-white text-[40px]">Pro-class GPU</h2>
            <h5 className="block text-title text-[21px]">with 6 cores </h5>
          </div>
        </div>
      </div>
      <div className="z-40 w-full   bottom-0 sticky mx-auto flex justify-center items-center py-[100px]">
        <WidgetV4 isInView={isInViewWidget} text="Go deeper on X17 Pro" />
      </div>
    </div>
  );
}
