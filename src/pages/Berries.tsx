import { useEffect, useState } from "react";
import { BerryService } from "../services/berry-service";
import { IBerry } from "../models/berry-model";

const Berries = () => {
  const berryService = new BerryService();

  const [loading, setLoading] = useState<boolean>(true);
  const [berries, setBerries] = useState<IBerry[]>([]);

  const fetchBerries = async () => {
    try {
      const response = await berryService.getBerries();
      setBerries(response.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBerries();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {berries.length === 0 ? (
            <p>No data found</p>
          ) : (
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
      )}
    </>
  );
};

export default Berries;
