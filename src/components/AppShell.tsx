type AppShellComponents = {
  top: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
};

const AppShell = (props: AppShellComponents) => {
  return (
    <div className="flex flex-col">
      {props.top}
      <div className="flex md:flex-row flex-col">
        <section className="md:w-4/12 p-2">{props.left}</section>
        <section className="md:w-8/12 p-2">{props.right}</section>
      </div>
    </div>
  );
};

export default AppShell;
