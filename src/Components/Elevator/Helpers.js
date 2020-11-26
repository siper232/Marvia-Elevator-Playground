export const customLoop = (floors, length, i, setState, state) => {
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
            customLoop(floors, length, i, setState);
        }
    }, 500);
}


export const sortFloors = (nextFloors, state) => {
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
                tempArray.sort((a, b) => b - a);
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
