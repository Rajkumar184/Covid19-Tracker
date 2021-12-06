import React, { useState, useEffect } from "react";
import CountryPicker from "./CountryPicker";
import GlobalData from "./GlobalData";

const CovidMain = () => {
	const [globalData, setGlobalData] = useState();
	const [data, setData] = useState([]);
	const getData = async () => {
		try {
			const setHeader = {
				headers: {
					"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
					"x-rapidapi-key":
						"83feba7957msh5016b9682eca4d2p15dd33jsn8fe97c106b42",
				},
			};

			const res = await fetch(
				"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
				setHeader
			);

			const data = await res.json();
			console.log(data);
			setGlobalData(data.world_total);
			setData(data.countries_stat);
			// setCovidSummary(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<GlobalData globalData={globalData} />
			<CountryPicker data={data} />
		</>
	);
};

export default CovidMain;
