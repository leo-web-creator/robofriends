import React, { Component } from "react";
// import { isCompositeComponentWithType } from 'react-dom/test-utils';
import CardList from "../components/CardList.js";
// import { robots } from './robots.js';./components
import SearchBox from "../components/SearchBox.js";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theRobot: [],
      searchField: "",
    };
    console.log("MOUNTING CYCLE : Constructor");
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  // componentDidMount() adalah method yang dipanggil terakhir kali dalam MOUNTING cycle;
  // MOUNT CYCLE (waktu web jalan pertama kali):
  // 1. constructor
  // 2. render
  // 3. componentDidMount()

  // UPDATING CYCLE: (dijalankan setelah MOUNT CYCLE)
  // 1. render
  // 2. componentDidUpdate()
  // Method ini salah satu adalah method/function "life cycle" bawaan react, jadi declare nya tidak pakai arrow function / method
  componentDidMount() {
    // Jika ambil data nya dari record pada file robots.js di harddsik (pasanngannya "import { robots } from './robots.js')
    // this.setState({theRobot : robots});

    // Jika ambil data nya dari suatu sumber lain (web site lain) di internet
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((robots) => {
        this.setState({ theRobot: robots });
      });
    // karena ada perubahan value/isi dari state robot "pada function ini" (dianggap terjadi "state update")
    // maka render akan dijalankan 1x lagi (karena telah terjadi UPDATING / masuk proses UPDATING CYCLE)
    // setelah itu jalankan method/function componentDidUpdate() (Jika terdapat method componentDidUpdate() ini pada class nya)
    console.log("MOUNTING CYCLE : componentDidMount method called");
  }

  render() {
    // Baris ini adalah untuk DESCTRUCTURING, artinya supaya kita tidak usah tulis "this.state" berulang kali
    // cukup ditulis / di declare 1x saja di const beserta {nama-nama variable yang pakai this.state nya}
    const { theRobot, searchField } = this.state;

    const filteredRobots = theRobot.filter((paramRobot) => {
      return paramRobot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log("MOUNTING OR UPDATING CYCLE : Render");

    // Jika hasil "Fetch" data dari website lain terlalu lama loading nya (misal data jumlah nya sangat banyak)

    // Scroll is a Component that WRAPS "other component" (WRAPS CardList component)
    // Scroll will have props.children (the children refer to the "CardList" component)
    // Example of using "Special tag: like the <Scroll> </Scroll> tag" in wrapping other special tag in react
    // can be seen in Scroll.js (using props.children where the CardList tag is considered as the children element of Scroll tag)

    // Jika data theRobot belum selesai di loading (lenght nya masih belum terbacah atau = 0)
    // maka munculkan tulisan "loading" (atau "sedang loading data")
    if (theRobot.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />

          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
