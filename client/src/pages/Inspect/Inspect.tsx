import "./Inspect.css";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import arrow from "../../assets/Arrow.png";
import monkey_hanging from "../../assets/monkey-hanging.png";
import monkey_falling from "../../assets/monkey-falling.png";
import Earth from "../../models/Earth";
import Pin from "../../models/Pin";

type Props = {
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
};

function Inspect(props: Props): JSX.Element {
  const [id, setId] = useState<number>(0);
  const [monkeyName, setMonkeyName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
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
          {/* <h2>{monkeyName}</h2> */}
          <h2>Monkey Name</h2>
          <div className="inspect__monkey__data__container">
            {/* <p>{description}</p> */}
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
          </div>
        </div>
        <div className="inspect__canvas__container">
          <Canvas>
            <ambientLight />
            <OrbitControls enablePan={false} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Earth scale={[0.023, 0.023, 0.023]} />
              {id === 0 ? (
                <>
                  <Pin
                    scale={[5, 5, 5]}
                    position={[2.6, 0, 0]}
                    rotation={[0, -Math.PI / 2, 0]}
                  />
                </>
              ) : id === 1 ? (
                <>
                  <Pin
                    scale={[5, 5, 5]}
                    position={[2.6, 1, 0]}
                    rotation={[0, -Math.PI / 2, 0]}
                  />
                </>
              ) : null}
            </Suspense>
          </Canvas>
        </div>
      </div>
      <img
        className="monkey__falling"
        src={monkey_falling}
        alt="monkey falling"
      />
      <hr className="bottom__line" />
    </div>
  );
}

export default Inspect;
