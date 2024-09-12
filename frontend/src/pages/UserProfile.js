import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../components/AuthContext';
import Card from '../components/Card';
import MetricData from '../components/MetricData';

export default function UserProfile() {
  const [data, setData] = useState([])
  const dataLoaded = useRef(false)
  const { login } = useContext(AuthContext);

  const readCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('code');
    return myParam
  }
  useEffect(() => {
    if (dataLoaded.current) {
      return
    }
    dataLoaded.current = true
    axios.get(`http://localhost:3000/get-data?code=${readCode()}`, {
      withCredentials: true,
    })
      .then((response) => {
        setData(response.data)
        login()
      })
      .catch((e) => {
        console.log(e)
      })
  }, [login])


  console.log(data)
  const [showMetricData, setShowMetricData] = useState(false);
  const [metricValue, setMetricValue] = useState('')

  const kudos = data.map((activity) => {
    return activity.kudos_count
  })
  const maxKudo = Math.max(...kudos)
  console.log(maxKudo)

  const metrics = [
    {
      label: 'Kudo',
      value: maxKudo
    },
    {
      label: 'Elevation',
      value: 'maxElevation'
    },
    {
      label: 'Speed',
      value: 'maxSpeed'
    }
  ]

  const metricsLabels = metrics.map((metric) => metric.label)

  function handleClick(metric) {
    setShowMetricData(true)
    const foundMetric = metrics.find((obj) => {
      return obj.label === metric
    })
    setMetricValue(foundMetric.value)
  }

  return (
    <div className='text-center'>
      <div className='text-4xl font-bold mt-10 text-white'> Welcome! please choose metric </div>
      <div className='text-white flex flex-row  gap-10 justify-center items-center mt-20'>
        {metricsLabels.map((metric, index) => (
          <Card onClick={() => { handleClick(metric) }} key={index} name={metric} />
        ))}
      </div>
      {showMetricData && <MetricData metricValue={metricValue} />}
    </div >
  )
}