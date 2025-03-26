import moment, { Moment } from "moment";
import { MouseEvent } from "react";

const Tile = (props: {
  inactive?: boolean;
  date: Moment;
  content?: string;
  highlighted?: boolean;
}) => {
  const classes = `p-3.5 xl:aspect-auto m-1 lg:h-28 border-b flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300`;
  const date = moment(props.date);

  const handleClick = (e: MouseEvent, date: Moment) => {
    // handle showing of events on the date
    console.log(e, date, "clicked");
  };

  return (
    <>
      <div className={`${classes}`} onClick={(e) => handleClick(e, props.date)}>
        <span className="text-xs font-semibold flex items-center justify-center w-7 h-7 rounded-full ">
          {!props.inactive && date.format("D")}
        </span>
        {props.content && (
          <span className="hidden lg:block text-xs font-medium ">
            {props.content}
          </span>
        )}
      </div>
    </>
  );
};

export default Tile;
