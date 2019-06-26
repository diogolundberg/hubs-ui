import React, { useEffect, useRef } from "react";
import "./header.css";

export const Header = () => {
  const header = useRef();
  const threshold = useRef();
  const observer = useRef();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      function(entries) {
        if (entries[0].intersectionRatio === 0)
          header.current.classList.add("sticky");
        else if (entries[0].intersectionRatio === 1)
          header.current.classList.remove("sticky");
      },
      { threshold: [0, 1] }
    );
    observer.current.observe(threshold.current);

    return () => observer.current.disconnect();
  }, [threshold]);

  return (
    <>
      <div ref={threshold} className="top" />
      <header ref={header} className="header">
        Header
      </header>
    </>
  );
};
