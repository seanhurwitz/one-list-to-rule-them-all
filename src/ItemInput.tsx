import { Dispatch, FC, SetStateAction, useState } from "react";
import { ItemInput } from "./styles";

interface ItemInputProps {
  setList: Dispatch<SetStateAction<string[]>>;
  complete: (blur: boolean) => void;
  value?: string;
  element?: number;
}

const ItemInputComponent: FC<ItemInputProps> = ({
  setList,
  value = "",
  element = -1,
  complete,
}) => {
  const [currentValue, setValue] = useState(value);

  const saveValue = (blur = false) => {
    if (currentValue.trim()) {
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
    setValue("");
    complete(blur);
  };

  return (
    <ItemInput
      autoFocus
      value={currentValue}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => saveValue(true)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          saveValue();
        }
      }}
    />
  );
};

export default ItemInputComponent;
