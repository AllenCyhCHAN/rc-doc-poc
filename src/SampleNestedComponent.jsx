import React from "react";
import SampleForm from "./SampleForm";

const spacerStyle = {height: 8};

const boxStyle = {
  border: "1px solid #aaa",
  borderRadius: 6,
  padding: 12,
  margin: 8,
};


const Box = ({depth, maxDepth}) => {
  const nextDepth = depth + 1;
  const showChild = nextDepth <= maxDepth;

  return (
    <div style={boxStyle}>
      <div style={{marginBottom: 8}}>
        <div style={{fontSize: 12, color: "#555"}}>
          Depth: {depth}/{maxDepth}
        </div>
      </div>

      <SampleForm/>

      <div style={spacerStyle} />

      {showChild && (
        <div>
          <Box depth={nextDepth} maxDepth={maxDepth} label={`Form at depth ${nextDepth}`} />
        </div>
      )}
    </div>
  );
};

const SampleNestedComponent = () => {
  return (
    <div style={{padding: 16}}>
      <h2>Recursive Boxes with Forms</h2>
      <Box depth={1} maxDepth={10} />
    </div>
  );
};

export default SampleNestedComponent;