import React, { useState, useEffect } from "react";
import CountryPicker from "./CountryPicker";
import GlobalData from "./GlobalData";
import axios from "axios";

const CovidMain = () => {
	const [covidData, setCovidData] = useState([]);
	const [covidStats, setCovidStats] = useState([]);
	const getData = async () => {
		try {
			const res = await axios.get(
				"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
				{
					headers: {
						"x-rapidapi-host":
							"corona-virus-world-and-india-data.p.rapidapi.com",
						"x-rapidapi-key":
							"08295af6edmsh25c9fc24b3b7d6fp1b591ejsn18d6e7fda81d",
					},
				}
			);

			const responce = res.data;
			setCovidData(responce.countries_stat);
			setCovidStats(responce.world_total);
			console.log(responce);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<GlobalData covidStats={covidStats} />
			<CountryPicker covidData={covidData} />
		</>
	);
};

export default CovidMain;
