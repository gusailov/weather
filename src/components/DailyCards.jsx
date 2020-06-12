import React, { useState } from "react";
import { dateFormat } from "../utils";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";
import WeatherIcon from 'react-open-weather-icons'
import HourlyCards from "./HourlyCards";
import Tabs from 'react-bootstrap/Tabs'
import {Tab,Nav, Row ,Col} from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'

function DailyCards(props) {
  const { forecast } = props;
  const daily = forecast.daily;
  const [activeIndex, setActiveIndex] = useState(daily[0].dt);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  console.log(<WeatherIcon name={"02d"} className="my-awesome-icon" />);
  
  return (
    <Tab.Container variant="tabs" id="controlled-tab-example" defaultActiveKey={daily.dt}>
          <p className="card-title">Daily Forecast</p>
      <div className="row  mb-5 mt-5" >
              {daily.map((item) => {
          const index = item.dt;
          const isActive = index === activeIndex;
          return (
            <>
            <Row>
       <Col sm={1}>
      <Nav variant="tabs" className="flex-row">
        <Nav.Item>
          <Nav.Link eventKey={index} onClick={() => setActiveIndex(index)}> <> 
               { 
            <WeatherIcon name={item.weather[0].icon} className="my-awesome-icon" /> ||
                <img
                  className="card-img-top"
                  src={
                    `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                  }
                  alt="альтернативный текст"
                />}</> 
                <span className="card-text">
                  <p>{Math.round(item.temp.day) + "℃"}</p>
                </span>
                <div className="card-text mx-auto">
                  <p>{item.summary}</p>
                </div>
                <div className="card-text mx-auto">
                  <p>{dateFormat(item.dt, props.lang)}</p>
                </div></Nav.Link>
        </Nav.Item>
        </Nav>
    </Col></Row>
    <Row>
    
      <Tab.Content>
        <Tab.Pane eventKey={index}>
        <HourlyCards
        forecast={props.forecast}
        isLoaded={props.isLoaded}
        error={props.error}
        lang={props.lang}
        active={activeIndex}
      ></HourlyCards>
        </Tab.Pane>
       </Tab.Content>
    </Row>
    </> 
            );
        })}
    
      
    </div>
  </Tab.Container>
  );
}

export default DailyCards;
