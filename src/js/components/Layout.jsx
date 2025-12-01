const Container = ({ children, isFluid, style = {} }) => {
  return (
    <div className={`container${isFluid ? "-fluid" : ""}`} style={style}>
      {children}
    </div>
  );
};

const Row = ({ children, className, style = {} }) => {
  return (
    <div className={className ? "row " + className : "row"} style={style}>
      {children}
    </div>
  );
};

const Col = ({ children, colWidth, colOffset, className, style = {} }) => {
  return (
    <div
      className={`col${colWidth ? "-" + colWidth : ""}${
        colOffset ? " offset-" + colOffset : ""
      }${className ? " " + className : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

export { Container, Row, Col };
