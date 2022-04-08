import React, { useState } from "react";
import Progress from "./Progress";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);


  const types = ["image/png", "image/jpg", "image/jpeg"];

  const onChangeHandler = (e) => {
    let selected = e.target.files[0];

    if (types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select an image file (png ,jpg or jpeg)");
    }
  };

  return (
    <>
      <form className="uploadForm">
        <label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={onChangeHandler}
          />
          <span>+</span>
        </label>
        <div className="outputs">
          {error && <div className="error">{error} </div>}
          {file && <div>{file.name}</div>}
          {file && <Progress file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
}

export default UploadForm;
