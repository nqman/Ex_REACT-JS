import { useState } from "react";
import GlassItem from "./GlassItem";

export default function GlassContent() {
  const [glass, setGlass] = useState(1);

  // const renderGlasses = () => {
  //   let content = [];
  //   for (let i = 1; i < 10; i++) {
  //     content.push(
  //       <button onClick={`() => handleChangeGlass(${i})`}>
  //         <img src={`./img/v${i}.png`} alt={`v${i}`} />
  //       </button>
  //     );
  //   }
  //   return content;
  // };
  const handleChangeGlass = (index) => {
    console.log(index);
    setGlass(index);
  };
  return (
    <div className="glassContent">
      <div className="model">
        <div className="modelLeft">
          <GlassItem index={glass} />
        </div>
        <div className="modelRight"></div>
      </div>
      <div className="glassesList">
        <button onClick={() => handleChangeGlass(1)}>
          <img src="./img/v1.png" alt="v1" />
        </button>
        <button onClick={() => handleChangeGlass(2)}>
          <img src="./img/v2.png" alt="v2" />
        </button>
        <button onClick={() => handleChangeGlass(3)}>
          <img src="./img/v3.png" alt="v3" />
        </button>
        <button onClick={() => handleChangeGlass(4)}>
          <img src="./img/v4.png" alt="v4" />
        </button>
        <button onClick={() => handleChangeGlass(5)}>
          <img src="./img/v5.png" alt="v5" />
        </button>
        <button onClick={() => handleChangeGlass(6)}>
          <img src="./img/v6.png" alt="v6" />
        </button>
        <button onClick={() => handleChangeGlass(7)}>
          <img src="./img/v7.png" alt="v7" />
        </button>
        <button onClick={() => handleChangeGlass(8)}>
          <img src="./img/v8.png" alt="v8" />
        </button>
        <button onClick={() => handleChangeGlass(9)}>
          <img src="./img/v9.png" alt="v9" />
        </button>
      </div>
    </div>
  );
}
