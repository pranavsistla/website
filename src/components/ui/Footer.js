import React from 'react'
import { makeStyles } from '@material-ui/core'
import Theme from './Theme'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.dark,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('md')]: {
            width: '15em'
        }
    },
    maincontainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Inter',
        fontSize: '0.75rem',
        fontWeight: 500,
        textDecoration: "none"    
    },
    gridItem: {
        margin: '3em'
    }
})) 

export default function Footer() {
    const classes = useStyles()

    return (
        <footer className = {classes.footer}>
            <Hidden mdDown>
                <Grid container justify = 'center' className = {classes.maincontainer}>
                        <Grid item className = {classes.gridItem}>
                            <Grid container direction = 'column' spacing = {2}>
                                <Grid item component = {Link} to = '/' className = {classes.link}>
                                    About
                                </Grid>
                            </Grid>
                        </Grid>
                    <Grid item className = {classes.gridItem}>
                        <Grid container direction = 'column' spacing = {2}>
                            <Grid item component = {Link} to = '/Experience' className = {classes.link}>
                                Experience
                            </Grid>
                            <Grid item component = {Link} to = '/Experience' className = {classes.link}>
                                Merca
                            </Grid>
                            <Grid item component = {Link} to = '/Experience' className = {classes.link}>
                                VoluntHere
                            </Grid>
                            <Grid item component = {Link} to = '/Experience' className = {classes.link}>
                                180 Degrees Consulting
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className = {classes.gridItem}>
                        <Grid container direction = 'column' spacing = {2}>
                            <Grid item component = {Link} to = '/Projects' className = {classes.link}>
                                Projects
                            </Grid>
                            <Grid item component = {Link} to = '/Projects' className = {classes.link}>
                                Atypial Advantage
                            </Grid>
                            <Grid item component = {Link} to = '/Projects' className = {classes.link}>
                                Schools of Equality
                            </Grid>
                            <Grid item component = {Link} to = '/Projects' className = {classes.link}>
                                Karing Frontiers
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className = {classes.gridItem}>
                        <Grid container direction = 'column' spacing = {2}>
                            <Grid item component = {Link} to = '/Contact' className = {classes.link}>
                                Contact
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className = {classes.gridItem}>
                        <Grid container direction = 'column' spacing = {2}>
                            <Grid item component = {Link} to = '/Resume' className = {classes.link}>
                                Resume
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt = 'black decorative slash' src = {footerAdornment} className = {classes.adornment}
            />
        </footer>
    )
}
