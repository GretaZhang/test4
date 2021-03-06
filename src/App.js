import React from "react";
import "./App.css";
import { data } from "./items";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: "",
      items: [
        //   {
        //   id:"",
        //   site:"",
        //   category:"",
        //   info:"",
        //   lat:"",
        //   long:"",
        //   image:"",
        //   video:"",
        //   videoEmbed:""
        // }
      ],
    };
  }

  componentDidMount() {
    this.setState({
      bgImage: data.data.bgImage,
      items: data.data.items,
    });
  }

  // handleOnclick = (element) => console.log(element);

  render() {
    return (
      <div>
        <div
          className="bgImage"
          style={{ backgroundImage: `url(${this.state.bgImage})` }}
        >
          {/* <img src={this.state.bgImage} /> */}
          <h1>Swiss Highlights</h1>
          {/* <h2>Home</h2> */}

          {/* <select>
            <option>A</option>
            <option>B</option>
            <option value="C" onClick={this.handleOnclick}>
              C
            </option>
            <option>D</option>
          </select> */}
        </div>
        <div className="FirstIndex">
          {this.state.items.map((element) => (
            <div className="SecIndex" key={element.id}>
              <h4>{element.site}</h4>
              <img src={element.image} alt={element.site} />
              {/* <h5>{element.info}</h5> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// export default App;
