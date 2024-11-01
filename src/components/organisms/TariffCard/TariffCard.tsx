import { memo } from "react";
import Button from "@/components/atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUpload,
  faDownload,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./TariffCard.module.scss";
import { Tariff } from "@/types/tariffs";

const Icon = () => <FontAwesomeIcon icon={faCheck} color="green" />;

type TariffCardProps = {
  tariff: Tariff;
};

const TariffCard = ({ tariff }: TariffCardProps) => (
  <div className={styles.tariff}>
    <div className={styles.tariff__id}>{tariff.id}</div>

    <div className={styles.tariff__body}>
      <div className={styles.tariff__left}>
        <h6 className={styles.tariff__name}>{tariff.name}</h6>
      </div>

      <div className={styles.tariff__specs}>
        <div className={styles.tariff__spec}>
          <span className={styles.tariff__spec__title}>Download</span>
          <div className={styles.tariff__spec__info}>
            <span className={styles.tariff__spec__info__icon}>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <span className={styles.tariff__spec__info__value}>
              {tariff.downloadSpeed} Mbit/s
            </span>
          </div>
        </div>

        <div className={styles.tariff__spec}>
          <span className={styles.tariff__spec__title}>Upload</span>
          <div className={styles.tariff__spec__info}>
            <span className={styles.tariff__spec__info__icon}>
              <FontAwesomeIcon icon={faUpload} />
            </span>
            <span className={styles.tariff__spec__info__value}>
              {tariff.uploadSpeed} Mbit/s
            </span>
          </div>
        </div>
      </div>

      {tariff.benefits.length && (
        <div className={styles.tariff__benefits}>
          {tariff.benefits.map(({ id, name }) => (
            <div key={id} className={styles.tariff__benefits__item}>
              <Icon /> {name}
            </div>
          ))}
        </div>
      )}

      <div className={styles.tariff__right}>
        <span className={styles.tariff__price}>{tariff.price}€</span>
        <Button className={styles.tariff__button} outline icon={faChevronRight}>
          To tarif
        </Button>
      </div>
    </div>
  </div>
);

export default memo(TariffCard);
