import moment, { Moment } from "moment";
import { MouseEvent } from "react";

const Tile = (props: {
  inactive?: boolean;
  date: Moment;
  content?: string;
  highlighted?: boolean;
}) => {
  const classes = `p-3.5 xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100`;
  const date = moment(props.date);

  const handleClick = (e: MouseEvent, date: Moment) => {
    // handle showing of events on the date
    console.log(e, date, "clicked");
  };

  return (
    <>
      <div
        className={`${classes} ${props.inactive && "bg-gray-50"}`}
        onClick={(e) => handleClick(e, props.date)}
      >
        <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">
          {!props.inactive && date.format("D")}
        </span>
        {props.content && (
          <span className="hidden lg:block text-xs font-medium text-gray-500">
            {props.content}
          </span>
        )}
      </div>
    </>
  );
};

export default Tile;
