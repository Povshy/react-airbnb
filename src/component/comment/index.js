import { Fragment } from "react";

import Heading from "../heading";

import "./index.css";
import Box from "../box";

export default function Comments ({ list }) {
    return (
    <div className="room__block">
        <Heading>Типи номерів</Heading>

        <div className="room__list">
            {list.map(({ id, ...rest}) => (
                <Fragment key={id}>
                    <Item {...rest} />
                </Fragment>
            ))}
        </div>
    </div>
    );
}

function Item({ guestName, rating, review }) {
    return (
        <Box className="room">
            <div className="room__top">
                <span className="com__title">{guestName}</span>
                <span className="com__info">Рейтинг: {rating}</span>
            </div>
            
            <span className="com__price">{review}</span>
        </Box>
    );
}
