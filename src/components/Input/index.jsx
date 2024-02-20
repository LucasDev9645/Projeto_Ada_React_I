import "./styles.css";

export function Input({ ...rest }) {
  return <input className="input-style" {...rest} />;
}

export function TextArea({ ...rest }) {
  return <textarea className="input-style textarea-style" {...rest} />;
}

// eslint-disable-next-line react/prop-types
export function Select({ placeholder, ...rest }) {
  return (
    <select className="select-style " placeholder={placeholder} {...rest}>
      <option value="">Selecione um Tipo</option>
      <option value="">Heroi</option>
      <option value="">Vilão</option>
    </select>
  );
}
