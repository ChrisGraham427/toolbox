import React, { Component } from "react";
import axios from "axios";
import ProjectMain from "./components/ProjectMain";
import ContactMain from "./components/ContactMain";
import ImageMain from "./components/ImageMain";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const API_URL = "http://localhost:8080";

class App extends Component {
  state = {
    project: [],
    contact: [],
    image: [],
  };

  componentDidMount() {
    this.getProject();
    this.getContacts();
    this.getImages();
  }

  getProject() {
    axios
      .get(`${API_URL}/project`)
      .then((res) => {
        console.log("message:LOOK HERE", res.data);
        this.setState({
          project: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getContacts() {
    axios
      .get(`${API_URL}/contact`)
      .then((res) => {
        console.log(res);
        this.setState({
          contact: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getImages() {
    axios
      .get(`${API_URL}/upload`)
      .then((res) => {
        this.setState({
          image: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/project" component={ProjectMain} exact />
          <Route
            path="/contact"
            component={ContactMain}
            data={this.state.contact}
            exact
          />
          <Route
            path="/images"
            component={ImageMain}
            data={this.state.image}
            exact
          />
          <Route path="/" component={Hero} exact />
          <Route path="/login" component={LoginPage} exact />
        </Switch>
      </div>
    );
  }
}

export default App;

// <Header />
// <Aside />
// <AddContact />
// <AddProject />
// <AddImage />
// <ProjectList data={this.state.project} />
// <ContactList data={this.state.contact} />
// <ImageList data={this.state.image} />

// <Footer />
