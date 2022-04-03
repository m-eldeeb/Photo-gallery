import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (collec) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(projectFireStore, collec),
      orderBy("timeStamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsubscribe();
  }, [collec]);

  return { docs };
};
export default useFirestore;
