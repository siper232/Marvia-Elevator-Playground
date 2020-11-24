import React from "react";
import Styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

import ElevatorStop from "../ElevatorStop";

const Elevator = ({classes, amountFloors}) => {
    let current = 3;

    let nextFloors = [1, 2, 3, 4]


    const stopGenerator = (amount) => {
        let stops = []
        for (let i = amount; i > -1; i--) {
            stops.push(<ElevatorStop floorNumber={i} current={i === current} nextFloors={nextFloors.reverse()} />)
        }
        return stops;
    }

    return (
        <div className={classes.root}>
            {stopGenerator(amountFloors)}
        </div>
    )
}

export default withStyles(Styles)(Elevator);
