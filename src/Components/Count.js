import React, { useState, useEffect, useRef } from "react";
import './Count.css'

const CountUpSection = (p) => {
  const duration = 3000; // Duration in ms for the count-up to complete
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
  
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
  
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  useEffect(() => {
    if (hasStarted) {
      const startTime = Date.now();
  
      const countUp = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
  
        setCounts(p.maxCounts.map(max => Math.floor(max * progress)));
  
        if (progress < 1) {
          requestAnimationFrame(countUp);
        }
      };
  
      requestAnimationFrame(countUp);
    }
  }, [hasStarted, p.maxCounts]);

  return (
    <section ref={sectionRef} id="Count_sec"  data-aos="fade-up">
        <div className="count_card_head">
          <div className="" data-aos="fade-right">
        
        </div>
        </div>
      <div className="count_card_main">
        {counts.map((count, index) => (
          <div key={index} className="count_card"  data-aos="zoom-in">
            <div className="">
            <h2>{count}</h2>
            <p>{p.count_names[index]}</p>

            </div>
          </div>
        ))}
      </div>
      <div className=""  data-aos="fade-up"> 
      
      </div>
    </section>
  );
};

export default CountUpSection;
