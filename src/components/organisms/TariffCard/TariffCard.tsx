import Button from "../../atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUpload,
  faDownload,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./TariffCard.module.scss";

const Icon = () => <FontAwesomeIcon icon={faCheck} color="green" />;

const TariffCard = () => (
  <div className={styles.tariff}>
    <div className={styles.tariff__id}>1</div>

    <div className={styles.tariff__body}>
      <div className={styles.tariff__left}>
        <h6 className={styles.tariff__name}>Tariff Name</h6>
      </div>

      <div className={styles.tariff__specs}>
        <div className={styles.tariff__spec}>
          <span className={styles.tariff__spec__title}>Download</span>
          <div className={styles.tariff__spec__info}>
            <span className={styles.tariff__spec__info__icon}>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <span className={styles.tariff__spec__info__value}>16 Mbit/s</span>
          </div>
        </div>

        <div className={styles.tariff__spec}>
          <span className={styles.tariff__spec__title}>Upload</span>
          <div className={styles.tariff__spec__info}>
            <span className={styles.tariff__spec__info__icon}>
              <FontAwesomeIcon icon={faUpload} />
            </span>
            <span className={styles.tariff__spec__info__value}>8 Mbit/s</span>
          </div>
        </div>
      </div>

      <div className={styles.tariff__benefits}>
        <div className={styles.tariff__benefits__item}>
          <Icon /> Tariff benefit 1
        </div>
        <div className={styles.tariff__benefits__item}>
          <Icon /> Tariff benefit 2
        </div>
        <div className={styles.tariff__benefits__item}>
          <Icon /> Tariff benefit 3
        </div>
      </div>

      <div className={styles.tariff__right}>
        <span className={styles.tariff__price}>234.51$</span>
        <Button className={styles.tariff__button} outline icon={faChevronRight}>
          To tarif
        </Button>
      </div>
    </div>
  </div>
);

export default TariffCard;
