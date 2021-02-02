import React, { useEffect } from "react";
import { TimelineMax } from "gsap";

const Character = () => {
  useEffect(() => {
    var tl = new TimelineMax({
      delay: 1.4,
      repeat: 1,
    });

    tl.to(".brow", 0.2, { y: -12 });
    tl.to(".brow", 0.2, { y: 0 });
  }, []);

  return (
    <div>
      <div className="head">
        <div className="hair">
          <div className="hair-corner"></div>
          <div className="hair-middle"></div>
          <div className="hair-shadow"></div>
          <div className="hair-shadow-2"></div>
        </div>
        <div className="beard">
          <div className="beard-corner"></div>
        </div>
        <div className="brows">
          <div className="brow"></div>
          <div className="brow"></div>
        </div>
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="nose"></div>
        <div className="mouth">
          <div className="teeth-shadow"></div>
        </div>
        <div className="ears">
          <div className="ear"></div>
          <div className="ear"></div>
        </div>
      </div>
    </div>
  );
};

export default Character;
