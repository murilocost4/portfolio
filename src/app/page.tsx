"use client";

import { Timeline } from "./components/Timeline";
import { Skill } from "./components/Skills";
import Image from "next/image";
import vaievem from './assets/1.png'
import { Carousel } from "flowbite-react";

import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  const aosInit = AOS.init({
    duration: 1200,
    offset: 200,
    easing: 'ease-in-sine',
    delay: 100,
  });
    useEffect(() => {
      aosInit
    })


  return (
    <main className="font-sans">
      <div className="bg-gray-950">
      <div className="bg-gray-950 w-full h-full pt-60 pb-20 text-center flex-col items-center justify-center" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">
        <h1 className="text-slate-300 text-7xl">Hi, i'm <span className="bg-gradient-to-r from-emerald-300 to-violet-500 text-transparent bg-clip-text">Murilo Costa</span></h1>
        <p className="text-gray-500 text-5xl mt-7">a developer</p>
        <div className="mt-20 flex justify-center gap-52 mb-48">
          <a href="#aboutme" className="scroll-smooth"><button className="bg-none outline-0 text-3xl text-slate-400 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-violet-500 hover:text-transparent hover:font-medium hover:bg-clip-text transition-all duration-500">about</button></a>
          <a href="#projects"><button className="bg-none outline-0 text-3xl text-slate-400 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-violet-500 hover:text-transparent hover:font-medium hover:bg-clip-text transition-all duration-500">work</button></a>
          <a href="#contact"><button className="bg-none outline-0 text-3xl text-slate-400 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-violet-500 hover:text-transparent hover:font-medium hover:bg-clip-text transition-all duration-500">contact</button></a>
        </div>
      </div>
      </div>
      
      <div id="aboutme" className="bg-violet-950 pb-64 w-full h-full">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='#030712'><path d='M0 0v4c136 143.8 183.8-73.2 297 26.6 72.2 63.7 97 99 184.7 33.2a30.5 30.5 0 0 1 36.6 0c87.6 65.8 112.5 30.5 184.7-33.2C816.2-69.2 864 147.7 1000 4V0H0Z'></path></svg>
        <div className="text-center m-auto flex-col w-2/5 mt-64" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">
          <p className="font-bold text-slate-50 text-4xl">About me</p>
          <p className="font-medium text-slate-300 text-xl mt-4">Student of the Computer Technician Course at IFSUL (Instituto Federal Sul-Riograndense) Venâncio-Aires Campus, with experience in the IT area and Customer Support.</p>
        </div>
      </div>

      <div className="bg-emerald-300 pb-64 w-full h-full">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='#2e1065'><path d='M0 0v4l250 64 125-32 250 64 375-96V0H0z'></path></svg>
        <div className="mt-52 flex items-center justify-center flex-col">
          <p className="text-center font-bold text-slate-700 text-4xl mb-20" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">Experience</p>
          <div className="flex gap-14">
            <Timeline title="Young Apprentice" date="2019-2021" text="Activities: Organization of Files and Documents, System Registration, IT Support." data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250"/>
            <Timeline title="I.T. Assistant" date="2021-2024" text="Activities: Customer Support, IT Support, and Administrative Support." data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250"/>
            <Timeline title="I.T. Technician" date="Current" text="Activities: Web Development, Software Development." data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250"/>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 pb-64 w-full h-full">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='#6EE7B7'><path d='M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z'></path></svg>
        <div>

          <div className="flex  mt-40 justify-evenly">

            <div className="flex-col justify-center text-center">
              <p className="text-4xl font-bold text-slate-100 mb-12" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">Soft Skills</p>
              <div className="grid grid-cols-2 gap-5" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">
                <Skill color={1} title="time management">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-8 stroke-emerald-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </Skill>
                <Skill color={1} title="organization">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28" className="size-8 fill-emerald-500"><path d="M14 1.998a4.25 4.25 0 0 0-.75 8.434V13.5h-4.5a2.25 2.25 0 0 0-2.25 2.25v1.816a4.251 4.251 0 1 0 1.5 0V15.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v1.816a4.251 4.251 0 1 0 1.5 0V15.75a2.25 2.25 0 0 0-2.25-2.25h-4.5v-3.068A4.251 4.251 0 0 0 14 1.998m-2.75 4.25a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M4.5 21.75a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M20.75 19a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5"/></svg>
                </Skill>
                <Skill color={1} title="communication">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" className="size-8 fill-emerald-500"><g fillRule="evenodd" clipRule="evenodd"><path d="M26 33h3.5C36.404 33 42 27.404 42 20.5S36.404 8 29.5 8h-11C11.596 8 6 13.596 6 20.5c0 7.915 5.217 12.754 10.924 15.726c2.835 1.477 5.69 2.43 7.849 3.015q.665.18 1.227.313zm2 9s-.756-.11-2-.392C20.236 40.3 4 35.305 4 20.5C4 12.492 10.492 6 18.5 6h11C37.508 6 44 12.492 44 20.5S37.508 35 29.5 35H28z"/><path d="M24 22a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m8-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-16-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
                </Skill>
                <Skill color={1} title="teamwork">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048" className="size-8 fill-emerald-500"><path d="M1664 1088q66 0 124 25t102 68t69 102t25 125q0 52-16 101t-48 91v424l-256-128l-256 128v-424q-31-42-47-91t-17-101q0-66 25-124t68-102t102-69t125-25m0 128q-40 0-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15m128 250v-115q-60 27-128 27t-128-27v115l128-64zM1664 512q-53 0-99 20t-82 55t-55 81t-20 100q0 92-41 173t-116 137q19 9 36 20t35 23l-75 104q-49-35-106-54t-117-19q-80 0-149 30t-122 82t-83 123t-30 149H512q0-73 20-141t57-128t89-108t118-82q-74-55-115-136t-41-173q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100H0q0-52 14-101t39-93t62-80t83-62q-33-35-51-81t-19-95q0-53 20-99t55-82t81-55T384 0q53 0 99 20t82 55t55 81t20 100q0 49-18 95t-52 81q82 45 134 124q27-40 62-72t76-54t87-34t95-12q48 0 94 12t87 34t77 54t62 72q52-79 134-124q-33-35-51-81t-19-95q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100q0 49-18 95t-52 81q46 26 82 62t62 79t40 93t14 102h-128q0-53-20-99t-55-82t-81-55t-100-20m-128-256q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50m-1280 0q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50m512 512q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100"/></svg>
                </Skill>
                <Skill color={1} title="problem solving">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-8 fill-emerald-500"><path fillRule="evenodd" d="m11.998 4.4l-8.92 15.454l17.843-.001zM2.732 21.054a1 1 0 0 1-.866-1.5L11.132 3.5a1 1 0 0 1 1.732 0l9.27 16.053a1 1 0 0 1-.866 1.5zm8.64-11.1h1.255l-.097 4.722h-1.06l-.097-4.722zm.626 7.144a.696.696 0 0 1-.708-.694c0-.385.312-.688.708-.688c.4 0 .712.303.712.688a.697.697 0 0 1-.712.694"/></svg>
                </Skill>
                <Skill color={1} title="creativity">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="size-8 fill-emerald-500"><path d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03q-.495.004-1 .064h-.03c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.24 5.24 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.8 7.8 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a7 7 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z"/></svg>
                </Skill>
              </div>
            </div>

            <div className="flex-col justify-center text-center">
              <p className="text-4xl font-bold text-slate-100 mb-12" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">Soft Skills</p>
              <div className="grid grid-cols-2 gap-5" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">
                <Skill color={2} title="javascript">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" className="size-8 stroke-violet-500 stroke-1"><path d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5z"/></svg>
                </Skill>
                <Skill color={2} title="java">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-8 fill-violet-500"><path d="m15.638 4.566l.056.032c-.758.4-2.924 1.69-2.924 3.332c0 .554.317 1.088.614 1.59c.262.442.509.858.509 1.238c0 .957-.933 1.7-1.46 2.042l-.1-.058c.199-.243.444-.65.444-1.084c0-.598-.307-1.076-.618-1.561c-.322-.501-.648-1.01-.648-1.67c0-2.292 3.115-3.522 4.127-3.861m-4.095 1.212c1.253-1.12 2.622-2.344 2.622-4.185c0-.833-.341-1.365-.51-1.578L13.6.046c.04.166.1.472.1.872c0 1.676-1.422 2.85-2.798 3.988C9.611 5.974 8.36 7.008 8.36 8.392c0 1.985 1.958 3.206 2.785 3.722l.063.04l.05-.03q-.067-.074-.142-.152c-.636-.677-1.602-1.704-1.602-3.275c0-1.103.974-1.974 2.03-2.919m-.452 9.908c1.764 0 2.998-.253 3.546-.408l.832.48c-.793.403-2.551.71-4.382.71c-2.153 0-4.507-.462-4.514-1.078c-.005-.34.765-.566 1.595-.712l.05.029s-.281.101-.278.333c.004.35 1.42.646 3.15.646m-3.529 2.171c0-.407.839-.6 1.223-.677l.05.03c-.066.049-.102.116-.102.173c0 .267.93.511 2.356.511c1.278 0 1.988-.157 2.41-.258l.99.573c-.045.032-1.02.645-3.402.645c-1.731 0-3.525-.432-3.525-.997m8.529-1.728c1.18-.673 2.361-1.469 2.428-2.747c.044-.839-.727-1.454-1.57-1.29l.045-.112v-.002c.212-.064.474-.116.767-.116c.943 0 1.666.565 1.758 1.356c.186 1.586-2.062 2.618-3.321 2.973zm1.975 2.988c.01 1.09-3.698 1.738-7.012 1.767c-2.861.025-7.474-.515-7.484-1.605c-.006-.753 2-1.274 3.09-1.424l.115.065s-1.625.377-1.62 1.062c.006.683 3.425 1.274 5.894 1.253c3.825-.034 6.414-.657 6.72-1.502l.054-.031c.112.082.24.217.243.415M6.43 21.337a26 26 0 0 0 4.279.325c6.208-.054 7.96-1.58 8.23-1.912l.047.028c-.064 1.208-3.347 2.212-7.396 2.247c-2.061.018-3.937-.22-5.285-.615zm2.602-9.283c-1.079.083-3.396.426-3.396 1.036c0 .462 2.124 1.113 5.452 1.113c2.994 0 4.884-.565 5.325-.78l-.643-.375c-.46.125-2.169.506-4.682.506c-1.48 0-4.03-.273-4.03-.69c0-.374 1.591-.662 2.048-.745l.029-.005z"/></svg>
                </Skill>
                <Skill color={2} title="tailwind">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-8 fill-violet-500"><path d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/></svg>
                </Skill>
                <Skill color={2} title="react">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="size-8 fill-violet-500"><path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854s2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854m-7.99 8.526l-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156l.177.625a31.4 31.4 0 0 0 1.818 4.771l.135.281l-.135.286a31 31 0 0 0-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33 33 0 0 1 1.578-4.063a33 33 0 0 1-1.578-4.063m16.901 9.74l-.177-.625a31 31 0 0 0-1.818-4.766l-.135-.286l.135-.286a31 31 0 0 0 1.818-4.771l.177-.62l.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.5 32.5 0 0 1 1.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a34 34 0 0 1-1.578 4.063M7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464l-.453.464a31.5 31.5 0 0 0-3.229 3.958l-.182.255l-.313.026a31.6 31.6 0 0 0-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229c-1.323.766-1.557 3.422-.646 7.005a33 33 0 0 1 4.313-.672a33 33 0 0 1 2.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145q-.008 0 0 0c-1.901 0-4.344-1.427-6.875-4.031l-.453-.464l.453-.464a31.5 31.5 0 0 0 3.229-3.958l.177-.255l.313-.031a30.7 30.7 0 0 0 5.052-.813l.63-.156l.177.625c1.318 4.646.917 7.974-1.099 9.135a3.1 3.1 0 0 1-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229c1.323-.766 1.563-3.422.646-7.005a33 33 0 0 1-4.313.667a33 33 0 0 1-2.734 3.396zm7.99-13.802l-.63-.161a32 32 0 0 0-5.052-.813l-.313-.026l-.177-.255a31.5 31.5 0 0 0-3.229-3.958l-.453-.464l.453-.464c3.328-3.417 6.5-4.766 8.479-3.625c2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33 33 0 0 1 4.313.672c.917-3.583.677-6.24-.646-7.005c-1.318-.76-3.797.406-6.401 2.943a34 34 0 0 1 2.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411c-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625l.63.156c1.542.391 3.24.661 5.047.813l.313.031l.177.255a31.5 31.5 0 0 0 3.229 3.958l.453.464l-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005c1.318.75 3.792-.406 6.401-2.943a33 33 0 0 1-2.734-3.396a32.5 32.5 0 0 1-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026l-.182-.26a40 40 0 0 1-1.797-2.828a40 40 0 0 1-1.557-2.969l-.135-.286l.135-.286a40.5 40.5 0 0 1 3.354-5.797l.182-.26l.313-.026a40 40 0 0 1 6.708 0l.313.026l.182.26a40 40 0 0 1 3.354 5.797l.135.286l-.135.286a39.6 39.6 0 0 1-3.354 5.797l-.182.26l-.313.026a41 41 0 0 1-3.354.141m-2.927-1.448c1.969.151 3.885.151 5.859 0a39 39 0 0 0 2.927-5.063a37.5 37.5 0 0 0-2.932-5.063a38 38 0 0 0-5.854 0a37 37 0 0 0-2.932 5.063a38.6 38.6 0 0 0 2.932 5.063"/></svg>
                </Skill>
                <Skill color={2} title="node">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-8 fill-violet-500"><path d="M11.899 24c-.322 0-.64-.084-.923-.247l-2.935-1.738c-.439-.245-.225-.332-.08-.382c.584-.204.703-.25 1.327-.605c.066-.037.152-.024.219.015l2.255 1.339a.3.3 0 0 0 .273 0l8.794-5.077a.28.28 0 0 0 .134-.237V6.919a.28.28 0 0 0-.136-.242l-8.79-5.072a.27.27 0 0 0-.271 0l-8.79 5.072a.28.28 0 0 0-.139.24v10.148c0 .097.053.19.137.236l2.408 1.391c1.308.654 2.107-.116 2.107-.891V7.785a.25.25 0 0 1 .255-.254h1.114c.139 0 .253.11.253.254v10.02c0 1.744-.95 2.745-2.604 2.745c-.509 0-.91 0-2.028-.55l-2.307-1.33a1.86 1.86 0 0 1-.922-1.605V6.917c0-.66.352-1.277.922-1.602L10.976.236a1.93 1.93 0 0 1 1.849 0l8.792 5.08c.568.329.922.943.922 1.603v10.149a1.86 1.86 0 0 1-.922 1.602l-8.792 5.079a1.85 1.85 0 0 1-.927.246zm2.716-6.993c-3.848 0-4.654-1.766-4.654-3.248c0-.14.113-.253.254-.253h1.136c.126 0 .231.091.251.215c.172 1.158.683 1.742 3.01 1.742c1.853 0 2.641-.419 2.641-1.402c0-.566-.225-.986-3.104-1.268c-2.408-.238-3.896-.768-3.896-2.694c0-1.775 1.497-2.831 4.004-2.831c2.815 0 4.211.977 4.387 3.077a.256.256 0 0 1-.255.278h-1.143a.25.25 0 0 1-.246-.199c-.275-1.217-.94-1.607-2.747-1.607c-2.023 0-2.259.705-2.259 1.233c0 .64.277.828 3.007 1.189c2.703.359 3.987.865 3.987 2.765c0 1.915-1.599 3.014-4.385 3.014z"/></svg>
                </Skill>
                <Skill color={2} title="mysql">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-8 fill-violet-500"><path d="m24.129 23.412l-.508-.484a6.7 6.7 0 0 0-.809-.891l-.005-.004q-.448-.407-.931-.774q-.387-.266-1.064-.641a1.6 1.6 0 0 1-.818-.824l-.004-.01l-.048-.024c.212-.021.406-.06.592-.115l-.023.006l.57-.157c.236-.074.509-.122.792-.133h.006q.446-.02.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496a2.6 2.6 0 0 0-.443-.468l-.005-.004q-.629-.556-1.303-1.076a16 16 0 0 0-1.311-.916l-.068-.04a5 5 0 0 0-.825-.435l-.034-.012q-.448-.182-.883-.399a1.6 1.6 0 0 0-.327-.119l-.011-.002a.5.5 0 0 1-.29-.169l-.001-.001a3 3 0 0 1-.355-.609l-.008-.02q-.145-.339-.314-.651q-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967a5.4 5.4 0 0 0-.461-.942l.013.023a17 17 0 0 0-1.331-1.961l.028.038a14.6 14.6 0 0 0-1.459-1.59l-.008-.007a18 18 0 0 0-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282a3.7 3.7 0 0 0-.965-.393l-.026-.006l-1.113-.278l-.629-.048q-.314-.024-.629-.024a1.7 1.7 0 0 1-.387-.279a4 4 0 0 0-.353-.295l-.01-.007a11.7 11.7 0 0 0-2.043-.93L2.071.18A1.36 1.36 0 0 0 .9.096L.909.093a1.36 1.36 0 0 0-.795.84l-.003.01a1.52 1.52 0 0 0 .232 1.549l-.002-.003q.544.725.834 1.14q.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448q.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52T3.738 9a.9.9 0 0 0 .241.242l.003.002a.4.4 0 0 1 .169.313v.001a1.3 1.3 0 0 0-.217.586l-.001.006a4 4 0 0 1-.153.695l.008-.03a7.1 7.1 0 0 0-.351 2.231q0 .387.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787a.914.914 0 0 0 1.106.203l-.005.002a.93.93 0 0 0 .617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067a.6.6 0 0 0 .038-.211l-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003a7.7 7.7 0 0 0 1.127 1.001l.022.015q.316.242.566.528l.004.004q.239.28.56.454l.01.005v-.024h.048a.46.46 0 0 0-.18-.205l-.002-.001a2 2 0 0 1-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798a1 1 0 0 1-.096-.334v-.005a.32.32 0 0 0-.168-.265l-.002-.001a3 3 0 0 1-.408.545l.001-.001a2 2 0 0 0-.382.58l-.005.013a4.3 4.3 0 0 0-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024l-.024.024a.86.86 0 0 1-.59-.443l-.002-.005q-.182-.351-.326-.69a6.5 6.5 0 0 1-.423-2.144v-.009a6.2 6.2 0 0 1 .286-2.318l-.012.044q.072-.266.314-.896t.097-.871a.9.9 0 0 0-.265-.41l-.001-.001a3 3 0 0 1-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544a11 11 0 0 1-.474-1.353l-.022-.089a10 10 0 0 0-.546-1.503l.026.064a3.3 3.3 0 0 0-.39-.669l.006.008q-.244-.326-.436-.617q-.244-.314-.484-.605a3.4 3.4 0 0 1-.426-.657l-.009-.02a1.6 1.6 0 0 1-.119-.327l-.002-.011a.4.4 0 0 1 .049-.34l-.001.002a.3.3 0 0 1 .073-.145a.3.3 0 0 1 .143-.072h.002a.55.55 0 0 1 .536-.035l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085a5 5 0 0 1 .234.536l.011.033q.097.278.217.57q.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57q.194.145.651.423t.484.52a11 11 0 0 0-1.834.087l.056-.006a6 6 0 0 0-1.479.39l.04-.014a2.6 2.6 0 0 1-.388.129l-.019.004a.31.31 0 0 0-.266.277v.001q.093.115.143.26l.002.006q.05.151.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005q.212.26.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399q.11.108.191.239l.003.005a.57.57 0 0 0 .36.193h.003v-.048a.5.5 0 0 1-.184-.267l-.001-.004a1 1 0 0 0-.112-.273l.002.004zM5.553 4.207q-.194 0-.363.012a1.3 1.3 0 0 0-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798l.048-.024a.74.74 0 0 0 .252-.321l.002-.005c.052-.139.082-.301.082-.469l-.001-.054v.003a.5.5 0 0 1-.108-.154l-.001-.003l-.081-.182a.5.5 0 0 0-.214-.192l-.003-.001a1 1 0 0 1-.244-.169"/></svg>
                </Skill>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-950">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='#030712'><path d='M0 0v80l227.5 18c12.1 1 22.5-8.6 22.5-20.7s10.4-21.8 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8s10.4-21.7 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8S760.4 5 772.5 6L1000 24V0H0Z'></path></svg>
        <div id="projects" className="text-center flex-col p-40 bg-violet-950" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">

        <p className="text-4xl font-bold text-slate-100 mb-12">Projects</p>
        
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10">
            <Carousel>
              <div className="flex-col items-center h-full justify-center w-96 dark:bg-gray-700 dark:text-white">
                <Image src={vaievem} width={80} height={80} alt="" className="m-auto mb-6 mt-12"></Image>
                <p className="font-medium text-slate-50 text-2xl">vai e vem</p>
                <p className="font-normal text-slate-200 text-lg mt-10 text-wrap">Sistema para gerenciamento de transporte escolar e universitário</p>
              </div>
              <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                Slide 2
              </div>
              <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                Slide 3
              </div>
            </Carousel>
          </div>

        </div>
      </div>

      <div className="bg-emerald-300">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='#2e1065'><path d='M0 0v36L250 4l750 96V0H0z'></path></svg>

        <div id="contact" className="text-center p-32" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="250">
          <p className="text-4xl font-bold text-slate-700 mb-12 mt-8">Socials</p>
          <div className="flex justify-center mt-28 mb-12">
            
              <div className="flex-col">

                <a href="" className="flex gap-8 items-center hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-12">
                    <path fill="#0f172a" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                  </svg>
                  <p className="text-3xl text-slate-900">+55 (51) 98939-5885</p>
                </a>

                <a href="" className="flex gap-8 items-center mt-8 hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-12">
                    <g fill="none" stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#0f172a">
                      <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                      <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
                    </g>
                  </svg>
                  <p className="text-3xl text-slate-900">@murilocost4</p>
                </a>

                <a href="" className="flex gap-8 items-center mt-8 hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-12">
                    <path fill="#0f172a" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                  </svg>
                  <p className="text-3xl text-slate-900">murilocost4</p>
                </a>

                <a href="" className="flex gap-8 items-center mt-8 hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" className="size-12">
                    <path fill="#0f172a" d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91c-1.182 0-1.886.796-2.195 1.565c-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126c2.815 0 4.926 1.84 4.926 5.792M2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254z" />
                  </svg>  
                  <p className="text-3xl text-slate-900">/murilocoimbracosta</p>
                </a>
              
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
