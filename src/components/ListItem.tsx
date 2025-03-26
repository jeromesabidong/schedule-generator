import { Dispatch, SetStateAction, useState } from "react";
import { Item } from "../types";

const ListItem = (props: {
  item: Item;
  setItems: Dispatch<SetStateAction<Item[]>>;
}) => {
  const [editing, setEditing] = useState(false);

  const allDays = ["M", "T", "W", "Th", "F", "Sa", "Su"];

  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItem = { ...props.item, name: e.target.value };
    props.setItems((prevItems) =>
      prevItems.map((item) => (item.id === props.item.id ? updatedItem : item))
    );
  };

  // const changeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const updateItem = { ...props.item, days: [] };
  //   // to-do update
  // };

  return (
    <li className="list-row flex flex-col">
      {/* Name and option */}
      {editing ? (
        <div className="flex">
          <input
            type="text"
            className="border p-1 rounded"
            value={props.item.name}
            onChange={changeItemName}
          />
          <a
            className="inline ml-auto rounded"
            onClick={() => setEditing(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </a>
        </div>
      ) : (
        <div className="flex">
          {props.item.name}
          <a
            className="inline ml-auto rounded"
            onClick={() => setEditing(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </a>
        </div>
      )}

      {/* Time */}
      <div className="flex place-items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="text-sm">
          {props.item.time.start} - {props.item.time.end}
        </span>
      </div>

      {/* Days */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-1">
          {allDays.map((day, ix) => {
            const classes = `badge badge-sm text-xs ${
              props.item.days.includes(day)
                ? "badge-success"
                : "badge-dash badge-error"
            }`;

            return (
              <div key={ix}>
                <span className={classes}>{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
