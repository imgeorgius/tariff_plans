import classNames from "classnames";
import Button from "@/components/atoms/Button";
import Spinner from "@/components/atoms/Spinner";

import styles from "./ContentLoading.module.scss";

type ContentLoadingProps = {
  isLoading: boolean;
  loadingOverlay?: boolean;
  isError?: boolean;
  reFetchData?: () => void;
  label?: string;
  children?: React.ReactNode;
};

const ContentLoading: React.FC<ContentLoadingProps> = ({
  isError,
  isLoading,
  reFetchData,
  loadingOverlay,
  label,
  children,
}) => {
  return isError ? (
    <div className={styles.loading__wrap__error}>
      <p>An error occured trying to load the resource</p>
      {reFetchData && <Button onClick={reFetchData}>Retry</Button>}
    </div>
  ) : (
    <>
      {loadingOverlay ? (
        <div
          className={classNames(styles.loading__overlay, {
            [styles["loading__overlay--loading"]]: isLoading,
          })}
        >
          <Spinner />
          {children}
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className={styles.loading__wrap}>
              <Spinner width={30} height={30} />
              {label && <p>{label}</p>}
            </div>
          ) : (
            children
          )}
        </>
      )}
    </>
  );
};

export default ContentLoading;
