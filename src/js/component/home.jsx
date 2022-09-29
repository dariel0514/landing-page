import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Footer from "./footer.jsx"
import NavBar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Cardbox from "./cardbox.jsx"

//include images into your bundle
//create your first component
const Home = () => {
		return (
		      <div className="container-fluid">
		     <div>
		      <NavBar/>
		      <Jumbotron />
		      <Cardbox />
		    </div>
		      <Footer />
		    </div>
		);
		};

export default Home;