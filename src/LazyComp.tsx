import React from "react";

let isLoading = true;
const timeout = (msec: number) =>
  new Promise(resolve => {
    setTimeout(resolve, msec);
  });

export default function LazyComp() {
  if (isLoading) {
    throw new Promise(async resolve => {
      // https://qiita.com/wawoon/items/706acf084a7f2c560b26
      // Promiseをthrowすることで非同期読み込みを行う
      await timeout(5000);
      isLoading = false;
      resolve();
    });
  }
  return <p>complete</p>;
}
