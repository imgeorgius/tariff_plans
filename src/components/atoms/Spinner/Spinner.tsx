import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import styles from "./Spinner.module.scss";

type SpinnerProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

const Spinner = ({
  className,
  width = 20,
  height = 20,
  color,
}: SpinnerProps) => (
  <FontAwesomeIcon
    className={`${styles.spinnerLoader} ${className ? className : ""}`}
    style={{ width: `${width}px`, height: `${height}px` }}
    color={color}
    icon={faCircleNotch}
    spin
  />
);

export default Spinner;
