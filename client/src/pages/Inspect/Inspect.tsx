import { useState } from "react";
import "./Inspect.css";

type Props = {
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
};

function Inspect(props: Props) {
  return <div className="Inspect"></div>;
}

export default Inspect;
