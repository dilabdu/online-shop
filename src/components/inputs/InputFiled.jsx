function InputFiled({ label, type, placeholder, name }) {
  return (
    <label className="flex flex-col gap-1 mb-5 mt-4">
      <span className="">{label}</span>
      <input
        type={type}
        name={name}
        required
        className="input w-full"
        placeholder={placeholder}
      />
    </label>
  );
}

export default InputFiled;
