import React from "react";

type AppShellComponents = {
  top: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
};

const AppShell = (props: AppShellComponents) => {
  return (
    <div className="flex flex-col h-dvh">
      {props.top}
      <div className="flex md:flex-row flex-col">
        <section className="md:w-1/4 p-2">{props.left}</section>
        <section className="md:w-3/4 p-2">{props.right}</section>
      </div>
    </div>
  );
};

export default AppShell;
