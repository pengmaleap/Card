import React from "react";
import { Card } from "../molechule";

const DisplayCard = ({ Users, onselect, setonselect }) => {

  return (
    <>
      {Users.map((data, index) => (
        <Card
          alt={data.alt}
          key={index}
          name={data.name}
          src={data.src}
          getname={onselect}
          getonselect={setonselect}
        />
      ))}
    </>
  );
};
export { DisplayCard };
