import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";

const CardList = (props) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=520c5a47&s=${props.searchFilms}`);

        if (!response.ok) {
          throw new Error('Errore!');
        }

        const data = await response.json();

        if (data && data.Search) {
          setFilms(data.Search);
        }
      } catch (error) {
        console.log('Errore:', error);
      }
    };

    fetchFilms();
  }, [props.searchFilms]);

  return (
    <Row className="bg-dark" id="rowCard">
      {films.map((film, index) => (
        <Col key={index} lg={1} className="pb-1 pt-1">
          <Card id="card">
            <Card.Img variant="top" src={film.Poster} alt={film.Title} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
