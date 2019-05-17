import React from "react";

let isLoading = true;
// const timeout = (msec: number) =>
//   new Promise(resolve => {
//     setTimeout(resolve, msec);
//   });

export default function LazyComp() {
  if (isLoading) {
    throw new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        // console.log("random", random);
        if (random > 0.9) {
          console.log("random error");
          reject(new Error("Random error!"));
        } else {
          isLoading = false;
          resolve("RESOLVED");
        }
      }, 1000);
    });
  }
  return <p>Complete.</p>;
}
