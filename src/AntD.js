import * as React from "react";
import { Controller } from "react-hook-form";
import {
  Input,
  Select,
  Checkbox as AntdCheckbox,
  Switch as AntdSwitch,
  Slider as AntdSlider,
  Radio
} from "antd";

const { Option } = Select;

export default ({ control }) => (
  <div className="container">
    <section>
      <label>Antd Input</label>
      <Controller
        placeholder="AntD Input"
        as={Input}
        control={control}
        name="AntdInput"
      />
    </section>

    <section>
      <label>Antd Checkbox</label>
      <Controller
        control={control}
        name="AntdCheckbox"
        render={({ value, onChange }) => (
          <AntdCheckbox
            checked={value}
            onChange={e => {
              onChange(e.target.checked);
            }}
          />
        )}
      />
    </section>

    <section>
      <label>Antd Switch</label>
      <Controller
        control={control}
        name="AntdSwitch"
        render={({ value, onChange }) => (
          <AntdSwitch onChange={onChange} checked={value} />
        )}
      />
    </section>

    <section>
      <label>Antd Select</label>
      <Controller
        control={control}
        name="AntdSelect"
        as={
          <Select defaultValue="lucy">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        }
      />
    </section>

    <section>
      <label>Antd Slider</label>
      <Controller control={control} name="AntdSlider" as={<AntdSlider />} />
    </section>

    <section>
      <label>Antd Radio</label>
      <Controller
        control={control}
        name="AntdRadio"
        render={({ onChange, value }) => (
          <Radio.Group value={value} onChange={e => onChange(e.target.value)}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        )}
      />
    </section>
  </div>
);
