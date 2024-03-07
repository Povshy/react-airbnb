import "./index.css"

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import airports from "./airport.svg"
import breakfasts from "./breakfast.svg"
import childs from "./child.svg"
import concierges from "./concierge.svg"
import gyms from "./gym.svg"
import parkings from "./parking.svg"
import petss from "./pets.svg"
import pools from "./pools.svg"
import roomServs from "./roomServ.svg"
import wifis from "./wifi.svg"



export default function Comfort({
    pool,
    gym,
    breakfast,
    wifi,
    parking, 
    pets, 
    airport, 
    concierge, 
    roomServ, 
    child,
}) {
    return (
        <Box shadow>
            <Heading border>Зручності</Heading>

            <ul className="price__list">
                <ListItem imageSrc={pools}>
                    <span className={`${
                        pool ? "comf--ok" : "comf--no"
                    }`}>Бассейн</span>
                </ListItem>

                <ListItem imageSrc={gyms}>
                    <span className={`${
                        gym ? "comf--ok" : "comf--no"
                    }`}>Спортивний зал</span>
                </ListItem>

                <ListItem imageSrc={breakfasts}>
                    <span className={`${
                        breakfast ? "comf--ok" : "comf--no"
                    }`}>Безкоштовний сніданок</span>
                </ListItem>

                <ListItem imageSrc={wifis}>
                    <span className={`${
                        wifi ? "comf--ok" : "comf--no"
                    }`}>Безкоштовний Wi-Fi</span>
                </ListItem>

                <ListItem imageSrc={parkings}>
                    <span className={`${
                        parking ? "comf--ok" : "comf--no"
                    }`}>Безкоштовний вуличний паркінг</span>
                </ListItem>

                <ListItem imageSrc={petss}>
                    <span className={`${
                        pets ? "comf--ok" : "comf--no"
                    }`}>Дозволено розміщення з домашніми тваринами</span>
                </ListItem>

                <ListItem imageSrc={airports}>
                    <span className={`${
                        airport ? "comf--ok" : "comf--no"
                    }`}>Трансфер до/з аеропорту</span>
                </ListItem>

                <ListItem imageSrc={concierges}>
                    <span className={`${
                        concierge ? "comf--ok" : "comf--no"
                    }`}>Консьєрж-сервіс</span>
                </ListItem>

                <ListItem imageSrc={roomServs}>
                    <span className={`${
                        roomServ ? "comf--ok" : "comf--no"
                    }`}>Обслуговування номерів</span>
                </ListItem>

                <ListItem imageSrc={childs}>
                    <span className={`${
                        child ? "comf--ok" : "comf--no"
                    }`}>Підходить для дітей</span>
                </ListItem>

            </ul>

        </Box>
    
    );
}
