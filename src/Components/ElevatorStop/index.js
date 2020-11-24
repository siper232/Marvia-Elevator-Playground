import React from "react";
import Styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Classnames from "classnames"

import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";

import {ArrowDropUp, ArrowDropDown} from "@material-ui/icons"
import {Button} from "@material-ui/core";


const ElevatorStop = ({classes, floorNumber, current, nextFloors}) => {

    const nextFloorsGenerator = (floors) => (
        <div className={classes.nextStopIconContainer}>
            {floors.map((floor) => (
                    <span className={classes.nextStopCircle}>
                    <Typography className={classes.nextStopTitle}>
                        {floor}
                    </Typography>
                </span>
                )
            )}
        </div>
    )

    return (
        <div className={classes.root}>
            <div className={classes.iconContainer}>
                <ArrowDropUp/>
                <ArrowDropDown/>
            </div>
            <Button className={classes.button}>
                <Card className={Classnames(classes.stopBox, current ? classes.currentStop : classes.normalStop)}>
                    <div className={classes.cardContent}>
                        <Typography className={classes.title}>
                            {floorNumber}
                        </Typography>
                        {nextFloors && current && nextFloorsGenerator(nextFloors.reverse())}
                    </div>
                </Card>
            </Button>
        </div>
    )
}

export default withStyles(Styles)(ElevatorStop);
