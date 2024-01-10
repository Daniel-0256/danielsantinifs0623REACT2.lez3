import CardList from "./Home";
import Generi from "./Generi";

const Index = () => {
  return (
    <>
      <Generi />
      <h6 className="bg-dark text-light m-0 ps-4">Harry Potter</h6>
      <CardList searchFilms="Harry%20Potter" />
      <h6 className="bg-dark text-light m-0 ps-4">Avengers</h6>
      <CardList searchFilms="avengers" />
      <h6 className="bg-dark text-light m-0 ps-4">Star Wars</h6>
      <CardList searchFilms="star%20wars" />
    </>
  );
};

export default Index;