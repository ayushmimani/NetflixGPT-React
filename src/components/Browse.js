import React, { useEffect } from "react";
import Header from "./Header";
import { API_Option } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utils/movieSlice";

const Browse = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
