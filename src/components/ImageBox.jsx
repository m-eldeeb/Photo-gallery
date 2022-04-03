import { motion } from "framer-motion";
import React from "react";
import useFirestore from "../hooks/useFirestore";

function ImageBox({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  return (
    <>
      <div className="img-box">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src={doc.downloadURL}
                alt="uploaded pic"
                onClick={() => {
                  setSelectedImg(doc.downloadURL);
                }}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
}

export default ImageBox;
