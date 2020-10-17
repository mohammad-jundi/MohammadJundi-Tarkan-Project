import React from "react";
import AboutImg from "../../images/about.jpg";
import Mohammad from "../../images/mohammad.jpg"
import Tarkan from "../../images/tarkan.png"
import './style.css'
import { Row } from "antd"


const editPageStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(2,0,36,0.3) 0%, rgba(9,9,121,0.3) 0%, rgba(240,241,239,0.3) 0%),url(${AboutImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    margin: "0",
};

const AboutPage = () => {
    return (
        <Row style={editPageStyle}>
            <div className='container'>
                <div >
                    <div>
                        <h1 className="title">Why to use FOODCHECK</h1>
                        <p className="paragarph">Becuase You Don’t Want To Let Your Daily Calorie Intake Get Too Low
                        Healthy lifestyle movements have been popular for several years in a row.
                        People have increasingly begun to think about their health and often go in for sports.
                        This also explains the popularity of fitness trackers and smartwatches that monitor activity.
                        But in order to find out how many steps you take daily and how many calories you burn,
                        you don’t need to buy a special expensive gadget. Offer your customers a more reasonable
                        and rational solution: a nutrition planner app.
                        The Mind Studios team will gladly help you build a diet and nutrition mobile application.
                        When your calorie intake is too low, you may not get all the nutrients your body needs. Additionally,
                        your body’s natural response to a decrease in food can lead to your body’s metabolism slowing so that
                        your body can conserve energy.
                        In the long run, this slowing metabolism can lead to weight gain. Our App will help you to control the daily calories,
                        also will caculate the nesseccary calories for you </p>
                    </div>
                </div>
                <h1 className="createdBy">CREATED BY</h1>
                <div className="pics">
                    <div>
                    <img src={Mohammad} className='mohammad'></img>
                    <p><a href="https://github.com/mohammad-jundi"> Mohammad jundi</a></p>
                    </div>
                    <div>
                    <img src={Tarkan} className='tarkan'></img>
                     <p><a href="https://github.com/tmansuroglu"> Tarkan Masumoglu </a></p>
                    </div>
                </div>
            </div>
        </Row>
    )
};

export default AboutPage;

// test
