import moment, { Moment } from "moment";
import { MouseEvent } from "react";
import { Schedule } from "../../types";

const Tile = (props: {
  inactive?: boolean;
  date: Moment;
  highlighted?: boolean;
  schedules: Schedule[];
}) => {
  const classes = `p-1 xl:aspect-auto m-1 lg:h-28 border-b flex justify-start gap-1 flex-col max-lg:items-center min-h-[70px] transition-all duration-300`;
  const date = moment(props.date);

  const handleClick = (e: MouseEvent, date: Moment) => {
    // handle showing of events on the date
    console.log(props.schedules, e, date);
  };

  return (
    <>
      <div className={`${classes}`} onClick={(e) => handleClick(e, props.date)}>
        <span className="text-xs font-semibold flex items-center justify-center size-1 rounded-full ">
          {!props.inactive && date.format("D")}
        </span>
        {props.schedules && (
          <ul>
            {props.schedules.map((schedule, ix) => {
              return (
                <li key={ix} className="text-xs">
                  {schedule.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Tile;
