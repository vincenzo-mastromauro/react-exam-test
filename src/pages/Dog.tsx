import { useEffect, useState } from "react";
import { IDogResponse } from "../models/dog-model";
import { DogService } from "../services/dog-service";

export const Dog = () => {
  const dogService = new DogService();

  const [dog, setDog] = useState<IDogResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDog = async () => {
    setLoading(true);
    try {
      const response = await dogService.getDogs();
      setDog(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleDog();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && dog && (
        <>
          <h1>Dog List</h1>
          <img
            src={dog.message}
            alt='dog'
          />
        </>
      )}
    </>
  );
};
