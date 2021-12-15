export function LeftSide({ children }) {
  return <section className="flex justify-center items-center space-x-14">{children}</section>;
}

export function RightSide({ children }) {
  return <section className="flex justify-center items-center space-x-12">{children}</section>;
}
