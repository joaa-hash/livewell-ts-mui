import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props: any) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="secondary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
