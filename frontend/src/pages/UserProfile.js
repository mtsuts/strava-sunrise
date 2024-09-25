import React, { useState, useEffect, useRef, useContext } from 'react';
import * as d3 from 'd3'
import { AppContext } from '../components/AppContext';
import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { GetActivities } from '../api/api'
import { useSearchParams } from 'react-router-dom';
import theme from '../utils/themes';
import { fromMetersSecondToKmsHour, fromMetersToKms, dateFormatter } from '../utils/metricsUpdates'
import ActivityLineChart from '../components/vizualizations/ActivityLineChart';


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

    const mainData = data?.data || []
    const activities = mainData.filter((activity) => activity.type === 'Ride').map((activity) => {
      return {
        ...activity,
        average_speed: fromMetersSecondToKmsHour(activity.average_speed),
        distance: fromMetersToKms(activity.distance),
        start_date: dateFormatter(activity.start_date),
      }
    })
    const sumOfElevations = activities.map((activity) => activity.average_speed).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    console.log(activities)

  return <ThemeProvider theme={theme}>
    <Box sx={{ color: theme.palette.background.main.deepPurple600 }} className='text-center text-4xl p-5'>Your average speed across last 10 activities</Box>
    <ActivityLineChart data={activities} />
  </ThemeProvider>
}