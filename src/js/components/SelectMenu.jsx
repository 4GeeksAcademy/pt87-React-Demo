const SelectOption = ({ value = "", label = "" }) => {
  return <option value={value}>{label}</option>;
};

const SelectMenu = ({ options = [], value = "", onChange = () => null }) => {
  return (
    <select
      name=""
      id=""
      className="form-select"
      value={value}
      onChange={onChange}
    >
      {options.map((opt) => (
        <SelectOption value={opt.value} label={opt.label} />
      ))}
    </select>
  );
};

export default SelectMenu;
