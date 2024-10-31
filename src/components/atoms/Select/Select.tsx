import styles from "./Select.module.scss";

type Option = {
  value: string;
  label: string;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

const Select = ({ options, ...props }: SelectProps) => (
  <select className={styles.select} {...props}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;
