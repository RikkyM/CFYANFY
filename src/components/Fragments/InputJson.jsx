import InputElement from "../Elements/Input";

const InputJson = ({ fn1, fn2 }) => {
  return (
    <div className="flex w-max mx-auto my-10 p-5 rounded bg-gray-200 transition-all duration-[.4s] dark:bg-white/20 dark:text-white font-semibold border border-gray-200 dark:border-black/20 shadow-sm">
      <InputElement name="file1" onChange={fn1} labelText="Followed" />
      <InputElement name="file2" onChange={fn2} labelText="Follower" />
    </div>
  );
};

export default InputJson;
