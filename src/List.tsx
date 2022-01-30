import React, {
  useState,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { localStorageKeys } from "./config";
import ItemInput from "./ItemInput";
import { Delete, List, ListItem, ListItemText, NewItem } from "./styles";

interface ListProps {
  setIsExploding: Dispatch<SetStateAction<boolean>>;
}

const ListComponent: FC<ListProps> = ({ setIsExploding }) => {
  const savedList = JSON.parse(
    localStorage.getItem(localStorageKeys.LIST) || '["hello"]'
  );
  const [list, setList] = useState<string[]>(savedList);
  useEffect(() => {
    localStorage.setItem(localStorageKeys.LIST, JSON.stringify(list));
  }, [list]);
  const [activeElement, setActiveElement] = useState(-1);
  const [addNewItem, setAddNewItem] = useState(false);
  const completeNewItem = () => setAddNewItem(false);
  return (
    <List>
      {list.map((listItem, itemIndex) => {
        const isActiveElement = activeElement === itemIndex;
        console.log("isActiveElement", isActiveElement);
        return (
          <ListItem>
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
