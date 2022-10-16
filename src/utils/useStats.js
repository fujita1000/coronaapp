import { useState, useEffect } from "react"

const useStats = url => {
  const [stats, setStats] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  useEffect(() => {
    console.log("mounting or fetching")
    async function fetchData() {
      console.log("fetching data")
      setLoading(true)
      setError()
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err))
      setStats(data)
      setLoading(false)
    }
    fetchData()
  }, [url])
  return { stats, loading, error }
}

export default useStats
