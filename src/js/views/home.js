import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Card from "../component/card";

export const Home = () => (
	<div>
		<h1 className="display-4">Characters</h1>
		<Card/>
		<h1 className="display-4">Planets</h1>
		<Card/>
	</div>
);
