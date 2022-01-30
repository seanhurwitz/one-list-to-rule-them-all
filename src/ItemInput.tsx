import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { ItemInput } from "./styles";

interface ItemInputProps {
  setList: Dispatch<SetStateAction<string[]>>;
  complete?: () => void;
  value?: string;
  element?: number;
}

const ItemInputComponent: FC<ItemInputProps> = ({
  setList,
  value = "",
  element = -1,
  complete = () => {},
}) => {
  const [currentValue, setValue] = useState(value);

  const saveValue = () => {
    if (currentValue) {
      setList((prev) => {
        if (element >= 0) {
          return prev.map((p, idx) => {
            if (idx === element) {
              return currentValue;
            }
            return p;
          });
        } else {
          return [...prev, currentValue];
        }
      });
    }
    complete();
  };

  console.log("value :>> ", value);
  return (
    <ItemInput
      autoFocus
      value={currentValue}
      onChange={(e) => setValue(e.target.value)}
      onBlur={saveValue}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          saveValue();
        }
        console.log("e.key", e.key);
      }}
    />
  );
};

export default ItemInputComponent;
