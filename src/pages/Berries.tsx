import { useEffect, useMemo, useState } from "react";
import { BerryService } from "../services/berry-service";
import { IBerry } from "../models/berry-model";

const Berries = () => {
  const berryService = new BerryService();

  const [loading, setLoading] = useState<boolean>(false);
  const [berries, setBerries] = useState<IBerry[]>([]);

  const memoizedBerries = useMemo(() => berryService.getBerries(), []);

  const handleBerries = async () => {
    setLoading(true);
    try {
      const response = await memoizedBerries;
      setBerries(response.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleBerries();
  }, [memoizedBerries]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && berries.length === 0 && <p>No data found</p>}
      {!loading && berries.length > 0 && (
        <>
          <h1 className='text-sky-400 text-center text-9xl'>Berry List</h1>
          <ul className='flex flex-wrap justify-center gap-16'>
            {berries.map((berry) => (
              <li key={berry.name}>
                <p>{berry.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Berries;
