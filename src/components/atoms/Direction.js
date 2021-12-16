export const Col = ({ children, className }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};
export const Row = ({ children, className }) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};
