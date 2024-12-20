import React from "react";
import { MovieRate } from "./styles";

import { FaRegStar, FaStar } from "react-icons/fa6";

interface StarRatingProps {

    rating: number;

}

const StarRating: React.FC<StarRatingProps> = (props) => {

    const numStars = Math.round(props.rating / 2);

    const fullStars = [];
    const emptyStars = [];

    for (let i = 0; i < 5; i++) {

        if (i < numStars) {

            fullStars.push(i);

        } else {

            emptyStars.push(i);

        };

    };

    return (
        <MovieRate>

            {
                fullStars.map(index => (<FaStar key={index} />))
            }

            {
                emptyStars.map(index => (<FaRegStar key={index} />))
            }

        </MovieRate>
    );
};

export default StarRating;