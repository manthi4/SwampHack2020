import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [deck, setDeck] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setDeck(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="deck selection">
          Deck
        </InputLabel>
        <Select value={deck} onChange={handleChange} labelWidth={labelWidth}>
          <MenuItem value={1}>Lower Deck</MenuItem>
          <MenuItem value={2}>Upper Deck</MenuItem>
          <MenuItem value={3}>Sun Deck</MenuItem>
          <MenuItem value={4}>Terrace</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
