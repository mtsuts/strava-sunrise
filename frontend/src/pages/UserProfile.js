import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../components/AppContext';
import { GetActivities } from '../api/api'
import { useSearchParams } from 'react-router-dom';
import { fromMetersSecondToKmsHour, fromMetersToKms } from '../utils/metricsUpdates'



export default function UserProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, setData } = useContext(AppContext)
  const dataLoaded = useRef(false)
  useEffect(() => {
    if (dataLoaded.current) {
      return
    }
    dataLoaded.current = true
    GetActivities()
      .then((data) => {
        setSearchParams({})
        setData(data)
        localStorage.setItem('token', data.accessToken)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  if (data) {
    const mainData = data?.data || []
    const activities = mainData.filter((activity) => activity.type === 'Ride').map((activity) => {
      return {
        ...activity,
        average_speed: fromMetersSecondToKmsHour(activity.average_speed),
        distance: fromMetersToKms(activity.distance)
      }
    })
    console.log(activities)
  }
  return <div className='text-center text-red100 text-6xl p-5'>Here you will see your data!</div>
}