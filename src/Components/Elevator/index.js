import React, {useState, useRef} from "react";
import Styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {debounce} from "lodash";

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
            // let nextFloorsTemp = state.nextFloors.concat(floor);
            let nextFloorsTemp = sortFloors(state.nextFloors.concat(floor));

            setNextFloors(nextFloorsTemp);

            goToFloor(nextFloorsTemp, setCurrent);
        }
    }

    const goToFloor = useRef(debounce((floors) => {
        if (floors.length === 0) {
            floors = [0]
        }
        const numberOfFloors = floors.length;

        customLoop(floors, numberOfFloors, i);
        i = 0;

    }, 2000)).current;


    let i = 0
    const customLoop = (floors, length) => {
        setTimeout(() => {
            let tempCurrent = floors[0];
            floors.shift();
            setState({
                ...state,
                current: tempCurrent,
                nextFloors: floors,
            });
            i++;
            if (i < length) {
                customLoop(floors, length);
            }
        }, 500);
    }

    const sortFloors = (nextFloors) => {
        let tempArray = nextFloors;
        let begin = [];
        let end = [];
        let found = false;

        tempArray = [...new Set(tempArray)];
        tempArray = tempArray.filter((item) => item !== state.current);

        switch (state.direction) {
            case "up":
                if (state.current === 0) {
                    tempArray = nextFloors;
                    tempArray.sort();
                    return tempArray;
                } else {
                    tempArray.sort();
                    for (let i = 0; i < tempArray.length; i++) {
                        if ((state.current - tempArray[i]) < 0) {
                            begin = tempArray.slice(i);
                            end = tempArray.slice(0, i);
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        return begin.concat(end.sort());
                    } else {
                        return tempArray.sort().reverse();
                    }
                }
            case "down":
                if (state.current === 5) {
                    tempArray = nextFloors;
                    tempArray.sort().reverse();
                    return tempArray;
                } else {
                    tempArray.sort((a, b) => b-a);
                    for (let i = 0; i < tempArray.length; i++) {
                        if ((state.current - tempArray[i]) > 0) {
                            begin = tempArray.slice(i);
                            end = tempArray.slice(0, i);
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        return begin.concat(end.sort());
                    } else {
                        return tempArray.sort();
                    }
                }
            default:
                // should never come here because of the check on line 37
                break;
        }
    }





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
