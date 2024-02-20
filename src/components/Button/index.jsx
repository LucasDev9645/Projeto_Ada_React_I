import "./styles.css";

// eslint-disable-next-line react/prop-types
const Button = ({ children, icon, label, onClick }) => {
  return (
    <button onClick={onClick} aria-label={label} className="button-container">
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
