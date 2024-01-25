import React, { useEffect, useState } from 'react'
import axios from "axios"

const UseFetchData = () => {
     const [data, setData] = useState([])

     const fetchData = async () => {
          const response = await axios.get("http://localhost:3000/")
          setData(response.data)
     }

     useEffect(() => {
          fetchData()
     }, [])
     const refetchData = fetchData()
  return {data, setData, refetchData}
}

export default UseFetchData
