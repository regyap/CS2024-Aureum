import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Accordion.css";

// const isOpenUntil = "9:00";
// const schedule = ["10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-6:00"];

const Accordion = ({ id, isOpenUntil, schedule }) => {
    const checkboxId = `cb-${id}`;
    return (

        <div class="accordionbody">
            <section class="accordion">

                <div class="tab">
                    <input type="checkbox" name={`accordion-${id}`} id={checkboxId} />
                    <label htmlFor={checkboxId} class="tab__label"><img src="../../images/clock.png" className="clock" width="12px" height="12px" />  Open Until   {isOpenUntil}</label>
                    <div class="tab__content">
                        <div class="schedule">
                            <div class="schedule_date">
                                <p>Mon</p>
                                <p>Tue</p>
                                <p>Wed</p>
                                <p>Thu</p>
                                <p>Fri</p>
                                <p>Sat</p>
                                <p>Sun</p>
                            </div>
                            <div class="schedule_time">
                                {schedule.map((time, index) => (
                                    <p key={index}>{time}</p>
                                ))}
                                {/* <p>10:00-9:00</p>
                                    <p>10:00-9:00</p>
                                    <p>10:00-9:00</p>
                                    <p>10:00-9:00</p>
                                    <p>10:00-9:00</p>
                                    <p>10:00-9:00</p>
                                    <p>10:00-6:00</p> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Accordion;
