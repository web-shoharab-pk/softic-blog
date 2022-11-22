import { useState, useEffect } from "react";

const HomeLoader = () => {

    let [ar, setAr] = useState(["L", "o", "a", "d", "i", "n", "g", "."]);

    function append() {
      if (ar.length <= 9) {
        let cpy = [...ar, "."];
        setAr(cpy);
      } else {
        setAr(["L", "o", "a", "d", "i", "n", "g", "."]);
      }
    }
  
    useEffect(() => {
      setTimeout(() => {
        append();
      }, 1000);
    });

    
    return (
        <div className="App flex justify-center items-center h-screen bg-gray-100">
      {ar.map((v, i) => (
        <div key={i} className="border rounded shadow p-1 bg-white mx-0.5">{v}</div>
      ))}
    </div>
    );
};

export default HomeLoader;