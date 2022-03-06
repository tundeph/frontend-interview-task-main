import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const useFetch = (url) => {
  const [data, setData] = useState()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      setIsPending(true)
      try {
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted")
        } else {
          setIsPending(false)
          setError("Could not load data")
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}

//propType checking

useFetch.propTypes = {
  url: PropTypes.string,
}

export { useFetch }
