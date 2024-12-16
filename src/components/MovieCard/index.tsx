import React, { useState } from "react";
import { Card, Description, Info, Poster, HiddenContent, Button } from "./styles";

import { useNavigate } from "react-router-dom";

import StarRating from "../StarRating";

import { Movie } from "../../types";

interface CardProps {

    data: Movie;

};

const MovieCard: React.FC<CardProps> = ({ data }) => {

    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    return (
        <Card>
            <Poster style={{ opacity: isHovered ? 0.5 : 1 }}>

                <img
                    src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                    alt={data.title}
                />

            </Poster>

            <Info
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <h1>{data.title}</h1>

                {
                    data.vote_average >
                    0 && <StarRating rating={data.vote_average} />
                }

                <HiddenContent style={{ opacity: isHovered ? 1 : .5, height: isHovered ? 'auto' : '0px' }}>

                    {data.overview &&
                        <Description>

                            {data.overview.length > 100
                                ? `${data.overview.substring(0, 100)}...`
                                : data.overview

                            }

                        </Description>
                    }

                    <Button onClick={() => navigate(`/movieInfo/${data.id}`)}>Ver Mais</Button>

                </HiddenContent>

            </Info>

        </Card>
    );
};

export default MovieCard;