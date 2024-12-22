import Label from "./label";
import Input from "./Input";

const InputElement = ({ name, labelText, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label label={name}>{labelText}</Label>
      <Input name={name} id={name} type="file" accept=".json" fn={onChange} />
    </div>
  );
};

export default InputElement;
