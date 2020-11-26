import React, {useState, useRef} from "react";
import Styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {debounce} from "lodash";

import {customLoop, sortFloors} from "./Helpers"

import ElevatorStop from "../ElevatorStop";

const Elevator = ({classes, amountFloors}) => {
    const [state, setState] = useState({
        current: 0,
        direction: "",
        nextFloors: [],
    })
    const setCurrent = (number) => {
        setState({
            ...state,
            current: number,
        })
    }
    const setDirection = (string) => {
        setState({
            ...state,
            direction: string,
        })
    }
    const setNextFloors = (array) => {
        setState({
            ...state,
            nextFloors: array,
        })
    }

    const addFloor = (floor) => {

        if (state.direction === "") {
            alert("Please press a direction before selecting the floors")
        } else {
            // not proud of this, but because I use a reference and call function right after, I need to get
            // the full array right away and not with a small delay which the state will take to update
            let nextFloorsTemp = sortFloors(state.nextFloors.concat(floor), state);

            setNextFloors(nextFloorsTemp);

            goToFloor(nextFloorsTemp, setCurrent);
        }
    }

    const goToFloor = useRef(debounce((floors) => {
        if (floors.length === 0) {
            floors = [0]
        }
        const numberOfFloors = floors.length;

        customLoop(floors, numberOfFloors, 0, setState, state);


    }, 2000)).current;


    const stopGenerator = (amount) => {
        let stops = []
        for (let i = amount; i > -1; i--) {
            stops.push(<ElevatorStop key={i} floorNumber={i} current={i === state.current} nextFloors={state.nextFloors}
                                     direction={state.direction} setDirection={setDirection}
                                     onClick={() => addFloor(i)}/>)
        }
        return stops;
    }

    return (
        <div className={classes.root}>
            {stopGenerator(amountFloors)}
        </div>
    );
}

export default withStyles(Styles)(Elevator);
