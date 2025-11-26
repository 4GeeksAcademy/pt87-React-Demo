const Container = ({ children, isFluid }) => {
  return (
    <div className={`container${isFluid ? "-fluid" : ""}`}>{children}</div>
  );
};

export { Container };
