import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";

const App = () => {
  return (
    <>
      <Particles params={particlesConfig} />
      <MainContainer />
    </>
  );
};

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "Initial capital": 0,
      APY: 0,
      "Period of interest": "years",
      "Number of interest periods": 0,
      futurValue: 0,
      interest: 0,
      showResult: false,
    };

    this.setData = this.setData.bind(this);
  }

  setData = (field, value) => {
    this.setState({
      [field]: value,
      showResult: false,
    });
  };

  compute = () => {
    if (
      this.state["Initial capital"] &&
      this.state["APY"] &&
      this.state["Period of interest"] &&
      this.state["Number of interest periods"]
    ) {
      const c0 = parseFloat(this.state["Initial capital"]);
      let i = parseFloat(this.state["APY"]);
      const n = parseFloat(this.state["Number of interest periods"]);

      if (isNaN(c0)) {
        alert("Initial capital must be a number");
        return;
      }

      if (isNaN(i)) {
        alert("APY must be a number");
        return;
      }

      if (isNaN(n)) {
        alert("Number of interest periods must be a number");
        return;
      }

      i = i / 100;

      const period = this.state["Period of interest"];

      switch (period) {
        case "years":
          break;

        case "months":
          i = i / 12;
          break;

        case "weeks":
          i = i / 52;
          break;

        case "days":
          i = i / 365;
          break;

        default:
          alert("Period of interest invalid");
          return;
      }

      const futurValue = c0 * Math.pow(1 + i, n);

      this.setState({
        showResult: true,
        futurValue: futurValue,
        interest: futurValue - c0,
      });

      return;
    }

    alert("Please fill all fields");
  };

  render() {
    return (
      <div className="main">
        <Input name="Initial capital" onChange={this.setData} placeholder={0} />
        <Input name="APY" onChange={this.setData} placeholder={0} unit="%" />
        <Select name="Period of interest" onChange={this.setData} />
        <Input
          name="Number of interest periods"
          onChange={this.setData}
          placeholder={0}
          unit={this.state["Period of interest"]}
        />
        <div className="btn" onClick={this.compute}>
          compute
        </div>

        {this.state.showResult && (
          <>
            <Result name="Futur value" value={this.state.futurValue} />
            <Result name="Interest" value={this.state.interest} />
          </>
        )}
      </div>
    );
  }
}

const Result = (props) => {
  return (
    <div className="result">
      <span className="field-name">{props.name} :</span>
      <span className="value">{props.value}</span>
    </div>
  );
};

const Input = (props) => {
  return (
    <div className="input">
      <span className="field-name">{props.name}</span>
      <input
        type="text"
        onChange={(event) => {
          props.onChange(props.name, event.target.value);
        }}
        placeholder={props.placeholder}
      />
      {props.unit && <span className="unit">{props.unit}</span>}
    </div>
  );
};

const Select = (props) => {
  return (
    <div className="select">
      <span className="field-name">{props.name}</span>
      <select
        onChange={(event) => {
          props.onChange(props.name, event.target.value);
        }}
      >
        <option value="years">Yearly</option>
        <option value="months">Monthly</option>
        <option value="weeks">Weekly</option>
        <option value="days">Daily</option>
      </select>
    </div>
  );
};

export default App;
