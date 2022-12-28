import { useState } from "react";
import "./Inspect.css";

type Props = {
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
};

function Inspect(props: Props) {
  return (
    <div className="Inspect">
      <h1>Inspekcja sanitarna</h1>
    </div>
  );
}

export default Inspect;
