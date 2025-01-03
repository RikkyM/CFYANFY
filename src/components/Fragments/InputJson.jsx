import InputElement from "../Elements/Input";

const InputJson = ({ fn1, fn2 }) => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row w-[90%] text-sm md:text-base lg:w-max mx-auto mt-3 mb-5 p-3 md:p-5 rounded bg-gray-200 transition-all duration-[.4s] dark:bg-white/20 dark:text-white font-semibold border border-gray-200 dark:border-black/20 shadow-sm">
      <InputElement name="file1" onChange={fn1} labelText="Followed" />
      <InputElement name="file2" onChange={fn2} labelText="Follower" />
    </div>
  );
};

export default InputJson;
