import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ui/ButtonArrow'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core';
import orb from '../assets/orb.gif'
import logo from '../assets/Untitled design.png'
import { useState, useEffect } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import logodegrees from '../assets/180-website.png'
import logoVH from '../assets/VH-website.png'
import {Scroll} from './ui/Scrollobj'
import me from '../assets/me.png'


var currSection = 1;
if (document.location.hash === '') {currSection=0};


const useStyles = makeStyles(theme => ({
    body1: {
        ...theme.typography.body1,
        fontSize: 20,
        color: '#ba68c8'
    },
    body2: {
        ...theme.typography.body2,
        fontSize: 82,
        color: 'white'
    },
    body3: {
        ...theme.typography.body3,
        fontSize: 30
    },
    body4: {
        ...theme.typography.body4,
        fontSize: 18,
        marginBottom: '0.3em',
        lineHeight: 1.5
    },
    button: {
        ...theme.typography.button,
        height: '60px',
        width: '140px',
        '&:hover': {
            backgroundColor: '#ba68c8',
            color: 'black'
        }
    },
    heading: {
        ...theme.typography.heading,
        fontSize: 37,
        color: 'white',
        marginTop: '0.2em',
        marginLeft: '1em'
    },
    heading1: {
        ...theme.typography.heading,
        fontSize: 37,
        color: 'white',
        marginTop: '0.2em'
    },
    date: {
        ...theme.typography.body4,
        fontSize: 17,
        marginTop: '0.6em',
        fontWeight: 300
    },
    subheading: {
        ...theme.typography.heading,
        fontSize: 30,
        color: 'white',
        marginTop: '0.19em',
    },
    subheading2: {
        ...theme.typography.body1,
        fontSize: 17,
        color: '#ba68c8'
    },
    subbody: {
        ...theme.typography.body4,
        fontSize: 17,
        marginBottom: '0.3em',
        marginTop: '0.6em',
        color: 'white',
        lineHeight: 1.5
    },
    subbody2: {
        ...theme.typography.body4,
        fontSize: 15,
        marginBottom: '0.1em',
        marginTop: '2.5em',
        color: '#ba68c8',
        fontFamily: 'Roboto Mono'
    },
    headingNumber: {
        ...theme.typography.body1,
        fontSize: 40,
        fontWeight: 400,
        color: '#ba68c8'
    },
    tabContainer: {
        marginRight: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        width: 230,
        minWidth: 130,
        fontSize: '1rem',
        fontFamily: 'Roboto Mono',
        alignContent: 'flex-end',
        color: 'white',
        '&:hover': {
            color: '#ea80fc'
        }
    },
    contact: {
        ...theme.typography.contact,
        fontSize: 25,
        color: 'white',
        marginBottom: '0.25em',
        marginTop: '1.5em'
    },
    contactmerca: {
        ...theme.typography.contactcompany,
        fontSize: 25,
        color: '#57bbd2'
    },
    contact180dc: {
        ...theme.typography.contactcompany,
        fontSize: 25,
        color: '#72a533'
    },
    contactVH: {
        ...theme.typography.contactcompany,
        fontSize: 25,
        color: '#38b6ff'
    },
    contactemail: {
        ...theme.typography.contactcompany,
        fontSize: 25,
        color: '#ba68c8'
    },
    mainSection1:{
        paddingTop: (currSection === 0)?'1em':'1.2em'
    },
    mainSection2:{
        paddingTop:'8em'
    }
}))

