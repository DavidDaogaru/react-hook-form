import * as React from "react";
import { Controller } from "react-hook-form";
import { Switch, ThemeProvider } from "@chakra-ui/core";

export default ({ control }) => {
  return (
    <ThemeProvider>
      <div className="container">
        <section>
          <label>Chakra Swtich</label>
          <Controller
            control={control}
            name="ChakraSwitch"
            render={(props) => (
              <Switch
                onChange={(e) => props.onChange(e.target.checked)}
                isChecked={props.value}
              />
            )}
          />
        </section>
      </div>
    </ThemeProvider>
  );
};
