"use client";
import { Card } from "./components/molechule";
import DisplayCard from "./components/organisms";

import ButtonPlus from "./components/atom";
import { FormUp } from "./components/molechule";
import { useState } from "react";
import { Form } from "./components/molechule";

export interface User {
  name: string;
  age: number;
  src: string;
  alt: string;
}

export default function Home() {
  const [cardInfo, setCardInfo] = useState<User[]>([
    {
      name: "Peng maleap",
      age: 18,
      src: "/Tulip-Royal-Virgin-PKTULRVI-2022 (1).jpg",
      alt: "dog",
    },
    {
      name: "Reak",
      age: 23,
      src: "/Tulip-Royal-Virgin-PKTULRVI-2022 (1).jpg",
      alt: "lion",
    },
    {
      name: "Run",
      age: 23,
      src: "/Tulip-Royal-Virgin-PKTULRVI-2022 (1).jpg",
      alt: "pig",
    },
  ]);
  const [onSelect, setOnSelect] = useState("");
  console.log(onSelect);

  const selectUser = cardInfo.find((user) => user.name === onSelect);
  // console.log(selectUser);

  return (
    <>
      <DisplayCard
        Users={cardInfo}
        onselect={onSelect}
        setonselect={setOnSelect}
      ></DisplayCard>
      <ButtonPlus selectedit={onSelect} onselectedit={setOnSelect}>
        {onSelect ? (
          <FormUp
            onselectuser={selectUser}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
        ) : (
          <Form setCardInfo={setCardInfo}></Form>
        )}
      </ButtonPlus>
    </>
  );
}
