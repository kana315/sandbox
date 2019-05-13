import React, { Suspense, lazy } from "react";

const LazyComp = lazy(() => import("./LazyComp"));
export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComp />
    </Suspense>
  );
}

