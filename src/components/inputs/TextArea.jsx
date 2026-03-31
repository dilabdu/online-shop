function TextArea({ name, placeholder }) {
  return (
    <label className="flex flex-col gap-1 mt-4">
      <span className="">Description:</span>
      <textarea
        name={name}
        required
        className="textarea resize-none w-full"
        placeholder={placeholder}
      />
    </label>
  );
}

export default TextArea;
