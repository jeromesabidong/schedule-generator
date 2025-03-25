const Collapsible = (props: { title: string; children: React.ReactNode }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow md:collapse-open bg-base-100 border-base-300 border"
    >
      <input type="checkbox" />

      <div className="collapse-title text-md font-semibold">{props.title}</div>
      <div className="collapse-content text-sm">{props.children}</div>
    </div>
  );
};

export default Collapsible;
