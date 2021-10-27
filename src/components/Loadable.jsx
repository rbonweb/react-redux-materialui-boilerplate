import React from "react";
import { Suspense } from "react";

// project imports
import Loader from "./Loader";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) =>
  function loading(props) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
