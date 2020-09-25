import * as React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Slider
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import MuiAutoComplete from "./MuiAutoComplete";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default ({ control }) => (
  <ThemeProvider theme={theme}>
    <div className="container">
      <section>
        <label>MUI Picker</label>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Controller
            name="MUIPicker"
            control={control}
            render={(props) => (
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
                {...props}
              />
            )}
          />
        </MuiPickersUtilsProvider>
      </section>

      <section>
        <label>MUI Checkbox</label>
        <Controller
          name="Checkbox"
          control={control}
          render={(props) => (
            <Checkbox
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )}
        />
      </section>

      <section>
        <label>Radio Group</label>
        <Controller
          as={
            <RadioGroup aria-label="gender">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          }
          name="RadioGroup"
          control={control}
        />
      </section>

      <section>
        <label>MUI TextField</label>
        <Controller as={TextField} name="TextField" control={control} />
      </section>

      <section>
        <label>MUI Select</label>
        <Controller
          as={
            <Select>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          }
          name="Select"
          control={control}
        />
      </section>

      <section>
        <label>MUI Switch</label>
        <Controller
          name="switch"
          control={control}
          render={(props) => (
            <Switch
              onChange={(e) => props.onChange(e.target.checked)}
              checked={props.value}
            />
          )}
        />
      </section>

      <section>
        <label>MUI Slider</label>
        <Controller
          name="MUI_Slider"
          control={control}
          defaultValue={[0, 10]}
          render={(props) => (
            <Slider
              {...props}
              onChange={(_, value) => {
                props.onChange(value);
              }}
              valueLabelDisplay="auto"
              max={10}
              step={1}
            />
          )}
        />
      </section>

      <section>
        <label>MUI autocomplete</label>
        <MuiAutoComplete control={control} />
      </section>
    </div>
  </ThemeProvider>
);
