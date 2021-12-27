import React from "react";
import MaterialTable from "material-table";

const CountryPicker = ({ covidData }) => {
	const columns = [
		{
			title: "Country Name",
			field: "country_name",
		},
		{ title: "TotalCases", field: "cases" },
		{ title: "NewCases", field: "new_cases" },
		{
			title: "ActiveCase",
			field: "active_cases",
		},
		{ title: "TotalRecovered", field: "total_recovered" },
		{ title: "NewDeaths", field: "new_deaths" },
		{ title: "TotalDeaths", field: "deaths" },
	];

	return (
		<>
			<div className="app">
				<MaterialTable
					title="Country Details"
					columns={columns}
					data={covidData}
				></MaterialTable>
			</div>
		</>
	);
};

export default CountryPicker;
