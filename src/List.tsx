import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import ItemInput from "./ItemInput";
import { localStorageKeys } from "./config";
import { Delete, List, ListItem, ListItemText, NewItem } from "./styles";

interface ListProps {
  setIsExploding: Dispatch<SetStateAction<boolean>>;
}

const ListComponent: FC<ListProps> = ({ setIsExploding }) => {
  const savedList = JSON.parse(
    localStorage.getItem(localStorageKeys.LIST) || "[]"
  );
  const [list, setList] = useState<string[]>(savedList);
  useEffect(() => {
    localStorage.setItem(localStorageKeys.LIST, JSON.stringify(list));
  }, [list]);
  const [activeElement, setActiveElement] = useState(-1);
  const [addNewItem, setAddNewItem] = useState(false);
  const completeNewItem = (blur = false) => {
    blur && setAddNewItem(false);
    setActiveElement(-1);
  };
  return (
    <List>
      {list.map((listItem, itemIndex) => {
        const isActiveElement = activeElement === itemIndex;
        if (isActiveElement) {
          return (
            <ItemInput
              key={listItem}
              element={itemIndex}
              setList={setList}
              value={listItem}
              complete={completeNewItem}
            />
          );
        }
        return (
          <ListItem key={itemIndex}>
            <ListItemText onClick={() => setActiveElement(itemIndex)}>
              {listItem}
            </ListItemText>
            <Delete
              onClick={() => {
                setList((prev) => prev.filter((_, idx) => idx !== itemIndex));
                setIsExploding(true);
              }}
            />
          </ListItem>
        );
      })}
      {addNewItem ? (
        <ItemInput setList={setList} complete={completeNewItem} />
      ) : (
        <NewItem onClick={() => setAddNewItem(true)}>Add New Item...</NewItem>
      )}
    </List>
  );
};

export default ListComponent;
