import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    margin: "auto"
  },
  margin: {
    height: theme.spacing(7),
    alignItems: "auto",
    justifyContent: "center"
  }
}));

const marks = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 16.6,
    label: "4"
  },
  {
    value: 33.2,
    label: "8"
  },
  {
    value: 49.8,
    label: "12"
  },
  {
    value: 66.4,
    label: "16"
  },
  {
    value: 83.0,
    label: "20"
  },
  {
    value: 100,
    label: "24"
  }
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Hours
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={4}
        marks={marks}
        valueLabelDisplay="off"
      />
    </div>
  );
}
