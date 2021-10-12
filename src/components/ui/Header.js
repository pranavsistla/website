import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import toplogo from '../../assets/toplogo.png'
import logo from '../../assets/Untitled design.png'

function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '2em',
      },
      logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        },
        marginLeft: '5em',
        marginTop: '1em'
      },
      logo: {
          height: '2em',
          [theme.breakpoints.down('md')]:{
            height: '1em'
          },
          [theme.breakpoints.down('xs')]:{
            height: '0.00005em'
          }
      },
      tabContainer: {
          marginLeft: 'auto'
      },
      tab: {
          ...theme.typography.tab,
          minWidth: 130,
          fontSize: '1rem',
          '&:hover': {
            color: '#ea80fc'
        } 
      },
      customizeToolbar: {
        minHeight: 128,
        marginRight: 70,
        marginLeft: 20
      }, 
      button: {
        ...theme.typography.button,
        marginLeft: '20px',
        height: '60px',
        width: '100px',
        '&:hover': {
            backgroundColor: '#ba68c8',
            color: 'black'
        }
      },
      indicator: {
        display: "flex",
        justifyContent: "center",
        width: '100%'
      },
      drawerIconContainer: {
        marginLeft: 'auto',
        marginRight: '-50px',
        Color: 'red',
        '&:hover': {
            backgroundColor: 'transparent'
        }
      },
      drawerIcon: {
          height: '40px',
          width: '40px',
          color: theme.palette.common.purple
      },
      drawer: {
          backgroundColor: theme.palette.common.dark
      },
      drawerItem: {
          ...theme.typography.tab,
          color: 'white',
          '&:hover': {
            color: '#ea80fc'
          }
      },
      drawerItemResume: {
        ...theme.typography.tab,
          backgroundColor: theme.palette.common.purple,
          '&:hover': {
            color: '#ea80fc'
          }
      },
      drawerItemSelected: {
          color: '#ba68c8'
      }
  }))

