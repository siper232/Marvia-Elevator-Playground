import React from "react";
import Styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Classnames from "classnames"

import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";

import {ArrowDropUp, ArrowDropDown} from "@material-ui/icons"
import {Button, IconButton} from "@material-ui/core";


const ElevatorStop = ({classes, floorNumber, current, nextFloors, onClick, direction, setDirection}) => {

    const nextFloorsGenerator = (floors) => (
        <div className={classes.nextStopIconContainer}>
            {floors.map((floor) => (
                <span key={floor} className={classes.nextStopCircle}>
                    <Typography className={classes.nextStopTitle}>
                        {floor}
                    </Typography>
                </span>)
            )}
        </div>
    )

    return (
        <div className={classes.root}>
            <div className={classes.iconContainer}>
                <IconButton onClick={() => setDirection("up")}>
                    <ArrowDropUp
                        className={Classnames(classes.icon,
                            current && direction === "up" ? classes.activeIcon : classes.normalIcon)}
                    />
                </IconButton>
                <IconButton onClick={() => setDirection("down")}>
                    <ArrowDropDown className={Classnames(classes.icon,
                        current && direction === "down" ? classes.activeIcon : classes.normalIcon)}
                    />
                </IconButton>
            </div>
            <Button className={classes.button} onClick={onClick}>
                <Card className={Classnames(classes.stopBox, current ? classes.currentStop : classes.normalStop)}>
                    <div className={classes.cardContent}>
                        <Typography className={classes.title}>
                            {floorNumber}
                        </Typography>
                        {nextFloors && current && nextFloorsGenerator(nextFloors)}
                    </div>
                </Card>
            </Button>
        </div>
    )
}

export default withStyles(Styles)(ElevatorStop);
