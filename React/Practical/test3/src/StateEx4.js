import React from "react";

class StateEx4 extends React.Component {
  state = { bol: false };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          onClick={(e) => {
            console.log(e.target.checked)
          }}
        ></input>
        <b>{this.state.bol}</b>

        {this.state.bol ? "true" : "false"}
      </div>
    );
  }
}
export default StateEx4;
