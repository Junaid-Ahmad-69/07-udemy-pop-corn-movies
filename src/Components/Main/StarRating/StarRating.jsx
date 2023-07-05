import React, {useState} from 'react'
import Star from "./Star/Star";
import PropTypes from "prop-types";
const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: "16px"
}
const starContainerStyle = {
    display: 'flex',
    gap: "4px"
}
// StarRating.propTypes = {
//     maxRating: PropTypes.number,
// }
const StarRating = ({maxlength = 2, color = "#fcc419", size = "48px", message = [], onSetRating}) => {

    const textStyle = {
        lineHeight: "1",
        color,
        fontSize: `${size}`,
    }
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    function handlerRating(rate) {
        setRating(rate);
        onSetRating(rate);
    }

    return (
        <div style={containerStyle}>
            <div style={starContainerStyle}>
                {Array.from({length: maxlength}, (_, i) => (
                    <Star key={i} onRate={() => handlerRating(i + 1)}
                          full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                          onHoverIn={() => setTempRating(i + 1)}
                          onHoverOut={() => setTempRating(0)}
                          color={color} size={size}
                    />))}
            </div>
            <p style={textStyle}>{message.length === maxlength ? message[tempRating ? tempRating - 1 : rating - 1] : tempRating || rating || ""}</p>
        </div>
    )
}

export default StarRating
