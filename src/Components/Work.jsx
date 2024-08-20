import { motion } from "framer-motion";
import React from "react";

const Work = () => {
  return (
    <div className="w-full relative mt-32">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-10">
        <h1 className="text-6xl sm:text-[18rem] sm:leading-none sm:tracking-tight my-5">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{once : true}} // bar bar animate ni hoga jb ap neeche se scroll kroge
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
            }}
            className="inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>
        <div className="flex sm:gap-48">
          <div className="elems mt-10">
            <div className="elem mt-10">
              <div className="video w-full sm:w-[45rem] h-[104vw] sm:h-[45vw] relative overflow-hidden">
                <motion.img
                  initial = {{opacity: 1}}
                  whileHover={{opacity: 0}}
                  data-scroll
                  data-scroll-speed = ".2"
                  className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                  src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
                  alt="logo"
                />
                <video
                  autoPlay
                  muted
                  loop
                  className="block z-[1] sm:h-[40rem] w-full h-full scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Pixelflakes</h3>
                <p className="opacity-40">Architectural Marketing Agency</p>
              </div>
            </div>
          </div>
          <div>
            <div className="sm:mt-14">
              <div className="featured flex gap-3">
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                  data-v-669b4a84=""
                >
                  <path
                    d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                    fill="currentColor"
                    data-v-669b4a84=""
                  ></path>
                </svg>
                <h3 className="capitalize font-semibold">featured projects</h3>
              </div>
              <p className="leading-2 text-4xl mt-20">
                Highlights of cases that we passionately built with
                forward-thinking clients and friends over the years.
              </p>
            </div>
            <div className="elems sm:mt-60">
              <div className="elem mt-10">
                <div className="video w-full sm:w-[32rem] h-[104vw] sm:h-[32vw] relative overflow-hidden">
                  <motion.img
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0}}
                    data-scroll
                    data-scroll-speed = ".2"
                    className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                    src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                    alt="logo"
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block z-[1] sm:h-[25rem] w-full h-full scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Rino & Pelle</h3>
                  <p className="opacity-40">Effortless chic lifestyle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:gap-44 mt-36">
          <div className="sm:mt-[680px]">
            <div className="elems">
              <div className="elem mt-10">
                <div className="video w-full sm:w-[23rem] h-[104vw] sm:h-[23vw] relative overflow-hidden">
                  <motion.img
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0}}
                    data-scroll
                    data-scroll-speed = ".2"
                    className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                    src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                    alt="logo"
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block z-[1] sm:h-[17rem] w-full h-full scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Aebele Interiors</h3>
                  <p className="opacity-40">Luxurios design experience</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="elems mt-10">
              <div className="elem mt-10">
                <div className="video w-full sm:w-[45rem] h-[104vw] sm:h-[45vw] relative overflow-hidden">
                  <motion.img
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0}}
                    data-scroll
                    data-scroll-speed = ".2"
                    className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                    src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                    alt="logo"
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block z-[1] sm:w-[35rem] w-full h-full scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Columbia Pictures</h3>
                  <p className="opacity-40">Celebrating a Century of Cinema</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
