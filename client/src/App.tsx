import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import Inspect from "./pages/Inspect/Inspect";

function App() {
  const [image, setImage] = useState<File | undefined>();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/inspect"
            element={<Inspect image={image} setImage={setImage} />}
          />
          <Route
            path="/"
            element={<Upload image={image} setImage={setImage} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
