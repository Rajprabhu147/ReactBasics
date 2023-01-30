import React, { Component } from "react";

export default class ClassComponents extends Component {
  constructor(props) {
    super(props);
    //State Declaration
    this.state = {
      name: "Raj Prabhu",
      work: "React Developer",
      spinner: true,
    };
  }
  //change the state by event handler function
  changeState = () => {
    this.setState({
      name: "Raj Prabhu Rajasekaran",
      work: "Full Stack Developer",
    });
    console.log("State has been changed")
  };

  componentDidMount() {
    console.log("component did mounted just now");
    setTimeout(() => {
      this.setState({ spinner: false });
    }, 3000);
  }
  componentDidUpdate() {
    console.log("component did Updated just Now");
  }
  componentWillUnmount() {
    console.log("component Will Unmount just Now");
  }

  render() {
    return (
      <div>
        <h1>Class Components</h1>
        <div>
          <h2>1. State is the Object to store data in the component</h2>
          <h5>
            Now Changing the State of the Component using setState and event
            handle function changeState
          </h5>
          <p>
            The State in this component -{" "}
            <strong>
              {this.state.name} {this.state.work}
            </strong>
          </p>
          <button onClick={this.changeState}>Click to Change State</button>
        </div>
        <hr />
        <div>
          <h2>2. Props are like function arguments sent to the component  - "this.props.name"</h2>
          <h5>
            Props are Immutable so cannot be Modified, Only be passed as
            arguments
          </h5>
          <p>
            The props in this component - <strong>{this.props.location}</strong>
          </p>
        </div>
        <hr />
        <div>
          <h2>3. LifeCycle Methods of Class Based Components</h2>
          <h4>a. Component Did Mount</h4>
          <p>
            As soon as the page renders component gets mounted, it shows in the
            console
          </p>
          <h4>b. Component Did Update</h4>
          <p>Shows in Console log after getting updated</p>
          {this.state.spinner ? "Loading..." : "Data is Loaded!"}
          <h4>c. Component Will Unmount</h4>
          <p>Shows in Console that component will Unmount Now</p>
        </div>
      </div>
    );
  }
}
