import React from "react";
export default function Sum({ x, y }: any): JSX.Element {
  const onClick = React.useCallback(() => console.log("x,y changed", x + y), [
    y
  ]);
  return (
    <>
      {console.log("x", x)}
      {console.log("y", y)}
      <div onClick={onClick}>{x + y}</div>
    </>
  );
}
