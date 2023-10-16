import { useState, useEffect } from 'react';

const useSequentialLoader = <T>(tasks: (() => Promise<T>)[]) => {
  const [loadedData, setLoadedData] = useState<T[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (currentIndex < tasks.length) {
        const result = await tasks[currentIndex]();
        setLoadedData((prevData) => [...prevData, result]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };

    fetchData();
  }, [currentIndex, tasks]);

  return {
    loadedData,
    startNextTask: () => setCurrentIndex(currentIndex + 1),
  };
};

export default useSequentialLoader;
