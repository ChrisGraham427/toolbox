import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import ProjectList from "./components/ProjectListbyID";
const API_URL = "http://localhost:8080";

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    axios
      .get(`${API_URL}/project`)
      .then((res) => {
        this.setState({
          projects: res.data,
        });
      })
      .catch((err) => {
        console.log("cannnot find project", err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <ProjectList />
      </div>
    );
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
