import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import ReactLoading from "react-loading";
import arrow from "../../assets/Arrow.png";
import monkey_hanging from "../../assets/monkey-hanging.png";
import monkey_falling from "../../assets/monkey-falling.png";
import handleUpload from "../../services/handleUpload";
import "./Upload.css";

type Props = {
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

function Upload(props: Props): JSX.Element {
  const navigate = useNavigate();
  const [isRecognizing, setIsRecognizing] = useState<boolean>(false);

  const imageData = useMemo(() => {
    if (props.image) {
      return URL.createObjectURL(props.image);
    }
  }, [props.image]);

  const onDrop = useCallback((acceptedFiles: any) => {
    props.setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
    maxFiles: 1,
  });

  return (
    <>
      <div className="upload__main">
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
        <div
          {...getRootProps()}
          className="upload__box"
          style={{
            backgroundImage: props.image ? `url("${imageData}")` : "none",
            backgroundColor: props.image ? "transparent" : "#F0E9D3",
          }}
        >
          <input {...getInputProps()} />
          {!props.image ? (
            <>
              <div className="upload__addfiles">
                <svg
                  className="upload__addfiles__plus"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 7H14.5" stroke="#61876E" strokeWidth="2" />
                  <path d="M7 14.5L7 0" stroke="#61876E" strokeWidth="2" />
                </svg>
              </div>
              <p>add photo (.png, .jpg, jpeg)</p>
            </>
          ) : null}
        </div>
        {!isRecognizing ? (
          <div
            className="upload__inspect__button"
            onClick={async () => {
              if (props.image) {
                try {
                  setIsRecognizing(true);
                  const res = await handleUpload(props.image);
                  const { data } = await res;

                  if (data.message === 1) {
                    props.setId(data.monkey);
                    setIsRecognizing(false);
                    navigate("/inspect");
                  } else {
                    setIsRecognizing(false);
                    alert("Something went wrong. Please try again.");
                  }
                } catch (e) {
                  setIsRecognizing(false);
                  console.log(e);
                }
              }
            }}
          >
            INSPECT
          </div>
        ) : (
          <ReactLoading color={"#61876E"} type={"bubbles"} />
        )}
        <p className="upload__annotation">
          NOTE: the program recognizes five species of monkeys: gorilla,
          capuchin, baboon, chimpanzee
        </p>
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

export default Upload;
