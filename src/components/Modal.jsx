import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
  const root = document.getElementById("overlay");

  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop"
          onClick={clickHandler}
        >
          <motion.img
            src={selectedImg}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: .5 }}
            alt=""
          />
        </motion.div>,
        root
      )}
    </>
  );
}

export default Modal;
