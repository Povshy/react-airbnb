import "./index.css"

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";


export default function Bonus({ rules, policy, transport, languages, offers }) {
    return (
        <Box shadow>
            <Heading border>Додаткові властивості</Heading>

            <ul className="price__list">
                <ListItem title="Правила дому">
                    <span>{rules}</span>
                </ListItem>

                <ListItem title="Політика скасування">
                    <span>{policy}</span>
                </ListItem>

                <ListItem title="Місцевий транспорт">
                    <span>{transport}</span>
                </ListItem>

                <ListItem title="Мови хоста">
                    <span>{languages}</span>
                </ListItem>

                <ListItem title="Спеціальні пропозиції">
                    <span>{offers}</span>
                </ListItem>
            </ul>

        </Box>
    
    );
}
