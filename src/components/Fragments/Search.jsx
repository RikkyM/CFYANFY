import Label from "../Elements/Input/label";
import Input from "../Elements/Input/Input";

const Search = ({ onChange, name = "search" }) => {
  return (
    <>
      <Label
        label={name}
        customClass="w-[65%] max-w-[825px] mx-auto mt-10 mb-2 block"
      >
        <Input
          type="text"
          name={name}
          id={name}
          fn={onChange}
          placeholder="Search..."
          customClass="px-3 py-2 rounded text-sm border border-black/20 shadow-sm outline-none dark:bg-white/30 dark:placeholder:text-white/70 transition-all duration-[.4s]"
        />
      </Label>
    </>
  );
};

export default Search;
