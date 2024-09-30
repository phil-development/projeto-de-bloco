import { useState } from "react";
import { Card, Description, Info, Poster, HiddenContent, Button } from "./styles";

import StarRating from "../StarRating";

import { Movie } from "../../types";

interface CardProps {

    data: Movie;

}

export default function MovieCard({ data }: CardProps) {

    const [isHovered, setIsHovered] = useState(false);

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

                <HiddenContent style={{ opacity: isHovered ? 1 : .5, height: isHovered ? '98px' : '0' }}>

                    {data.overview &&
                        <Description>

                            {data.overview.length > 100
                                ? `${data.overview.substring(0, 100)}...`
                                : data.overview

                            }

                        </Description>
                    }

                    <Button>Ver Mais</Button>

                </HiddenContent>

            </Info>

        </Card>
    );
};
