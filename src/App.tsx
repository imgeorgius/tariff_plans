import { useEffect, useState } from "react";
import { Tariff } from "@/types/tariffs";
import TariffPlans from "@/components/templates/TariffPlans/TariffPlans";
import { fetchTariffs } from "@/api/fetchTariffs";

function App() {
  const [tariffsData, setTariffsData] = useState<Tariff[]>([]);
  const [tariffsLoading, setTariffsLoading] = useState(false);
  const [tariffsLoadingError, setTariffsLoadingError] = useState(false);

  useEffect(() => {
    fetchTariffsData();
  }, []);

  const fetchTariffsData = () => {
    setTariffsLoading(true);
    setTariffsLoadingError(false);

    fetchTariffs()
      .then((data) => {
        setTariffsData(data);
      })
      .catch(() => {
        setTariffsLoadingError(true);
      })
      .finally(() => {
        setTariffsLoading(false);
      });
  };

  return (
    <TariffPlans
      tariffs={tariffsData}
      isLoading={tariffsLoading}
      isLoadingError={tariffsLoadingError}
      reFetchData={fetchTariffsData}
    />
  );
}

export default App;
