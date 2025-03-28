const MainHeading = (props: { children: React.ReactNode }) => {
  return <span className="text-xl">{props.children}</span>;
};
const SubHeading = (props: { children: React.ReactNode }) => {
  return <span className="text-md">{props.children}</span>;
};
const HelpText = (props: { children: React.ReactNode }) => {
  return <span className="text-xs">{props.children}</span>;
};

export { MainHeading, SubHeading, HelpText };
