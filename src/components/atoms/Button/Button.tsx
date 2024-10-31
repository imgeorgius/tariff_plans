import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "m" | "s";
  outline?: boolean;
  icon?: IconProp;
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  size,
  outline,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        styles.button,
        styles[`button__${size}`],
        {
          [styles.button__outline]: outline,
        }
      )}
      {...rest}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
