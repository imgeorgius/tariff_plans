import classNames from "classnames";

import styles from "./FormGroup.module.scss";

type FormGroupProps = {
  className?: string;
  children: React.ReactNode;
};

const FormGroup: React.FC<FormGroupProps> = ({ children, className }) => (
  <div className={classNames(styles.form__group, className)}>{children}</div>
);

export default FormGroup;
