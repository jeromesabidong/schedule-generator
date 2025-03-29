import React, { PropsWithChildren } from "react";
import { Schedule } from "../types";

type ScheduleContextType = {
  schedules: Schedule[];
  setSchedules: React.Dispatch<React.SetStateAction<Schedule[]>>;
};

const ScheduleContext = React.createContext<ScheduleContextType>({
  schedules: [],
  setSchedules: () => {},
});

const ScheduleProvider = (props: PropsWithChildren) => {
  const [schedules, setSchedules] = React.useState<Schedule[]>([
    {
      date: "2025-03-01",
      time: { start: "10:00 AM", end: "7:00 PM" },
      name: "Sample Event",
    },
    {
      date: "2025-04-02",
      time: { start: "10:00 AM", end: "7:00 PM" },
      name: "Sample Event",
    },
  ]);

  return (
    <ScheduleContext.Provider value={{ schedules, setSchedules }}>
      {props.children}
    </ScheduleContext.Provider>
  );
};

export { ScheduleContext };
export default ScheduleProvider;
