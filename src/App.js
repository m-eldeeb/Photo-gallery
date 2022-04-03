import { useState } from "react";
import ImageBox from "./components/ImageBox";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="container">
        <Title />
        <UploadForm />
        <ImageBox setSelectedImg={setSelectedImg} />

        {selectedImg && <Modal selectedImg={selectedImg}  setSelectedImg={setSelectedImg}/>}
      </div>
    </>
  );
}

export default App;
