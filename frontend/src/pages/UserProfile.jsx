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
import Card from '../components/Card';

export default function UserProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, setData } = useContext(AppContext)
  const dataLoaded = useRef(false)

  // load data
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

  // data manipulations
  const mainData = data?.data || []
  const activities = mainData.map((activity) => {
    return {
      ...activity,
      average_speed: fromMetersSecondToKmsHour(activity.average_speed),
      distance: fromMetersToKms(activity.distance),
      start_date: dateFormatter(activity.start_date),
    }
  })

  return <ThemeProvider theme={theme}>
    <Box sx={{ textAlign: 'center', fontSize: 20 }}>
      <Box sx={{ marginTop: 2, color: theme.palette.background.main.deepPurple600, fontSize: 30, fontWeight: 'bold' }}> My last 20 Activities</Box>
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(4, 1fr)', px: 16, py: 6 }}>
        {activities.map((activity, index) => {
          return (
            <Card key={index} name={activity.name} />
          )
        })}
      </Box>
    </Box>
  </ThemeProvider>
}