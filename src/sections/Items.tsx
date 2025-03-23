import { useState } from "react";
import { HelpText, MainHeading } from "../components/Text";
import ListItem from "../components/ListItem";
import Collapsible from "../components/Collapsible";
import { Item } from "../types";

const Items = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAdd = () => {
    const newItem: Item = {
      name: `Item ${items.length + 1}`,
      id: `${items.length + 1}`,
    };
    setItems([...items, newItem]);
  };

  const handleClear = () => {
    if (confirm("Do you want to clear all items? ")) {
      setItems([]);
    }
  };

  return (
    <>
      <MainHeading>Items</MainHeading>
      <HelpText>
        <p>
          This section contains the items you want to be distributed to the
          calendar
        </p>

        <div className="flex justify-evenly my-2">
          <button className="btn btn-success" onClick={handleAdd}>
            Add
          </button>
          <button className="btn btn-error" onClick={handleClear}>
            Clear
          </button>
        </div>

        <Collapsible title={`Listed items: ${items.length}`}>
          <ul className="list bg-base-100 border border-gray-100 rounded-box">
            {items &&
              items.map((item, key) => {
                return <ListItem key={key} item={item} />;
              })}
            {items.length === 0 && <li>No items listed.</li>}
          </ul>
        </Collapsible>
      </HelpText>
    </>
  );
};

export default Items;
