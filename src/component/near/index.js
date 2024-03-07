import { Fragment } from "react";

import Heading from "../heading";
import ListItem from "../list-item";
import Box from "../box";

import "./index.css";


export default function Near ({ list }) {
    return (
        <Box shadow>
            <Heading border>Пам'ятки поблизу</Heading>

            <ul className="near__list">
                
                    {list.map(({ id, ...rest}) => (
                        <Fragment key={id}>
                            <Item {...rest} />
                        </Fragment>
                ))}
                
            </ul>

        </Box>);
        
}

function Item({ name, link }) {
    return (
        <ListItem>
            <a href={link}>{name}</a>
        </ListItem>
    );
}
