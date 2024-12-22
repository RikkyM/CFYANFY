const Input = ({ name, fn = () => {}, type, accept="", placeholder, customClass="" }) => {
  return (
    <input type={type} id={name} name={name} accept={accept} onChange={fn} placeholder={placeholder} className={customClass} />
  );
};

export default Input;
