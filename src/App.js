import React, { useEffect, useState } from 'react'
import HomePage from './container/HomePage';
import Loading from './container/Loading';
const LoadingWithHomepage = Loading(HomePage);

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    let dataSet = [
      { id: 101, name: 'ashish' },
      { id: 102, name: 'ishan' }
    ];
    setLoading(true);
    setTimeout(() => {
      setLoading(false); setData(dataSet);
    }, 2500)
  }, [])

  return (
    <>
      <LoadingWithHomepage isLoading={loading} data={data} />
    </>
  )
}
