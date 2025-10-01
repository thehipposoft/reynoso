'use client'
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react'

const Counter = () => {
  const counterSectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [dashboards, setDashboards] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    });

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      intervalId = setInterval(() => {
        setCompletedProjects(prevCount => {
          if (prevCount >= 123) {
            clearInterval(intervalId);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isInView]);


  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      intervalId = setInterval(() => {
        setHappyClients(prevCount => {
          if (prevCount >= 90) {
            clearInterval(intervalId);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isInView]);


  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      console.log("Counter is in view");

      intervalId = setInterval(() => {
        setDashboards(prevCount => {
          if (prevCount >= 1800) {
            clearInterval(intervalId);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 5);
    }

    return () => clearInterval(intervalId);
  }, [isInView]);

  return (
    <div className='flex items-center' ref={counterSectionRef}>
      <div className='flex flex-col md:flex-row md:gap-4 gap-12 items-center md:justify-around w-full'>
        <div className='flex items-center md:h-auto md:w-auto h-[150px] w-[130px]'>
            <div className='flex justify-center items-center border-6 border-primary-green rounded-full w-24 h-24'>
              <p className='text-title-color font-extrabold text-xl md:pl-4 md:w-[100px] md:pt-0 pt-2'>{`+${completedProjects}`}</p>
            </div>
            <p className='text-title-color  pt-3 text-center md:text-left'>Completed projects</p>
        </div>
{/*         <div className='flex flex-col md:h-auto md:w-auto h-[150px] w-[130px]'>
            <div className='flex flex-col md:flex-row items-center'>
              <p className='text-title-color font-extrabold text-4xl md:pl-4 md:w-[100px] md:pt-0 pt-2'>{`+${happyClients}`}</p>
              </div>
            <p className='text-title-color  pt-3 text-center md:text-left'>Happy Clients</p>
        </div>
        <div className='flex flex-col md:h-auto md:w-auto h-[150px] w-[130px]'>
            <div className='flex flex-col md:flex-row items-center'>
              <p className='text-title-color font-extrabold text-4xl md:pl-4 md:w-[100px] md:pt-0 pt-2'>{`+${dashboards}`}</p>
            </div>
            <p className='text-title-color  pt-3 text-center md:text-left'>Dashboards</p>
        </div> */}
      </div>
    </div>
  )
}

export default Counter
