import "./index.css"

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import bath from "./bath.svg"
import bed from "./bed.svg"
import bedroom from "./bedroom.svg"
import guest from "./guest.svg"

export default function Details({ guests, bedrooms, beds, baths }) {
    return (
        <Box shadow>
            <Heading border>Деталі властивості</Heading>

            <ul className="price__list">
                <ListItem imageSrc={guest}>
                    <span>{guests} гості</span>
                </ListItem>

                <ListItem imageSrc={bedroom}>
                    <span>{bedrooms} гості</span>
                </ListItem>

                <ListItem imageSrc={bed}>
                    <span>{beds} гості</span>
                </ListItem>

                <ListItem imageSrc={bath}>
                    <span>{baths} гості</span>
                </ListItem>

            </ul>

        </Box>
    
    );
}
