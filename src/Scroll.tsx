import React from "react";
const Scroll: React.FC = () => {
  React.useEffect(() => {
    window.addEventListener("onload", () => {
      window.scrollTo(1000, 1000);
    });
  }, []);
  return <div style={{ width: 3000, height: 5000, backgroundColor: "red" }} />;
};
export default Scroll;
