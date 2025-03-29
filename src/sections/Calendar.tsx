import { useContext, useEffect, useState } from "react";
import CalendarNav from "./calendar/CalendarNav";
import DisplayOptions from "./calendar/DisplayOptions";
import Tile from "./calendar/Tile";
import moment, { Moment } from "moment";
import Monthpicker from "./calendar/Monthpicker";
import { ScheduleContext } from "../providers/ScheduleProvider";

const Calendar = () => {
  const [month, setMonth] = useState(moment());
  const [generatedDates, setGeneratedDates] = useState<Moment[]>([]);

  const { schedules } = useContext(ScheduleContext);

  const generateDatesForMonth = (month: Moment) => {
    const startOfMonth = month.clone().startOf("month");
    const endOfMonth = month.clone().endOf("month");
    const startDate = startOfMonth.clone().startOf("week");
    const endDate = endOfMonth.clone().endOf("week").add(1, "days");
    const currentDate = startDate.clone();

    const dates = [];

    while (currentDate.isBefore(endDate, "days")) {
      dates.push(currentDate.clone());
      currentDate.add(1, "day");
    }

    return dates;
  };

  useEffect(() => {
    setGeneratedDates(generateDatesForMonth(month));
  }, [month]);

  return (
    <>
      Calendar
      <section className="relative py-8 sm:p-8">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14">
          <div className="flex  items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-4">
              <Monthpicker month={month} setMonth={setMonth} />
              <CalendarNav />
            </div>

            <DisplayOptions />
          </div>
          <div className="border">
            {/* HEADER */}
            <div className="grid grid-cols-7 border-b">
              <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r">
                <span className="text-sm font-medium">Sun</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r">
                <span className="text-sm font-medium">Mon</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r">
                <span className="text-sm font-medium">Tue</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r">
                <span className="text-sm font-medium">Wed</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r">
                <span className="text-sm font-medium">Thu</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r">
                <span className="text-sm font-medium">Fri</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between">
                <span className="text-sm font-medium">Sat</span>
              </div>
            </div>
            {/* END: HEADER */}

            <div className="grid grid-cols-7">
              {generatedDates.map((date, index) => {
                return (
                  <Tile
                    key={index}
                    inactive={date.month() != month.month()}
                    date={date}
                    schedules={schedules.filter((sched) => {
                      // pass only the schedules for the date
                      return moment(sched.date).isSame(date);
                    })}
                  />
                );
              })}
            </div>
          </div>

          {/* show this when on mobile */}
          {/* <div className="w-full lg:hidden py-8 px-2.5 ">
            <div className="bg-gray-50 w-full rounded-xl">
              <div className="p-3 w-full flex items-center justify-between group transition-all duration-300">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Meet with friends
                  </span>
                  <div className="flex items-center gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 8.99998V13L15 16M3 5.12132L5.10714 3M20.998 5.12657L18.8909 3.00525M20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 8.5817 7.58172 4.99998 12 4.99998C16.4183 4.99998 20 8.5817 20 13Z"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-xs font-medium text-gray-600">
                      9AM
                    </span>
                  </div>
                </div>
                <button className="py-1 px-2 rounded border border-gray-400 text-xs font-medium text-gray-900 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Edit
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Calendar;
