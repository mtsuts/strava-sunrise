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
import Dashboard from '../components/Dashboard';


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

  // card component parts
  const [cardData, setCardData] = useState(false)
  let showCardData = false
  const handleCardClick = () => {
    setCardData(!cardData)
  }

  return <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, marginTop: 10 }}>
      <Card name='Speed line chart' onClick={handleCardClick} />
    </Box>
    {cardData && <ActivityLineChart data={activities} />}
    <Dashboard/>
  </ThemeProvider>
}