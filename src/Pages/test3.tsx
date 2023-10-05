import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icons from '@fortawesome/free-solid-svg-icons'
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { fas, faB } from "@fortawesome/free-solid-svg-icons";
import { library } from "../../node_modules/@fortawesome/fontawesome-svg-core";
import randomicon from "../utils/randomicon";
library.add(fas);
library.add(faB);

const test3 = () => {
  const iconList: any = Object.keys(Icons)
    .filter((key: any) => key !== "fas" && key !== "prefix")
    .map((icon: any) => Icons[icon]);

  //   library.add(...iconList);
  console.log(iconList[564]);
  const [icon, setIcon] = useState<any>(null);

  const generateNewIcon = () => {
    const iconTypes = ["address-book", "clock", "book"];

    const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)];
    // console.log(iconType);s
    const allColor = ["red", "blue", "green"];
    const color = allColor[Math.floor(Math.random() * allColor.length)];

    setIcon({ type: iconType, color });
  };

  return (
    <div>
      <button onClick={() => randomicon()}>Generate New Icon</button>

      {icon && (
        <i
          style={{
            color: icon.color,
            width: "100px",
            height: "100px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <FontAwesomeIcon icon={icon.type} color={icon.color} />
        </i>
      )}
    </div>
  );
};

export default test3;
