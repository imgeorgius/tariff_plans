import styles from "./FormLabel.module.sass";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel = ({ ...props }: LabelProps) => (
  <label className={styles.form__label} {...props} />
);

export default FormLabel;
