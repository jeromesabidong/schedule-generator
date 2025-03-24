import moment, { Moment } from "moment";

const Monthpicker = (props: {
  month: Moment;
  setMonth: (month: Moment) => void;
}) => {
  const months = Array.from({ length: 12 }, (_, i) => {
    return moment().add(i, "month");
  });

  const handleChangeMonth = (month: Moment) => {
    // @todo change to a modal
    if (confirm("Change the selected month?")) {
      props.setMonth(month);
    }
  };

  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {props.month.format("MMMM YYYY")}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {months.map((month, index) => (
            <li key={index}>
              <a onClick={() => handleChangeMonth(month)}>
                {month.format("MMMM YYYY")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Monthpicker;
