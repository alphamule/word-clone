import React from "react";

function Banner({ status, children }) {

  if (status === 'active') {
    return;
  }

  return (
    <div className={`${status} banner`}>
      <p>
        {children}
      </p>
    </div>
  );
}

export default Banner;