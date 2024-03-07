import "./index.css"
import Heading from "../heading";

export default function Contact({
    name,
    image,
    rate,
    time,
    info,
    phone,
}) {
    return (
        <div className="block">
            <div className="block__title">
                <img src={image} alt={name} className="image" />

                <div className="block">
                    <Heading>Господар - Kerthy</Heading>

                    <div className="title__sub-block">
                        <span className="title__sub-value">{phone}</span>

                        <span className="title__sub-value">{time}</span>

                        <span className="title__sub-value">{rate}% відсотків швидкості відгуку</span>  
                    </div>
                </div>
            </div>


            <div className="block__info">{info}</div>
        </div>
    );
}

