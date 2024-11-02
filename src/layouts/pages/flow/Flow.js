import React from "react";
import "./styles.scss"; // Make sure to import your CSS if needed

const Item = ({ index }) => {
  return (
    <div className="item" style={{ "--i": index }}>
      <div>THUONG</div>
      <div>✨</div>
    </div>
  );
};

const Flow = () => {
  const count = 400;
  const items = [];

  for (let n = 0; n < count; n++) {
    items.push(<Item key={n} index={n} />);
  }

  return (
    <div className="items" style={{ "--count": count }}>
      {items}
    </div>
  );
};

export default Flow;
