import { Item } from "../types";

const ListItem = (props: { item: Item }) => {
  return <li className="list-row">{props.item.name}</li>;
};

export default ListItem;
