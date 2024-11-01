import { Tariff } from "@/types/tariffs";
import Select from "@/components/atoms/Select/Select";
import TariffCard from "@/components/organisms/TariffCard/TariffCard";

import styles from "./TariffPlans.module.scss";
import { useState } from "react";
import ContentLoading from "@/components/molecules/ContentLoading/ContentLoading";
import Button from "@/components/atoms/Button";
import { Filter, Sort, filterOptions, sortOptions } from "@/constants/Tariffs";
import { useTariffsFiltered } from "./hooks";

type TariffPlansProps = {
  tariffs: Tariff[];
  isLoading: boolean;
  isLoadingError?: boolean;
  reFetchData?: () => void;
};

const TariffPlans = ({
  tariffs,
  isLoading,
  isLoadingError,
  reFetchData,
}: TariffPlansProps) => {
  const [filter, setFilter] = useState<string>();
  const [sort, setSort] = useState<string>();

  const tariffsFiltered = useTariffsFiltered(tariffs, sort, filter);

  const onResetFilters = () => {
    setFilter("");
    setSort("");
  };

  return (
    <div>
      <div className={styles.filters__row}>
        <Button onClick={onResetFilters}>Reset</Button>
        <Select
          value={filter}
          options={filterOptions}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Choose filter"
        />
        <Select
          value={sort}
          options={sortOptions}
          onChange={(e) => setSort(e.target.value)}
          placeholder="Choose sorting"
        />
      </div>

      <ContentLoading
        isLoading={isLoading}
        isError={isLoadingError}
        reFetchData={reFetchData}
      >
        {tariffsFiltered.map((tariff) => (
          <TariffCard key={tariff.id} tariff={tariff} />
        ))}
      </ContentLoading>
    </div>
  );
};

export default TariffPlans;
