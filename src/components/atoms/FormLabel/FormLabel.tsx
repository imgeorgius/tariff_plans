import classNames from "classnames";

import styles from "./FormLabel.module.sass";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel = ({ className, ...props }: LabelProps) => (
  <label className={classNames(styles.form__label, className)} {...props} />
);

export default FormLabel;
