import gsap, { Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const News = () => {
  const first = useRef(null)
  const second = useRef(null)
  const third = useRef(null)
  const fourth = useRef(null)
  const parent = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1
      }
    });
    tl.to(first.current, {
      x : "40%",
      ease: Linear
    }, 'a')
    .to(third.current, {
      x : "-40%",
      ease: Linear
    }, 'a')
    .to(second.current, {
      x : "-40%",
      ease: Linear
    }, 'a')
    .to(fourth.current, {
      x : "40%",
      ease: Linear
    }, 'a')
  })
  return (
    <div ref = {parent} className="w-full h-[70vh] sm:h-[140vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] h-1/2 relative">
        <div ref = {first} className="absolute w-20 h-[7rem] sm:w-[13rem] sm:h-[18rem] -right-1/3 top-6 sm:top-[4rem] sm:-right-[3%] sm:z-50">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt="logo"
          />
        </div>
        <div ref = {second} className="absolute w-[8rem] aspect-video -left-1/2 top-1/3 overflow-hidden sm:w-[25rem] sm:h-[15rem] sm:-left-[25%] sm:z-50 sm:mt-14">
          <video
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div ref = {third} className="absolute w-[6rem] aspect-video -left-[50%] -bottom-10 sm:w-[27rem] sm:h-[18rem] sm:-left-[38%] sm:z-50 sm:top-[40rem]">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt="logo"
          />
        </div>
        <div ref = {fourth} className="absolute w-[10rem] aspect-[1.5/1] -right-[70%] -bottom-[35%] overflow-hidden sm:w-[27rem] sm:h-[27rem] sm:-bottom-[28rem] sm:-right-[32%] sm:z-50">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          />
        </div>
        <img
          className="w-full h-full object-cover sm:w-[30rem] sm:h-[45rem] sm:absolute sm:left-32"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default News;