export default function Header(props) {
    const classes = useStyles()
    const theme = useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    const [openDrawer, setOpenDrawer] = useState(false)
    const [value, setValue] = useState(0)
    const [selectedSectionvalue, setSelectedSectionValue] = useState("#main_section")

    const handleChange = (e, value) => {
        
        if (value === 0){
            document.location.hash = "#main_section";
            setValue(0);
            setSelectedSectionValue (document.location.hash);
        } else if (value === 1){
            document.location.hash = "#about_section";
            setValue(value);
            setSelectedSectionValue (document.location.hash);
        } else if (value === 2){
            document.location.hash = "#experience_section";
            setValue(value);
            setSelectedSectionValue (document.location.hash);
        } else if (value === 3){
            document.location.hash = "#por_section";
            setValue(value);
            setSelectedSectionValue (document.location.hash);
        } else if (value === 4){
            document.location.hash = "#acad_section";
            setValue(value);
            setSelectedSectionValue (document.location.hash);
        } else if (value === 5){
            document.location.hash = "#contact_section";
            setValue(value);
            setSelectedSectionValue (document.location.hash);
        }
    }

useEffect(() => {
    if (document.location.hash === '#main_section' && value !== 0){
        setValue(0)
    }
    else if (document.location.hash === '#about_section' && value !== 1){
        setValue(1)
    }
    else if (document.location.hash === '#experience_section' && value !== 2){
        setValue(2)
    }
    else if (document.location.hash === '#por_section' && value !== 3){
        setValue(3)
    }
    else if (document.location.hash === '#acad_section' && value !== 4){
        setValue(4)
    }
    else if (window.location.pathname === '#contact_section' && value !== 5){
        setValue(5)
    }
}, [value])

    const tabs = (
        <React.Fragment>
            
            <Tabs 
                className = {classes.tabContainer} 
                value = {value} 
                onChange = {handleChange}
            >
                <Tab disableRipple style={{display:'none'}} ></Tab>
                <Tab disableRipple className = {classes.tab} label='About'></Tab>
                <Tab disableRipple className = {classes.tab} label='Experience'></Tab>
                <Tab disableRipple className = {classes.tab} label='PoRs'></Tab>
                <Tab disableRipple className = {classes.tab} label='Projects'></Tab>
                <Tab disableRipple className = {classes.tab} label='Contact'></Tab>

            </Tabs>
            <a href = 'https://drive.google.com/file/d/13uImGwU7JQ427dUd0kCMYmH5Rzcses1t/view?usp=sharing' target = '_blank'>
                <Button 
                    variant = 'outlined' 
                    color = 'secondary' 
                    className = {classes.button}
                >
                    Resume
                </Button>
            </a>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition = {!iOS} 
                disableDiscovery = {iOS}
                open = {openDrawer}
                onClose = {() => setOpenDrawer(false)}
                onOpen = {() => setOpenDrawer(true)}
                classes = {{paper: classes.drawer}}
            >
                <List>
                    <ListItem 
                        onClick = {() => {setOpenDrawer(false); setValue(0)}} 
                        divider 
                        button 
                        component = {Link} to = '/'
                        selected = {value === 0} 
                    >
                        <ListItemText 
                            className = {value === 0? [classes.drawerItemSelected, classes.drawerItem]:classes.drawerItem} 
                            disableTypography
                        >
                            About
                        </ListItemText>
                    </ListItem>  
                    <ListItem 
                        onClick = {() => {setOpenDrawer(false); setValue(1)}} 
                        divider 
                        button 
                        component = {Link} to = '/Experience'
                        selected = {value === 1} 
                    >
                        <ListItemText 
                            className = {value === 1? [classes.drawerItemSelected, classes.drawerItem]:classes.drawerItem} 
                            disableTypography
                        >
                            Experience
                        </ListItemText>
                    </ListItem>  
                    <ListItem 
                        onClick = {() => {setOpenDrawer(false); setValue(2)}} 
                        divider 
                        button 
                        component = {Link} to = 'Projects'
                        selected = {value === 2} 
                    >
                        <ListItemText className = {value === 2? [classes.drawerItemSelected, classes.drawerItem]:classes.drawerItem} disableTypography>Projects</ListItemText>
                    </ListItem>  
                    <ListItem 
                        onClick = {() => {setOpenDrawer(false); setValue(3)}}
                        divider 
                        button 
                        component = {Link} to = '/Contact'
                        selected = {value === 3}
                    >
                        <ListItemText className = {value === 3? [classes.drawerItemSelected, classes.drawerItem]:classes.drawerItem} disableTypography>Contact</ListItemText>
                    </ListItem>
                    <ListItem 
                        onClick = {() => {setOpenDrawer(false); setValue(4)}}
                        divider button 
                        component = {Link} 
                        to = '/Resume'
                        selected = {value === 4}
                        className = {value === 4? [classes.drawerItemSelected, classes.drawerItemResume]:classes.drawerItemResume}
                    >
                        <ListItemText  disableTypography>Resume</ListItemText>
                    </ListItem>  
                </List>
            </SwipeableDrawer>
            <IconButton className = {classes.drawerIconContainer} onClick = {() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className = {classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position = 'fixed' color = 'primary'>
                    <ToolBar className = {classes.customizeToolbar} disableGutters>
                        <div 
                            /*component = {Link} to = '/'*/
                            className = {classes.logoContainer} 
                            /*onClick = {() => handleChange(null, 0)}*/
                            /*</ToolBar>disableRipple*/
                        >
                            <img alt = 'top logo' src = {toplogo} width = '276' height = '75'/>
                        </div>
                        {matchesSM ? drawer : tabs}
                    </ToolBar>
                </AppBar>
            </ElevationScroll>
            <div className = {classes.toolbarMargin}/>   
        </React.Fragment>
    )
}