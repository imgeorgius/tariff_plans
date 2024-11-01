import classNames from "classnames";

import styles from "./Select.module.scss";

type Option = {
  value: string;
  label: string;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  className,
  placeholder,
  ...props
}) => (
  <select className={classNames(styles.select, className)} {...props}>
    {placeholder && <option>{placeholder}</option>}
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;
