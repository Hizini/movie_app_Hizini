import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span><center><p><br></br><br></br><br></br><br></br>{location.state.title}</p> {location.state.summary}</center></span>;
    } else {
      return null;
    }
  }
}
export default Detail;