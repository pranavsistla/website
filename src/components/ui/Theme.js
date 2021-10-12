import { createTheme } from '@material-ui/core/styles'

const arcBlue = '#1976d2'
const arcDark = '#000000'
const arcPurple = '#ba68c8'

export default createTheme({
    palette: {
        common:{
            blue: `${arcBlue}`,
            dark: `${arcDark}`,
            purple: `${arcPurple}`
        },
        primary:{
            main:`${arcDark}`
        },
        secondary:{
            main:`${arcPurple}`
        }
    },
    typography: {
        tab: {
            fontFamily:'Inter',
            fontWeight: 500,
            textTransform: 'none',
        },
        button: {
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 300
        },
        body1: {
            fontFamily: 'Roboto Mono',
            fontWeight: 400 
        },
        body2: {
            fontFamily: 'Roboto',
            fontWeight: 900
        },
        body3: {
            fontFamily: 'Roboto',
            fontWeight: 900,
            color: '#9ba8bb'
        },
        body4: {
            fontFamily: 'Roboto',
            color: '#9ba8bb',
            fontWeight: 300
        },
        heading: {
            fontFamily: 'Inter',
            fontWeight: 400
        },
        contact: {
            fontFamily: 'Roboto',
            fontWeight: 700
        },
        contactcompany: {
            fontFamily: 'Roboto Mono',
            fontWeight: 300
        },
        about: {
            fontFamily: 'Roboto',
            color: 'white',
            fontWeight: 300
        }
    }
})