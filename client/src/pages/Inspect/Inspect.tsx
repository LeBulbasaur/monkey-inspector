import "./Inspect.css";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import arrow from "../../assets/Arrow.png";
import monkey_hanging from "../../assets/monkey-hanging.png";
import monkey_falling from "../../assets/monkey-falling.png";
import Earth from "../../models/Earth";
import Pin from "../../models/Pin";
import data from "../../data/monkeys.json";

type Props = {
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

function Inspect(props: Props): JSX.Element {
  const [monkeyName, setMonkeyName] = useState<string>(
    props.id === 1
      ? data.monkeys[props.id - 1].name
      : props.id === 2
      ? data.monkeys[props.id - 1].name
      : props.id === 3
      ? data.monkeys[props.id - 1].name
      : props.id === 4
      ? data.monkeys[props.id - 1].name
      : props.id === 5
      ? data.monkeys[props.id - 1].name
      : "No Monkey Found"
  );
  const [description, setDescription] = useState<string>(
    props.id === 1
      ? data.monkeys[props.id - 1].description
      : props.id === 2
      ? data.monkeys[props.id - 1].description
      : props.id === 3
      ? data.monkeys[props.id - 1].description
      : props.id === 4
      ? data.monkeys[props.id - 1].description
      : props.id === 5
      ? data.monkeys[props.id - 1].description
      : "No Monkey Found"
  );

  return (
    <>
      <div className="inspect__main">
        <div className="inspect__header">
          <img
            className="inspect__arrow inspect__arrow__left"
            src={arrow}
            alt="arrow"
          />
          <h1>Monkey Inspector</h1>
          <img
            className="inspect__arrow inspect__arrow__right"
            src={arrow}
            alt="arrow"
          />
          <img
            className="monkey__hanging"
            src={monkey_hanging}
            alt="monkey hanging"
          />
        </div>
        <div className="inspect__content">
          <div className="inspect__monkey__data">
            <h2>{monkeyName}</h2>
            <div className="inspect__monkey__data__container">
              <p>{description}</p>
            </div>
          </div>
          <div className="inspect__canvas__container">
            <Canvas>
              <ambientLight />
              <OrbitControls enablePan={false} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Earth scale={[0.023, 0.023, 0.023]} />
                {props.id === 1 ? (
                  <>
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.6, -0.2, -0.65]}
                      rotation={[-Math.PI / 5, -Math.PI / 2.4, 0]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.33, -0.1, -1.3]}
                      rotation={[-Math.PI / 35, -Math.PI / 2.9, 0]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.6, 0.3, -0.65]}
                      rotation={[Math.PI / 33, -Math.PI / 2.3, 0]}
                    />
                  </>
                ) : props.id === 2 ? (
                  <>
                    <Pin
                      scale={[5, 5, 5]}
                      position={[1.6, 0, 2.4]}
                      rotation={[0, -Math.PI / 1.25, 0]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[1.7, -0.9, 2.28]}
                      rotation={[Math.PI / 8, -Math.PI / 1.2, 0]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[1, -0.5, 2.7]}
                      rotation={[Math.PI / 8, -Math.PI / 1.12, 0]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[0.3, 0.5, 2.8]}
                      rotation={[Math.PI / 20000, -Math.PI / 1.05, 0]}
                    />
                  </>
                ) : props.id === 3 ? (
                  <>
                    <Pin
                      scale={[5, 5, 5]}
                      position={[-0.65, 0, -3]}
                      rotation={[0, Math.PI / 15, 0]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[-1.3, 0, -2.8]}
                      rotation={[0, Math.PI / 7.5, 0]}
                    />
                  </>
                ) : props.id === 4 ? (
                  <>
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.6, 0.7, 0.2]}
                      rotation={[-1.2, -Math.PI / 1.8, Math.PI / 222]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.3, 0.7, -1.3]}
                      rotation={[Math.PI / 6, -Math.PI / 3, Math.PI / 2]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.3, -0.4, -1.4]}
                      rotation={[-0.25, -Math.PI / 2.75, 0]}
                    />
                  </>
                ) : props.id === 5 ? (
                  <>
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.6, 0, -0.65]}
                      rotation={[0, -Math.PI / 2.3, 0]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.6, 0.5, 0.2]}
                      rotation={[-1.2, -Math.PI / 1.8, Math.PI / 222]}
                    />
                    <Pin
                      scale={[5, 5, 5]}
                      position={[2.6, 0.3, -0.65]}
                      rotation={[Math.PI / 33, -Math.PI / 2.3, 0]}
                    />
                  </>
                ) : null}
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      <img
        className="monkey__falling"
        src={monkey_falling}
        alt="monkey falling"
      />
      <div className="bottom__line" />
    </>
  );
}

export default Inspect;
