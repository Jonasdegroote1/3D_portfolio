import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { settings } from '../config';

gsap.registerPlugin(ScrollTrigger);
export default function Skills() {

  const ontwerpSoftwareRef = useRef(null);
  const dModelleringRef = useRef(null);
  const programmeertalenRef = useRef(null);
  
useEffect(() => {
  console.log('Animating titles...');
  gsap.to([ontwerpSoftwareRef.current, dModelleringRef.current, programmeertalenRef.current], {
    opacity: 1,
    duration: 1,
    x: 20,
    stagger: 0.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: ontwerpSoftwareRef.current,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}, []);


  return (
<section className="mb-8 ">
        <h2 className="text-2xl font-bold mb-4">My skills</h2>
        <p className="py-2">Mijn skillset weerspiegelt een veelzijdige combinatie van creatieve en technische competenties, waarbij ik bedreven ben in verschillende software en programmeertalen. Mijn vaardigheden omvatten:</p>
        
        <div className="flex flex-wrap gap-10">
          <div className="w-full md:w-1/3 opacity-0" ref={ontwerpSoftwareRef}>
            <h3 className="text-xl font-bold my-2">Ontwerpsoftware</h3>
            <div>
              <img src={`${settings.BASE_PATH}/images/ontwerp.jpg`} alt='Illustrator' className="inline-block w-24 h-24 mr-2" />
            </div>
          </div>

          <div className="w-full md:w-1/3 opacity-0" ref={dModelleringRef}>
            <h3 className="text-xl font-bold my-2">3D Modellering:</h3>
            <img src={`${settings.BASE_PATH}/images/autocad.png`} alt='Illustrator' className="inline-block w-24 h-24 mr-2" />
            <img src={`${settings.BASE_PATH}/images/blender.jpg`} alt='Illustrator' className="inline-block w-24 h-24 mr-2" />
            <img src={`${settings.BASE_PATH}/images/sketchup.jpg`} alt='Illustrator' className="inline-block w-24 h-24 mr-2" />
          </div>
        
          <div className="w-full md:w-1/3 opacity-0" ref={programmeertalenRef}>
            <h3 className="text-xl font-bold my-2">Programmeertalen:</h3>            
            <img src={`${settings.BASE_PATH}/images/html_css_js.png`} alt='Illustrator' className="inline-block w-24 h-24 mr-2" />
            <img src={`${settings.BASE_PATH}/images/php.png`} alt='Illustrator' className="inline-block w-24 h-24 mr-2" />
          </div>
        </div>
        <p className="py-2">Deze uitgebreide set vaardigheden weerspiegelt mijn toewijding aan het combineren van creativiteit en technologie om impactvolle digitale ervaringen te creëren.</p>
      </section>  )
}
