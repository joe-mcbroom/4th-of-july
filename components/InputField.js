const input = ({
  type = 'text',
  placeholder = '',
  required = false,
  value = '',
  onChange = () => {},
}) => (
  <input
    type={type}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    className="bg-transparent w-full block border-0 border-b border-teal-500 text-zinc-300 font-bold py-2 px-4 focus:outline-none placeholder:italic placeholder:text-zinc-600 placeholder:text-sm"
  />
);

export default input;
