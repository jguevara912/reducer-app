import React from "react";
import MyComponents from "./components/MyComponents";
import StoreProvider from "./store/StoreProvider";

function App2() {
  return (
    <div>
      <StoreProvider>
        <MyComponents />
      </StoreProvider>
    </div>
  );
}

export default App2;
