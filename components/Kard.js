import React, { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { hotelsCollection } from '../lib/controller';

function Kard() {
  const [Hotel, setHotel] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(hotelsCollection, (snapshot) => {
      const fetchedHotels = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHotel(fetchedHotels);
    });
    return unsubscribe;
  }, []);

  console.log(Hotel, 'Hotel');

  return (
    <div className='card'>
      <h2 className='title'>All hotels</h2>
    </div>
  );
}

export default Kard;

