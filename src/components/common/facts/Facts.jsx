import { facts } from "@/data/facts";
import { useEffect, useRef, useState } from "react";

export default function Facts() {
  const [counts, setCounts] = useState(facts.map(() => 0)); // Initialize an array of zeros for each fact number
  const [isInView, setIsInView] = useState(false); // To check if the element is in view
  const counterRef = useRef(null); // Reference to the counter element
  const intervalTime = 10; // Time interval in milliseconds

  useEffect(() => {
    // Intersection Observer to detect when the element comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const intervals = facts.map((elm, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < elm.number) {
              newCounts[index] += 1;
            } else {
              clearInterval(intervals[index]); // Clear the interval when the count ends
            }
            return newCounts;
          });
        }, intervalTime);
      });

      // Cleanup intervals when component unmounts or when isInView changes
      return () => {
        intervals.forEach(clearInterval);
      };
    }
  }, [isInView]);

  return (
    <section className="section mb-30  mt-80 " ref={counterRef}>
      <div className="bg-showcase">
        <div className="container-sub ">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center mb-30">
              <h4 className=" mb-2 fw-lighter color-white wow fadeInUp">
              ماذا نقدم 
              </h4>
              <h3 className=" text-gold  fw-lighter wow fadeInUp mb-2">
              نقدم أفضل الخدمات وفق أعلى المواصفات              </h3>
              <h4 className=" mb-2 color-white fw-lighter wow fadeInUp">
              نقدم مجموعة واسعة من خدمات التقييم من خلال مقيمين معتمدين من قبل الهيئة السعودية للمقيمين المعتمدين
              </h4>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}
