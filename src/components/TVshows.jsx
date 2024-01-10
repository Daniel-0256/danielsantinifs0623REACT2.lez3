import CardList from "./Home";
import Generi from "./Generi";

const TVshows = () => {
  return (
    <>
      <Generi />
      <h6 className="bg-dark text-light m-0 ps-4">Shark</h6>
      <CardList searchFilms="shark" />
      <h6 className="bg-dark text-light m-0 ps-4">Lost</h6>
      <CardList searchFilms="lost" />
      <h6 className="bg-dark text-light m-0 ps-4">Hulk</h6>
      <CardList searchFilms="hulk" />
    </>
  );
};

export default TVshows;