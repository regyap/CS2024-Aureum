import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordions from "../components/Accordion/Accordion.jsx";
import './FindABoutique.css';

const FindABoutique = () => {

    const stores = [
        {
            id: 1,
            name: "AUREUM'S - WESTFIELD WHITE CITY",
            address: <>
                Penhaligon's Unit SU1212A, Level 40, <br />
                Westfield London, Ariel Way, <br />
                London,  <br />
                W12 7GF, United Kingdom <br />
            </>,
            tel: "+442030406156",
            isOpenUntil: "9:00",
            schedule: ["10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-6:00"],
            latitude: 51.5086948,
            longitude: -0.2216543,
        },
        {
            id: 2,
            name: "AUREUM'S - SELFRIDGES, OXFORD STREET",
            address: <>
                400 Oxford Street,<br />
                London<br />
                W12 7GF, United Kingdom<br />

            </>,
            tel: "+44 (0) 20 7318 2483",
            isOpenUntil: "6:00",
            schedule: ["8:00-6:00", "8:00-6:00", "8:00-6:00", "8:00-6:00", "8:00-6:00", "7:30-7:00", "9:30-4:00"],
            latitude: 51.5145855,
            longitude: -0.1576077,
        },
        {
            id: 3,
            name: "AUREUM'S HARRODS",
            address: <>
                Harrods,<br />
                87-135 Brompton Rd,<br />
                London<br />
                SW1X 7XL, United Kingdom<br />

            </>,
            tel: "+44 (0) 3333 001000",
            isOpenUntil: "8:00",
            schedule: ["9:00-8:00", "9:00-8:00", "9:00-8:00", "9:00-8:00", "9:00-8:00", "9:00-8:00", "10:30-5:00"],
            latitude: 51.4992914,
            longitude: -0.1653163,
        },
        {
            id: 4,
            name: "AUREUM'S MAYFAIR",
            address: <>
                20A Brook Street,<br />
                London<br />
                W1K 5DE, United Kingdom<br />


            </>,
            tel: "+442074930002",
            isOpenUntil: "Closed",
            schedule: ["Closed", "Closed", "Closed", "Closed", "Closed", "Closed", "Closed"],
            latitude: 51.5132529,
            longitude: -0.1458921,
        },
        {
            id: 5,
            name: "AUREUM'S MAYFAIR",
            address: <>
                25 Kings Road, London SW3 4RP,<br />
                London<br />
                SW3 4RP, United Kingdom<br />



            </>,
            tel: "+442078239733",
            isOpenUntil: "7:00",
            schedule: ["10:00-7:00", "10:00-7:00", "10:00-7:00", "10:00-7:00", "10:00-7:00", "10:00-7:00", "12:00-6:00"],
            latitude: 51.4918536,
            longitude: -0.1615816,
        }
    ];
    // const isOpenUntil = "9:00";
    // const schedule = ["10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-9:00", "10:00-6:00"];
    console.log("Rendering FindABoutique");
    return (

        <>

            <section className="findaboutique">
                <img src="../../images/image141.png" className="findaboutiqueimg" alt="findaboutique" />
            </section>
            <section className="findaboutiquestores">
                <p className="storeheader">STORES</p>
                <p className="storeheaderdesc">There are 5 Aureum stores</p>

                <div className="allstores">

                    {stores.map((store, index) => (
                        <div className="storename">
                            <span>{store.name}</span>
                            <p className="addr">{store.address}</p>
                            <p>Tel: {store.tel}</p>


                            <Accordions id={store.id} isOpenUntil={store.isOpenUntil} schedule={store.schedule} />
                            <input
                                type="submit"
                                value="GET DIRECTIONS"
                                onClick={() => {
                                    const mapsUrl = `https://www.google.com/maps?q=${store.latitude},${store.longitude}`;
                                    window.open(mapsUrl, '_blank');
                                }}
                            />

                        </div>
                    ))}


                </div>

            </section>

        </>
    );
};

export default FindABoutique;
