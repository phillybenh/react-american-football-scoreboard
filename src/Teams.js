import React, { useState } from "react";
import "./App.css";

function Teams() {

    let [teams, setTeams] = useState([
            {
                homeTeam: "Please enter your home team name",
                homePoints: 7
            },
            {
                awayTeam: "Please enter your home team name",
                awayPoints: 7
            }
        ]);

    return (
        <form>
            <label>Enter the home team's name:</label>
            <input type="text" name="homeTeamName" value={this.state.value} onChange={() => {setTeams(teams.homeTeam = "value")}}></input>
            <label>Home Team Points per TD:</label>
            <input type="number" name="homeTeamPoints" value={7}></input>

            <label>Enter the away team's name:</label>
            <input type="text" name="awayTeamName" value="Away Team Name"></input>
            <label>Away Team Points per TD:</label>
            <input type="number" name="awayTeamPoints" value={7}></input>

            {/* <input type="submit" value="Submit" onClick={() => {

            }}></input> */}
        </form>       


    );
}

export default Teams;