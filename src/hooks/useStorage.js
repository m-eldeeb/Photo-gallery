import { useEffect, useState } from "react";
import { projectStorage, projectFireStore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection,serverTimestamp  } from "firebase/firestore";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const sotrageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(projectFireStore, "images"), {
            downloadURL,
            timeStamp: serverTimestamp()
          });
          setUrl(downloadURL);
        });
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
