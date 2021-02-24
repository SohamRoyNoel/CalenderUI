import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DatePickerComponent from "./DatePicker.Component";
import Button from "@material-ui/core/Button";

function App() {
  const [checkedM, setCheckedM] = React.useState(false);
  const [checkedT, setCheckedT] = React.useState(false);
  const [checkedW, setCheckedW] = React.useState(false);
  const [checkedTh, setCheckedTh] = React.useState(false);
  const [checkedF, setCheckedF] = React.useState(false);
  const [checkedSa, setCheckedSa] = React.useState(false);
  const [checkedSu, setCheckedSu] = React.useState(false);

  const handleChange = (event) => {
    let selected = event.target.name;
    switch (selected) {
      case "monday":
        checkedM === true ? setCheckedM(false) : setCheckedM(true);
        break;
      case "tuesday":
        checkedT === true ? setCheckedT(false) : setCheckedT(true);
        break;
      case "wednesday":
        checkedW === true ? setCheckedW(false) : setCheckedW(true);
        break;
      case "thursday":
        checkedTh === true ? setCheckedTh(false) : setCheckedTh(true);
        break;
      case "friday":
        checkedF === true ? setCheckedF(false) : setCheckedF(true);
        break;
      case "saturday":
        checkedSa === true ? setCheckedSa(false) : setCheckedSa(true);
        break;
      case "sunday":
        checkedSu === true ? setCheckedSu(false) : setCheckedSu(true);
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div>
        &nbsp; Monday
        <Checkbox
          checked={checkedM}
          name="monday"
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />{" "}
        &nbsp; Start Time{" "}
        <DatePickerComponent
          day={checkedM === true ? "monday" : ""}
          sOe={checkedM === true ? "s" : ""}
        />
        END Time
        <DatePickerComponent
          day={checkedM === true ? "monday" : ""}
          sOe={checkedM === true ? "e" : ""}
        />
        <br />
        &nbsp; Tuesday
        <Checkbox
          checked={checkedT}
          name="tuesday"
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />{" "}
        &nbsp; Start Time
        <DatePickerComponent
          day={checkedT === true ? "tuesday" : ""}
          sOe={checkedM === true ? "s" : ""}
        />
        END Time
        <DatePickerComponent
          day={checkedT === true ? "tuesday" : ""}
          sOe={checkedM === true ? "e" : ""}
        />
        <br />
        &nbsp; Wednesday
        <Checkbox
          checked={checkedW}
          name="wednesday"
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />{" "}
        &nbsp; Start Time
        <DatePickerComponent
          day={checkedW === true ? "wednesday" : ""}
          sOe={checkedM === true ? "s" : ""}
        />
        END Time
        <DatePickerComponent
          day={checkedW === true ? "wednesday" : ""}
          sOe={checkedM === true ? "e" : ""}
        />
        <br />
        &nbsp; Thursday
        <Checkbox
          checked={checkedTh}
          name="thursday"
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />{" "}
        &nbsp; Start Time
        <DatePickerComponent
          day={checkedTh === true ? "thursday" : ""}
          sOe={checkedM === true ? "s" : ""}
        />
        END Time
        <DatePickerComponent
          day={checkedTh === true ? "thursday" : ""}
          sOe={checkedM === true ? "e" : ""}
        />
        <br />
        &nbsp; Friday
        <Checkbox
          checked={checkedF}
          name="friday"
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />{" "}
        &nbsp; Start Time
        <DatePickerComponent
          day={checkedF === true ? "friday" : ""}
          sOe={checkedM === true ? "s" : ""}
        />
        END Time
        <DatePickerComponent
          day={checkedF === true ? "friday" : ""}
          sOe={checkedM === true ? "e" : ""}
        />
        <br />
        &nbsp; Saturday
        <Checkbox
          checked={checkedSa}
          name="saturday"
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />{" "}
        &nbsp; Start Time
        <DatePickerComponent
          day={checkedSa === true ? "saturday" : ""}
          sOe={checkedM === true ? "s" : ""}
        />
        END Time
        <DatePickerComponent
          day={checkedSa === true ? "saturday" : ""}
          sOe={checkedM === true ? "e" : ""}
        />
        <br />
        &nbsp; Sunday
        <Checkbox
          checked={checkedSu}
          name="sunday"
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        &nbsp; Start Time
        <DatePickerComponent
          day={checkedSu === true ? "sunday" : ""}
          sOe={checkedM === true ? "s" : ""}
        />
        END Time
        <DatePickerComponent
          day={checkedSu === true ? "sunday" : ""}
          sOe={checkedM === true ? "e" : ""}
        />
        <br />
        <Button
          onClick = {saveTimeSheet}
          variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
}

const saveTimeSheet = () => {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    // console.log("====> ", localStorage.getItem(keys[i]));
    values.push(JSON.parse(localStorage.getItem(keys[i])));
    // values.push(localStorage.getItem(keys[i]));
  }

  localStorage.clear();
  let workHours = {
    workingHours: values
  };
  console.log(JSON.stringify(workHours));
}

export default App;
