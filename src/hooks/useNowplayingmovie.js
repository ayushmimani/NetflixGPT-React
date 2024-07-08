import React from "react";

const useNowplayingmovie = () => {
  return <div></div>;
};

export default useNowplayingmovie;

const dispatch = useDispatch();
const fetchnowmovie = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_Option
  );
  const json = await data.json();
  dispatch(addnowplayingmovies(json));
  console.log(json);
};

useEffect(() => {
  fetchnowmovie();
}, []);
