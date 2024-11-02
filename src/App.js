import React from "react";
import AnimatedCursor from "./layouts/AnimatedCursor";
import Container from "./layouts/Container";
import Flow from "./layouts/pages/flow/Flow";

function App() {
  React.useEffect(() => {
    document.documentElement.style.cursor = "none";
    return () => {
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  return <Flow />;
}

export default App;
