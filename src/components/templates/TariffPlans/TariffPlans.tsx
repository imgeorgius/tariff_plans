import Select from "../../atoms/Select/Select";
import TariffCard from "../../organisms/TariffCard/TariffCard";

import styles from './TariffPlans.module.scss';

const sortOptions = [
  { value: "asc", label: "Price Ascending" },
  { value: "desc", label: "Price Descending" },
];

const TariffPlans = () => {
  return (
    <div>
      <div className={styles.filters__row}>
        <Select options={sortOptions} />
        <Select options={sortOptions} />
      </div>

      <TariffCard />
      <TariffCard />
      <TariffCard />
    </div>
  );
};

export default TariffPlans;
