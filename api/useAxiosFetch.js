import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (endpoint = "all") => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.request(`https://restcountries.com/v3.1/${endpoint}`)
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData();
    }, [])

    return { data, isLoading, error }
}

export default useAxiosFetch