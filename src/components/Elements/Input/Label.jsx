const Label = ({ label, children, customClass }) => {
  return (
    <label htmlFor={label} className={customClass}>
      {children}
    </label>
  );
};

export default Label;