export default function LandingPage() {

    const Aurum = (
        <div>
            Our current client Aurum Ayurveda, is a Pan-India tutoring agency for Ayurveda & Modern Coverage.
            Our team was requested to build an
            online interactive platform
            , for students in tier 2 and 3 cities, preparing for BAMS & AIAPGET to take
            tests and watch lectures
            from tutors across India.
        </div>
    )
    const AurumHeader = (
        <div>
            Aurum Ayurveda
        </div>
    )
    const date = (
        <div>
            November 2021 - Present, Hyderabad, India
        </div>
    )
    const skills = (
        <div style={{ fontWeight: 400 }}>
            ReactJS | NodeJS | ExpressJS | Material UI | Mongo DB | Product Management
        </div>
    )

    const AboutM = (
        <div>
            Merca is an analytics and IT services company that focuses on providing data science and software development
            services to small/medium sized businesses, NPOs, NGOs and educational institutions.
            <ul>
                <li><a style={{ color: '#ba68c8', cursor: 'pointer' }} href='https://www.merca.in/' target='_blank'>Click here</a> to visit our website</li>
                <li><a style={{ color: '#ba68c8', cursor: 'pointer' }} href='https://merca-analytics.medium.com/?' target='_blank'>Click here</a> to visit our blog</li>
            </ul>
        </div>
    )
    const MHeader = (
        <div>
            About Merca
        </div>
    )
    const dateM = (
        <div>
            November 2021 - Present, Hyderabad, India
        </div>
    )

    const skillsM = (
        <div style={{ fontWeight: 400 }}>
            Web & App Dev | Data Science | Tech Solutions
        </div>
    )

    const AA = (
        <div>
            Atypical Advantage is a platform to sell paintings and artistic products made by disabled people.
            Our team has made successful efforts towards improving their SEO and digital presence.
            An analytical approach was taken to supplement these efforts.
            <ul>
                <li>Analyzing the results of the existing efforts and predicting best practices based on the
                    data points and qualitative analysis of the same.</li>
                <li>Machine Learning algorithms were made to augment their business procedures such as twitter hashtag algorithms and image recognition algorithms</li>
                <li>Dashboards were made using Google Data Studio of the insights obtained to make important business decisions.</li>
            </ul>
        </div>
    )
    const AAHeader = (
        <div>
            Atypical Advantage | Data Analytics Lead
        </div>
    )
    const dateAA = (
        <div>
            September 2021 - November 2021, Pune, India
        </div>
    )

    const skillsAA = (
        <div style={{ fontWeight: 400 }}>
            Python | Pandas | SQL | Plotly | Google Analytics | Google Data Studio
        </div>
    )

    const SOE = (
        <div>
            Schools of Equality is an initiative to promote equality and diversity among students in schools.
            My team was tasked to measure the impact of their program and develop metrics to analyze growth.
            <ul>
                <li>Obtained clear understanding of their goal to develop impact metrics and built a framework to analyze impact.</li>
                <li>Developed an interactive dashboard
                    to visualize these metrics
                    using python, plotly and dash
                    . This platform will be utilized by their team across all
                    their programs Pan-India.
                </li>
            </ul>
        </div>
    )
    const SOEHeader = (
        <div>
            Schools Of Equality | Project Lead
        </div>
    )
    const dateSOE = (
        <div>
            October 2021 - Present, Chennai, India
        </div>
    )

    const skillsSOE = (
        <div style={{ fontWeight: 400 }}>
            Python | Plotly | Dash | Strategy & Operations
        </div>
    )

    const KF = (
        <div>
            The purpose of Karing Frontiers is to support access to higher education among migrant and 
            refugee youth on the Thai-Burmese border by providing schools within refugee camps or 
            ethnic minority states the necessary financial resources.
            <ul>
                <li>Performed a detailed analysis on the donor database using Python (NumPy, Pandas, Seaborn) to 
                    identify and forecast the ideal target donor group, which streamlined the clients’ donor acquisition 
                    and fundraising efforts.</li>
                <li>Identified key metrics to be cognizant of the current donor database and provide descriptive analysis. 
                    Provided end-to-end descriptive analysis with SQL using the identified metrics to garner key insights 
                    and provide strategies to facilitate crucial business decisions.
                </li>
                <li>Through our efforts, the client was able to understand the importance of analytics in the domain of 
                        fundraising. We provided free analytics services that are usually paid subscription products. 
                </li>
            </ul>
        </div>
    )
    const KFHeader = (
        <div>
            Karing Frontiers | Project Co-Lead
        </div>
    )
    const dateKF = (
        <div>
            August 2021 - Septermber 2021, Hong Kong
        </div>
    )

    const skillsKF = (
        <div style={{ fontWeight: 400 }}>
            Python | MS SQL | Strategy
        </div>
    )

    const Forrest = (
        <div>
            Analyzed multiple avenues to generate more income for economically stricken farmers such as
            govt. schemes and carbon trading.
            <ul>
                <li>Provided tools and strategy for creating an effective online presence to help secure more projects. </li>
                <li>Analysed avenues to generate alternative incomes for poor farmers.</li>
                <li> Provided them with a comprehensive
                    framework to launch a national campaign for promoting agroforestry.</li>
                <li>End to end framework on carbon-trading for farmers to implement.</li>
            </ul>
        </div>
    )
    const FHeader = (
        <div>
            Forrest-India | Project Lead
        </div>
    )
    const dateF = (
        <div>
            August 2020 - January 2021, Pune, India
        </div>
    )

    const skillsF = (
        <div style={{ fontWeight: 400 }}>
            Python | MS SQL | Strategy
        </div>
    )

    const TFI = (
        <div>
            Lead a team of 10 consultants to formulate a strategy to target the most appropriate student groups for the
            TFI fellowship program. Due to the recent onset of Covid-19, we improved their digital marketing presence.
            <ul>
                <li>Provided tools and strategy for creating an effective online presence to help secure more students. </li>
                <li>Analysed which categories of students would be most receptive to the program using descriptive analytics</li>
                <li>Provided them with a comprehensive
                    framework to launch a national campaign for promotion of their program</li>
                <li>End to end framework to tap into colleges based on the descriptive analysis</li>
            </ul>
        </div>
    )
    const TFIHeader = (
        <div>
            Teach For India | Project Lead
        </div>
    )
    const dateTFI = (
        <div>
            August 2020 - January 2021, Mumbai, India
        </div>
    )
    const skillsTFI = (
        <div style={{ fontWeight: 400 }}>
            Strategy | Marketing | Growth Framworks | R | Excel
        </div>
    )

    const AP = (
        <div>
            <ul>
                <li>Helped the client build a strong online presence through digital marketing strategies across more than 5
                    different platforms.</li>
                <li>Identified the top 7 most profitable target demographics globally using multiple regression
                    on more than 20 key factors across geographies and age groups in order to get the best return on cost of
                    marketing.</li>
                <li>Provided them with a comprehensive
                    framework to launch a national campaign for promotion of their program</li>
                <li> A comprehensive table of potential B2B partners was also created along with collaboration
                    strategies for the top 12 ones.</li>
            </ul>
        </div>
    )
    const APHeader = (
        <div>
            Alternative Peru | Consultant
        </div>
    )
    const dateAP = (
        <div>
            June 2020 - September 2020, Peru, South America
        </div>
    )

    const skillsAP = (
        <div style={{ fontWeight: 400 }}>
            Strategy | Marketing | Operations | Growth Framworks
        </div>
    )
    const About = (
        <div>
            <ul>
                <li>Led and co-lead 6 international and domestic projects with net performance score of 9.8</li>
                <li>Initiated and led the Data Analytics division consisting of 10 members.</li>
                <li>Built Machine Learning models and provided data storage frameworks to improve operational efficiency.</li>
                <li>Assisted clients with developing business frameworks, developing
                    local and national growth strategies andestablishing global sales channels in the B2B market.</li>
                <li>Focused on improving clients' margins by increasing efficiency while boosting revenue via marketing.</li>
                <li>Received personal letters of recommendations from founders of client organisations.</li>
            </ul>
        </div>
    )
    const AboutHeader = (
        <div>
            About 180DC
        </div>
    )
    const dateAB = (
        <div>
            January 2021 - Present as Consulting Director
        </div>
    )

    const skillsAB = (
        <div style={{ fontWeight: 400 }}>
            Data Science | Strategy | Operations | Marketing | Product
        </div>
    )

    const AboutVH = (
        <div>
            VoluntHere is the largest volunteering platform for university students. My team came up with a platform to seamlessly
            connect NGOs that require volunteers/interns and interested university students ready to avail paid internships
            or volunteering opportunities.
            <ul>
                <li>We have connected 821 volunteers/interns, have 52 NGO partners,and presence in 30 campuses pan-India.</li>
                <li>Provided internship as Outreach Managers, Outreach Associates, Social Media Managers and Web Developers to 20+ interns within VoluntHere</li>
                <li>Currently tapping into schools and other educational institutions.</li>
                <li>Won 3 social entrepreneurship competitions at IIM Khozikode, IIT Madras, & IIT Delhi </li>
                <li><a style={{ color: '#ba68c8', cursor: 'pointer' }} href='https://volunthere.in/' target='_blank'>Click here</a> to visit our website</li>
            </ul>
        </div>
    )
    const HeaderVH = (
        <div>
            About VoluntHere
        </div>
    )
    const dateVH = (
        <div>
            November 2020 - Present
        </div>
    )
    const skillsVH = (
        <div style={{ fontWeight: 400 }}>
            Marketing | Business | Product | Graphic Design | ReactJS
        </div>
    )

    const AboutCovid = (
        <div>
            Partnered with Covid Relief Alliance and gathered volunteers across India to verfiy availability of resources such as
            hospital beds, oxygen cyliders, masks and medicines on a realtime database. This database was sent to frontline workers so that patients' needs
            can be availed on time.
            <ul>
                <li>We have connected with over 50 volunteers to help us with this intiative.</li>
                <li>Reached multiple hospitals, medical faciilities and covid relief centers.</li>
                <li>Reached out to BITSIANS for their help too.</li>
            </ul>
        </div>
    )
    const HeaderCovid = (
        <div>
            Covid relief under Covid Relief India Alliance
        </div>
    )
    const dateCovid = (
        <div>
            April 2021 - May 2021
        </div>
    )
    const skillsCovid = (
        <div style={{ fontWeight: 400 }}>
            Event Management | Organizer
        </div>
    )

    const AboutWSC = (
        <div>
            Primary Finance and Management club at BITS Hyderabad
            <ul>
                <li>Initiated the Quant and Analytics team consisting of 30 members.</li>
                <li>Took up Data Analytics and Machine Learning sessions for interested students across the club</li>
                <li>Hosted prominent industry professionals, organized nationwide B-Plan, stock-trading and analytics competitions.</li>
                <li>Previously the Editor-in-Chief of WSC, aimed to improve financial literacy on campus through articles and posts
                    such as news based analysis, market analysis, industry analysis and other financial news</li>
            </ul>
        </div>
    )
    const HeaderWSC = (
        <div>
            WSC | Technical Director
        </div>
    )
    const dateWSC = (
        <div>
            October 2019 - Present
        </div>
    )
    const skillsWSC = (
        <div style={{ fontWeight: 400 }}>
            Data Science | Quant Finance | Algo Trading | Management
        </div>
    )

    const AboutBP = (
        <div>
            Law Society aims to improve the legal literacy on campus
            <ul>
                <li>Initiated and took part in mock trials, debates and mediation sessions.</li>
                <li>Improved legal literacy through social media and digital marketing.</li>
                <li>Provided a platform for students to talk about pressing issues in society.</li>
                <li><a style={{ color: '#ba68c8', cursor: 'pointer' }} href='https://lawsocietybphc.wordpress.com/2021/08/17/types-of-adr/' target='_blank'>Click here</a> to visit our website</li>
            </ul>
        </div>
    )
    const HeaderBP = (
        <div>
            BPLS | Founder, President
        </div>
    )
    const dateBP = (
        <div>
            October 2020 - August 2021
        </div>
    )
    const skillsBP = (
        <div style={{ fontWeight: 400 }}>
            Debating | Public Speaking
        </div>
    )

    const AboutEn = (
        <div>
            In charge of managing all of Enactus BITS Pilani Hyderabad's largest entrepreneurial ventures and activities,
            representing the institute in the Enactus Global World Cup,
            and coordinating with executive leads of Enactus Globaland mentors from KPMG.
            <ul>
                <li>Scraped Amazon Kharigar using Beautiful Soup and Selenium to evaluate the artisan market. Made visualizations to
                    get insights and therefore make important business decisions to tap into particular market segments forProject Vikalp</li>
                <li>Led Operations at Project Vikalp.</li>
                <li>Project Vikalp is an initiative to provide a platform for disabled/autistic children to showcase their
                    artistic skills. This platform helps sell the jewelry items they make and the money is invested on
                    developing their ashram.</li>
            </ul>
        </div>
    )
    const HeaderEn = (
        <div>
            Enactus | Events and Sponsorship Head
        </div>
    )
    const dateEn = (
        <div>
            July 2021 - Present
        </div>
    )
    const skillsEn = (
        <div style={{ fontWeight: 400 }}>
            Event Management | Data Analytics | Sponsorship | Social Entrepreneurship
        </div>
    )

    const AboutIN1 = (
        <div>
            Advanced planning and optimization of packaging and manufacturing processes using machine learning and analytics.
            Observing constraints in the supply and demand model to optimize using platforms such as Gurobi and Python
            <ul>
                <li>Working with SQL and Pandas to clean and prepare data for machine learning processes.</li>
                <li>Visualizations using
                    python seaborn
                    to understand and
                    gain insights
                    from data to make crucial business decisions</li>
            </ul>
        </div>
    )
    const HeaderIN1 = (
        <div>
            Dr.Reddy's Labs | Data Science Intern
        </div>
    )
    const dateIN1 = (
        <div>
            July 2021 - September 2021
        </div>
    )
    const skillsIN1 = (
        <div style={{ fontWeight: 400 }}>
            Python | Pandas | SQL | Excel
        </div>
    )

    const AboutIN2 = (
        <div>
            Data driven
            dynamic web applications.
            The objective of this project is to generate dynamic
            ReactJS web pages
            drivenby data for any web application.
            <ul>
                <li>Create the Rest API code generation based on data in the database.</li>
                <li>Front end development on ReactJS for form generation</li>
            </ul>
        </div>
    )
    const HeaderIN2 = (
        <div>
            Contenterra | Software Development Intern
        </div>
    )
    const dateIN2 = (
        <div>
            June 2021 - August 2021
        </div>
    )
    const skillsIN2 = (
        <div style={{ fontWeight: 400 }}>
            Database Management | REST API | ReactJS
        </div>
    )

    const AboutA1 = (
        <div>
            The aim of this project is to parallelize the sequential ML algorithms to be distributed to task specific IoT devices for
            computation and hierarchical aggregation. The motivation is to transfer the ML technology to light-weight systems for
            real-time IoT applications like smart agriculture, smart homes, industrial automation, etc.
        </div>
    )
    const HeaderA1 = (
        <div>
            Deep Learning over IoT Devices | DL Project
        </div>
    )
    const dateA1 = (
        <div>
            Ongoing
        </div>
    )
    const skillsA1 = (
        <div style={{ fontWeight: 400 }}>
            Deep Learning | FIT IoT Lab | Federated Learning | Research
        </div>
    )

    const AboutA2 = (
        <div>
            How historical data plays a role in creating biases for machine learning algorithms. Testing different types of mitigation
            techniques such as statistical parity, demographic parity, equal opportunity, equalized odds etc. and their drawbacks
        </div>
    )
    const HeaderA2 = (
        <div>
            Fairness | Study Project
        </div>
    )
    const dateA2 = (
        <div>
            Ongoing
        </div>
    )
    const skillsA2 = (
        <div style={{ fontWeight: 400 }}>
            Machine Learning | Research
        </div>
    )


    const classes = useStyles()

    const [selectedTab, setSelectedTab] = useState(0)
    const [tabText, setTabText] = useState(Aurum);
    const [tabTextHeader, setTabTextHeader] = useState(AurumHeader);
    const [tabTextDate, setTabTextDate] = useState(date);
    const [tabTextSkills, setTabTextSkills] = useState(skills);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);

        if (newValue === 0) {
            setTabText(Aurum);
            setTabTextHeader(AurumHeader)
            setTabTextDate(date)
            setTabTextSkills(skills)
        }
        else if (newValue === 1) {
            setTabText(AboutM);
            setTabTextHeader(MHeader)
            setTabTextDate(dateM)
            setTabTextSkills(skillsM)

        }
    }

    const [selectedTab180, setSelectedTab180] = useState(0)
    const [tabText180, setTabText180] = useState(AA);
    const [tabTextHeader180, setTabTextHeader180] = useState(AAHeader);
    const [tabTextDate180, setTabTextDate180] = useState(dateAA);
    const [tabTextSkills180, setTabTextSkills180] = useState(skillsAA);

    const handleChange180 = (event, newValue) => {
        setSelectedTab180(newValue);

        if (newValue === 0) {
            setTabText180(AA);
            setTabTextHeader180(AAHeader)
            setTabTextDate180(dateAA)
            setTabTextSkills180(skillsAA)
        }
        else if (newValue === 1) {
            setTabText180(SOE);
            setTabTextHeader180(SOEHeader)
            setTabTextDate180(dateSOE)
            setTabTextSkills180(skillsSOE)

        }
        else if (newValue === 2) {
            setTabText180(KF);
            setTabTextHeader180(KFHeader)
            setTabTextDate180(dateKF)
            setTabTextSkills180(skillsKF)

        }
        else if (newValue === 3) {
            setTabText180(Forrest);
            setTabTextHeader180(FHeader)
            setTabTextDate180(dateF)
            setTabTextSkills180(skillsF)

        }
        else if (newValue === 4) {
            setTabText180(TFI);
            setTabTextHeader180(TFIHeader)
            setTabTextDate180(dateTFI)
            setTabTextSkills180(skillsTFI)

        }
        else if (newValue === 5) {
            setTabText180(AP);
            setTabTextHeader180(APHeader)
            setTabTextDate180(dateAP)
            setTabTextSkills180(skillsAP)

        }
        else if (newValue === 6) {
            setTabText180(About);
            setTabTextHeader180(AboutHeader)
            setTabTextDate180(dateAB)
            setTabTextSkills180(skillsAB)

        }
    }

    const [selectedTabVH, setSelectedTabVH] = useState(0)
    const [tabTextVH, setTabTextVH] = useState(AboutVH);
    const [tabTextHeaderVH, setTabTextHeaderVH] = useState(HeaderVH);
    const [tabTextDateVH, setTabTextDateVH] = useState(dateVH);
    const [tabTextSkillsVH, setTabTextSkillsVH] = useState(skillsVH);

    const handleChangeVH = (event, newValue) => {
        setSelectedTabVH(newValue);

        if (newValue === 0) {
            setTabTextVH(AboutVH);
            setTabTextHeaderVH(HeaderVH)
            setTabTextDateVH(dateVH)
            setTabTextSkillsVH(skillsVH)
        }
        else if (newValue === 1) {
            setTabTextVH(AboutCovid);
            setTabTextHeaderVH(HeaderCovid)
            setTabTextDateVH(dateCovid)
            setTabTextSkillsVH(skillsCovid)

        }
    }

    const [selectedTabPOR, setSelectedTabPOR] = useState(0)
    const [tabTextPOR, setTabTextPOR] = useState(AboutWSC);
    const [tabTextHeaderPOR, setTabTextHeaderPOR] = useState(HeaderWSC);
    const [tabTextDatePOR, setTabTextDatePOR] = useState(dateWSC);
    const [tabTextSkillsPOR, setTabTextSkillsPOR] = useState(skillsWSC);

    const handleChangePOR = (event, newValue) => {
        setSelectedTabPOR(newValue);

        if (newValue === 0) {
            setTabTextPOR(AboutWSC);
            setTabTextHeaderPOR(HeaderWSC)
            setTabTextDatePOR(dateWSC)
            setTabTextSkillsPOR(skillsWSC)
        }
        else if (newValue === 1) {
            setTabTextPOR(AboutBP);
            setTabTextHeaderPOR(HeaderBP)
            setTabTextDatePOR(dateBP)
            setTabTextSkillsPOR(skillsBP)

        }
        else if (newValue === 2) {
            setTabTextPOR(AboutEn);
            setTabTextHeaderPOR(HeaderEn)
            setTabTextDatePOR(dateEn)
            setTabTextSkillsPOR(skillsEn)

        }
    }

    const [selectedTabIN, setSelectedTabIN] = useState(0)
    const [tabTextIN, setTabTextIN] = useState(AboutIN1);
    const [tabTextHeaderIN, setTabTextHeaderIN] = useState(HeaderIN1);
    const [tabTextDateIN, setTabTextDateIN] = useState(dateIN1);
    const [tabTextSkillsIN, setTabTextSkillsIN] = useState(skillsIN1);

    const handleChangeIN = (event, newValue) => {
        setSelectedTabIN(newValue);

        if (newValue === 0) {
            setTabTextIN(AboutIN1);
            setTabTextHeaderIN(HeaderIN1)
            setTabTextDateIN(dateIN1)
            setTabTextSkillsIN(skillsIN1)
        }
        else if (newValue === 1) {
            setTabTextIN(AboutIN2);
            setTabTextHeaderIN(HeaderIN2)
            setTabTextDateIN(dateIN2)
            setTabTextSkillsIN(skillsIN2)

        }
    }

    const [selectedTabA, setSelectedTabA] = useState(0)
    const [tabTextA, setTabTextA] = useState(AboutA1);
    const [tabTextHeaderA, setTabTextHeaderA] = useState(HeaderA1);
    const [tabTextDateA, setTabTextDateA] = useState(dateA1);
    const [tabTextSkillsA, setTabTextSkillsA] = useState(skillsA1);

    const handleChangeA = (event, newValue) => {
        setSelectedTabA(newValue);

        if (newValue === 0) {
            setTabTextA(AboutA1);
            setTabTextHeaderA(HeaderA1)
            setTabTextDateA(dateA1)
            setTabTextSkillsA(skillsA1)
        }
        else if (newValue === 1) {
            setTabTextA(AboutA2);
            setTabTextHeaderA(HeaderA2)
            setTabTextDateA(dateA2)
            setTabTextSkillsA(skillsA2)

        }
    }

    const processTabClick = (pVal) => {
        setTabText(pVal);
    }
    const ColoredLine = ({ color, margin }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0.5,
                width: 150,
                marginTop: '2em',
                marginRight: margin
            }}
        />
    );

    const mainObject = (
        <div style={{ backgroundColor: 'black'}} className={classes.mainSection1}>
            <Grid container="row" style={{ backgroundColor: 'black', height: '90%', }}>
                <Grid item container>{/*-------Front Page--------*/}
                    <Grid item style={{ width: '42em', backgroundColor: 'black', marginLeft: '10em', marginTop: '4em', marginRight: '3em' }}>
                        <div className={classes.body1}>
                            Hey! My name is<br /><div className={classes.body2}>Pranav Sistla</div>
                        </div>
                        <div className={classes.body3}>
                            Lorem ipsum dolor sit amet, consectetur.
                        </div>
                        <br />
                        <br />
                        <div className={classes.body4}>
                            I am currently studying my 3rd year at BITS Pilani pursuing Electronics & Communication engineering. 
                            I spend most of my time with the applications of data science and deep learning methods. Furthermore, I 
                            enjoy designing and developing Frontend and Backend Applications. 
                            I also worked extensively in the field of Strategy and Operations Consulting especially in the social sector.
                            I have assisted my clients with developing local and national growth frameworks, business frameworks, 
                            global sales channels in the B2B market. 
                            More recently, I leverage data to perform analysis and gain crucial insights to augment my strategies.
                        </div>
                        <br />
                        <a href='https://www.linkedin.com/in/pranav-sistla-98a46a1b0/' target="_blank">
                            <Button className={classes.button} variant='contained' variant='outlined' color='secondary'>
                                Let's Connect!
                            </Button>
                        </a>
                    </Grid>
                    <Grid item style={{ width: '32em', backgroundColor: 'black', marginTop: '3em', marginRight: '2em' }}>
                        <img src={orb} alt="loading..." />
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )

    const aboutObject = (
        <div style={{ backgroundColor: 'black', paddingTop:'4em', paddingBottom: '3em' }}>
            <Grid item container>{/*-------About--------*/}
                <Grid item style={{ width: '40%', backgroundColor: 'black', marginLeft: '10em', marginTop: '4em', marginRight: '3em' }}>
                    <Grid container='row' style={{ paddingBottom: '3em' }}>
                        <div className={classes.headingNumber}>
                            01.
                        </div>
                        <div className={classes.heading}>
                            About Me
                        </div>
                        <ColoredLine color='#ba68c8' margin='8em' />
                    </Grid>
                    <div className={classes.body4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </Grid>
                <Grid item style={{ width: '28em', height: '27em', backgroundColor: 'gray', marginTop: '11.5em', marginLeft: '3em' }}>
                    <img alt='me' src={me}/>
                </Grid>
            </Grid>
        </div>
    )

    const experienceObject = (
        <div style={{ backgroundColor: 'black', paddingBottom: '3em', paddingTop: '8em' }}>
            <Grid item container >{/*-------Experience--------*/}
                <Grid container='row' style={{ paddingBottom: '3em', backgroundColor: 'black', width: '50em', marginLeft: '10em' }}>
                    <div className={classes.headingNumber}>
                        02.
                    </div>
                    <div className={classes.heading}>
                        Experience
                    </div>
                    <ColoredLine color='#ba68c8' margin='17em' />
                </Grid>
                <Grid item style={{ width: '80%', backgroundColor: 'black', marginLeft: '10em', marginRight: '3em', marginTop: '1em' }}>
                    <Grid container="row" style={{ backgroundColor: 'black', width: '90%', height: '75px', marginTop: '1em', alignItems: 'center' }}>
                        <Grid item>
                            <a href='http://www.merca.in' target="_blank">
                            <img alt='company logo' src={logo} width='276' height='75' />
                            </a>
                        </Grid>
                        <Grid
                            className={classes.heading}
                            item style={{ backgroundColor: 'black', marginLeft: '1.1em', marginBottom: '0.8em', fontSize: 37 }}
                        >
                            Co-founder | CEO
                        </Grid>
                    </Grid>
                    <Grid container="row" style={{ marginTop: '2em', backgroundColor: 'black', width: '75em' }}>
                        <div style={{ width: '20%' }}>
                            <Tabs
                                value={selectedTab}
                                onChange={handleChange}
                                orientation="vertical"
                                className={classes.tabContainer}
                                style={{ backgroundColor: 'black' }}
                            >
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aurum Ayurveda'

                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Merca'
                                >
                                </Tab>
                            </Tabs>
                        </div>
                        <div id='divtext' style={{ backgroundColor: 'black', height:'15em', width: '50em', marginLeft: '5em' }}>
                            <div className={classes.subheading}>
                                {tabTextHeader}
                            </div>
                            <div className={classes.date}>
                                {tabTextDate}
                            </div>
                            <div className={classes.subbody}>
                                {tabText}
                            </div>
                            <div className={classes.subbody2}>
                                {tabTextSkills}
                            </div>
                            <div>

                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/*--------180--------*/}
                <Grid item style={{ width: '80%', backgroundColor: 'black', marginLeft: '10em', marginRight: '3em', marginTop: '6em' }}>
                    <Grid container="row" style={{ backgroundColor: 'black', width: '90%', height: '75px', marginTop: '1em', alignItems: 'center' }}>
                        <Grid item>
                            <a href="https://180dc.org/branch/bitshyderabad/" target="_blank">
                            <img alt='180 logo' src={logodegrees} width='276' height='75' />
                            </a>
                        </Grid>
                        <Grid
                            className={classes.heading}
                            item style={{ backgroundColor: 'black', marginLeft: '1.1em', marginBottom: '0.6em', fontSize: 37 }}
                        >
                            Consulting Director | Data Analytics Head
                        </Grid>
                    </Grid>
                    <Grid container="row" style={{ marginTop: '2em', backgroundColor: 'black', width: '75em' }}>
                        <div style={{ width: '20%', }}>
                            <Tabs
                                value={selectedTab180}
                                onChange={handleChange180}
                                orientation="vertical"
                                className={classes.tabContainer}
                                style={{ backgroundColor: 'black', alignItems: 'right' }}
                            >
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;Atypical Advantage'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='Schools of Equality'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;Karing Frontiers'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forrest'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;Teach For India'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;Alternative Peru'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About 180DC'
                                >
                                </Tab>
                            </Tabs>
                        </div>
                        <div id='divtext' style={{height:'25em', backgroundColor:'black', width: '50em', marginLeft: '5em' }}>
                            <div className={classes.subheading}>
                                {tabTextHeader180}
                            </div>
                            <div className={classes.date}>
                                {tabTextDate180}
                            </div>
                            <div className={classes.subbody}>
                                {tabText180}
                            </div>
                            <div className={classes.subbody2}>
                                {tabTextSkills180}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {/*--------VoluntHere--------*/}
                <Grid item style={{ width: '80%', backgroundColor: 'black', marginLeft: '10em', marginRight: '3em', marginTop: '6em' }}>
                    <Grid container="row" style={{ backgroundColor: 'black', width: '90%', height: '75px', marginTop: '1em', alignItems: 'center' }}>
                        <Grid item>
                        <a href="https://volunthere.in" target="_blank">
                            <img alt='VoluntHere' src={logoVH} width='276' height='75' />
                            </a>
                        </Grid>
                        <Grid
                            className={classes.heading}
                            item style={{ backgroundColor: 'black', marginLeft: '1.1em', marginBottom: '0.6em', fontSize: 37 }}
                        >
                            Co-founder
                        </Grid>
                    </Grid>
                    <Grid container="row" style={{ marginTop: '2em', backgroundColor: 'black', width: '75em' }}>
                        <div style={{ width: '20%' }}>
                            <Tabs
                                value={selectedTabVH}
                                onChange={handleChangeVH}
                                orientation="vertical"
                                className={classes.tabContainer}
                                style={{ backgroundColor: 'black', alignItems: 'right' }}
                            >
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;About VoluntHere'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VoluntHere for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Covid-19'
                                >
                                </Tab>
                            </Tabs>
                        </div>
                        <div id='divtext' style={{ backgroundColor: 'black', height:'20em', width: '50em', marginLeft: '5em' }}>
                            <div className={classes.subheading}>
                                {tabTextHeaderVH}
                            </div>
                            <div className={classes.date}>
                                {tabTextDateVH}
                            </div>
                            <div className={classes.subbody}>
                                {tabTextVH}
                            </div>
                            <div className={classes.subbody2}>
                                {tabTextSkillsVH}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item style={{ width: '80%', backgroundColor: 'black', marginLeft: '10em', marginRight: '3em', marginTop: '8.5em' }}>
                    <Grid container="row" style={{ backgroundColor: 'black', width: '90%', height: '75px', marginTop: '1em', alignItems: 'center' }}>
                        <Grid
                            className={classes.heading1}
                            item style={{ backgroundColor: 'black', marginBottom: '0.6em', fontSize: 37, marginTop: '0.3em' }}
                        >
                            Industry Internships
                        </Grid>
                    </Grid>
                    <Grid container="row" style={{ marginTop: '2em', backgroundColor: 'black', width: '75em' }}>
                        <div style={{ width: '20%' }}>
                            <Tabs
                                value={selectedTabIN}
                                onChange={handleChangeIN}
                                orientation="vertical"
                                className={classes.tabContainer}
                                style={{ backgroundColor: 'black', alignItems: 'right' }}
                            >
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr.Reddy`s Labs'
                                >
                                </Tab>
                                <Tab
                                    className={classes.tab}
                                    disableRipple
                                    label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contenterra'
                                >
                                </Tab>
                            </Tabs>
                        </div>
                        <div id='divtext' style={{ backgroundColor: 'black', height:'20em', width: '50em', marginLeft: '5em' }}>
                            <div className={classes.subheading}>
                                {tabTextHeaderIN}
                            </div>
                            <div className={classes.date}>
                                {tabTextDateIN}
                            </div>
                            <div className={classes.subbody}>
                                {tabTextIN}
                            </div>
                            <div className={classes.subbody2}>
                                {tabTextSkillsIN}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

    const porObject = (
        <div style={{ backgroundColor: 'black', paddingBottom: '3em', paddingTop: '6em' }}>
            <Grid item container >{/*-------POR--------*/}
                <Grid container='row' style={{ paddingBottom: '3em', backgroundColor: 'black', height: '75px', width: '50em', marginLeft: '10em', marginTop: '2em' }}>
                    <div className={classes.headingNumber}>
                        03.
                    </div>
                    <div className={classes.heading}>
                        Positions of Responsibility
                    </div>
                    <ColoredLine color='#ba68c8' margin='0.5em' />
                </Grid>
            </Grid>
            <Grid container="row" style={{ marginTop: '2em', backgroundColor: 'black', width: '75em', marginLeft: '10em' }}>
                <div style={{ width: '20%' }}>
                    <Tabs
                        value={selectedTabPOR}
                        onChange={handleChangePOR}
                        orientation="vertical"
                        className={classes.tabContainer}
                        style={{ backgroundColor: 'black' }}
                    >
                        <Tab
                            className={classes.tab}
                            disableRipple
                            label='The Wall Street Club'

                        >
                        </Tab>
                        <Tab
                            className={classes.tab}
                            disableRipple
                            label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BITS Pilani Law &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Society'
                        >
                        </Tab>
                        <Tab
                            className={classes.tab}
                            disableRipple
                            label='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enactus'
                        >
                        </Tab>
                    </Tabs>
                </div>
                <div id='divtext' style={{ backgroundColor: 'black', height:'20em', width: '50em', marginLeft: '5em' }}>
                    <div className={classes.subheading}>
                        {tabTextHeaderPOR}
                    </div>
                    <div className={classes.date}>
                        {tabTextDatePOR}
                    </div>
                    <div className={classes.subbody}>
                        {tabTextPOR}
                    </div>
                    <div className={classes.subbody2}>
                        {tabTextSkillsPOR}
                    </div>
                    <div>

                    </div>
                </div>
            </Grid>
        </div>
    )

    const acadObject = (
        <div style={{ backgroundColor: 'black', paddingBottom: '3em', paddingTop: '8em' }}>
            <Grid item container >{/*-------Acad--------*/}
                <Grid container='row' style={{ paddingBottom: '3em', backgroundColor: 'black',  height: '75px', width: '50em', marginLeft: '10em' }}>
                    <div className={classes.headingNumber}>
                        04.
                    </div>
                    <div className={classes.heading}>
                        Academic Projects
                    </div>
                    <ColoredLine color='#ba68c8' margin='8em' />
                </Grid>
            </Grid>
            <Grid container="row" style={{ marginTop: '2em', backgroundColor: 'black', width: '75em', marginLeft: '10em' }}>
                <div style={{ width: '20%' }}>
                    <Tabs
                        value={selectedTabA}
                        onChange={handleChangeA}
                        orientation="vertical"
                        className={classes.tabContainer}
                        style={{ backgroundColor: 'black' }}
                    >
                        <Tab
                            className={classes.tab}
                            disableRipple
                            label='&nbsp;Distributed ML over &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IoT devices'

                        >
                        </Tab>
                        <Tab
                            className={classes.tab}
                            disableRipple
                            label='Fairness in Machine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learning'
                        >
                        </Tab>
                    </Tabs>
                </div>
                <div id='divtext' style={{ backgroundColor: 'black', height: '14em', width: '50em', marginLeft: '5em' }}>
                    <div className={classes.subheading}>
                        {tabTextHeaderA}
                    </div>
                    <div className={classes.date}>
                        {tabTextDateA}
                    </div>
                    <div className={classes.subbody}>
                        {tabTextA}
                    </div>
                    <div className={classes.subbody2}>
                        {tabTextSkillsA}
                    </div>
                    <div>
                    </div>
                </div>
            </Grid>
        </div>
    )

    const contactObject = (
        <div style={{ backgroundColor: 'black', paddingBottom: '3em', paddingTop: '8em' }}>
            <Grid item container >{/*-------Contact--------*/}
                <Grid container='row' style={{ paddingBottom: '0.5em', backgroundColor: 'black', width: '50em', marginLeft: '10em' }}>
                    <div className={classes.headingNumber}>
                        05.
                    </div>
                    <div className={classes.heading}>
                        Let's get in touch!
                    </div>
                    <ColoredLine color='#ba68c8' margin='9.5em' />
                </Grid>
            </Grid>
            <Grid item container='row' style={{ backgroundColor: 'black', width: '30em', marginLeft: '17em', marginBottom: '4em' }}>
                <div className={classes.contact}>
                    Need Data Science or Tech Solutions?
                </div>
                <div className={classes.contactmerca}>
                    pranav.merca@gmail.com
                </div>
                <div className={classes.contact}>
                    Need Consulting Services?
                </div>
                <div className={classes.contact180dc}>
                    psistla@180dc.org
                </div>
                <div className={classes.contact}>
                    Want to make social impact?
                </div>
                <div className={classes.contactVH}>
                    pranav.volunthere@gmail.com
                </div>
                <div className={classes.contact}>
                    For everything else
                </div>
                <div className={classes.contactemail}>
                    psistla2001@gmail.com
                </div>
            </Grid>
        </div>
    )

    return (
        <React.Fragment>
            <section id="main_section">
                {mainObject}
            </section>
            <section id="about_section">
                {aboutObject}
            </section>
            <section id="experience_section">
                {experienceObject}
            </section>
            <section id="por_section">
                {porObject}
            </section>
            <section id="acad_section">
                {acadObject}
            </section>
            <section id="contact_section">
                {contactObject}
            </section>
        </React.Fragment>
    )

}