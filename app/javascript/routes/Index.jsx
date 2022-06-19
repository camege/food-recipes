import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from "../components/Home";
import Restaurants from "../components/Restaurants";
import Restaurant from "../components/Restaurant";
import NewRestaurant from "../components/NewRestaurant";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />}/>
      <Route path="/restaurant/:id" element={<Restaurant />}/>
      <Route path="/restaurant" element={<NewRestaurant/>} />
    </Routes>
    
  </Router>
);