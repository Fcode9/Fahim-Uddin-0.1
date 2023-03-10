import React, { useState, useEffect } from "react";
import { jobExperience } from "../../Data/Portfolio";
import CartDivision from "../Education/CartDivision";
function Experience({ mode }) {
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }
  const [windowWidth, setWindowWidth] = useState("");
  useEffect(() => {
    setWindowWidth(getWindowDimensions());
  }, []);
  const info =
    windowWidth > 768
      ? jobExperience.slice(0, Math.ceil(jobExperience.length / 2))
      : jobExperience;
  const info2 =
    windowWidth > 768
      ? jobExperience.slice(Math.ceil(jobExperience.length / 2))
      : null;
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <CartDivision
        mode={mode}
        info={info}
        name={"2018 - 2023"}
        heading="My Experience"
      />
      {info2 && (
        <div className="mt-8 w-full">
          <CartDivision mode={mode} info={info2} name="" heading="  ." />
        </div>
      )}
    </div>
  );
}

export default Experience;
