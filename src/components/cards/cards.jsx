import React from 'react'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'

import CountUp from 'react-countup'
import './cards.css'
const Cards = ({ data:{confirmed, recovered, deaths, lastUpdate} }) => {

    
    
    if (!confirmed) {
        return "Loading"
    }
    const date=Date(lastUpdate).slice(0,24);
    
    return (
        <div className='container-card'>
            <Grid container spacing={3} justify="center" className='card'>
                <Grid item component={Card} xs={12} md={3} className='infected'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                separator=','
                                duration={2.5}
                            /></Typography>
                        <Typography color='textSecondary'>{date}</Typography>
                        <Typography variant='body2'>No Of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='recovered'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                        <CountUp
                        start={0}
                        end={recovered.value}
                        separator=','
                        duration={2.5}
                    />
                        </Typography>
                        <Typography color='textSecondary'>{date}</Typography>
                        <Typography variant='body2'>No Of Recoveries Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='deaths'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'> <CountUp
                        start={0}
                        end={deaths.value}
                        separator=','
                        duration={2.5}
                    /></Typography>
                        <Typography color='textSecondary'>{date}</Typography>
                        <Typography variant='body2'>No Of Death Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;