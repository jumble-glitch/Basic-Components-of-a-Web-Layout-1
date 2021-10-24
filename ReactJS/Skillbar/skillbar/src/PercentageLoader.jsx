import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const PercentageLoader = ({ valueEnd, title, stroke, pathColor }) => (
  <div className="loader" style={{ padding: "5px 5px 5px 5px", stroke, cursor: "pointer" }}>
    <div id="inner-loader">
      <Loader label={title}>
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={valueEnd}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                styles={buildStyles({ pathTransition: "none", pathColor, stroke })}
              />
            );
          }}
        </AnimatedProgressProvider>
      </Loader>
    </div>
  </div>
);

function Loader(props) {
  return (
    <div
      style={{
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        fontWeight: "400"
      }}
    >
      <div style={{ width: "20%", paddingRight: 20 }}>{props.children}</div>
      <div>
        <h3 className="h3">{props.label}</h3>
      </div>
    </div>
  );
}

export default PercentageLoader;
