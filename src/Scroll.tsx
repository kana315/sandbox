import React from "react";

const Scroll = () => {
  React.useEffect(() => {
    console.log("start");
    window.addEventListener("onload", () => window.scrollTo(0, 2000));
    console.log(window);
    console.log(window.scrollY);
    console.log("end");
    return () => {
      window.removeEventListener("onload", () => window.scrollTo(0, 2000));
    };
  }, []);

  return (
    <div>
      <div style={{ width: "2000px", height: "2000px" }}>Scroll me.</div>
    </div>
  );
};

export default Scroll;
