import React from "react";

const GlobalData = ({ covidStats }) => {
	return (
		<>
			<div className="container">
				<div className="header">
					<h1 align="center" className="py-4 ">
						<img src="images/Coronavirus.jpg" alt="coronaVirus" />
						Covid19 Tracker
					</h1>
				</div>

				<div class="row">
					<div class="col-md-4">
						<div class="card my-5 text-white bg-primary text-center shadow-sm">
							<div class="card-header ">TotalCases</div>
							<div class="card-body">
								<h5 class="card-title"> {covidStats?.total_cases}</h5>
								{/* <span>
									LastUpdate=
									{new Date(globalData.statistic_taken_at).toDateString()}
								</span> */}
								<p class="card-text">Number of cases from covid19</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card my-5 text-white bg-success text-center shadow-sm">
							<div class="card-header text-center">TotalRecovered</div>
							<div class="card-body">
								<h5 class="card-title">{covidStats?.total_recovered}</h5>
								{/* <span>
									LastUpdate=
									{new Date(globalData.statistic_taken_at).toDateString()}
								</span> */}
								<p class="card-text">Number of recoveries from covid19</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card my-5 text-white bg-danger text-center shadow-sm">
							<div class="card-header text-center">TotalDeath</div>
							<div class="card-body">
								<h5 class="card-title">{covidStats?.total_deaths}</h5>
								{/* <span>
									LastUpdate=
									{new Date(globalData.statistic_taken_at).toDateString()}
								</span> */}
								<p class="card-text">Number of deaths from covid19</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GlobalData;
