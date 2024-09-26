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
  const handleCardClick = () => {
    setCardData(!cardData)
  }

  return <ThemeProvider theme={theme}>
    <Box sx={{ textAlign: 'center', fontSize: 20 }}>
      <Box sx={{ marginTop: 2, color: theme.palette.background.main.deepPurple600, fontSize: 30 }}> My Profile</Box>
      <Box sx={{ marginTop: 3, display: 'grid', gap: 2, gridTemplateColumns: 'repeat(4, 1fr)', px: 16 }}>
        {activities.map((activity, index) => {
          return (
            <Card key={index} name={activity.name} />
          )
        })}
      </Box>
    </Box>
    {/* {cardData && <ActivityLineChart data={activities} />} */}
  </ThemeProvider>
}