const Button = ({
  children,
  buttonStyle = "btn-primary",
  onClick = () => null,
}) => {
  return (
    <button className={`btn ${buttonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

const AnchorButton = ({ children, href = "#" }) => {
  return (
    <a href={href} className="btn btn-primary">
      {children}
    </a>
  );
};

export default Button;
export { AnchorButton };
