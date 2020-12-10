import React, { Component } from "react";
import axios from "axios";
import ProjectMain from "./components/ProjectMain";
import ContactMain from "./components/ContactMain";
import ImageMain from "./components/ImageMain";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";
import MainSchedule from "./components/MainSchedule";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Scheduler from "./components/Scheduler";
// import e from "express";
const API_URL = "http://localhost:8080";

class App extends Component {
  state = {
    project: [],
    contact: [],
    image: [],
    description: "",
    selectedFile: "",
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
  //----------------------POST PROJECT
  handleChangeProject = (event) => {
    this.setState({ project: event.target.value });
  };
  handleSubmitProject = (event) => {
    event.preventDefault();
    const project = {
      title: event.target.title.value,
      description: event.target.description.value,
      streetNumber: event.target.streetNumber.value,
      streetName: event.target.streetName.value,
      city: event.target.city.value,
      province: event.target.province.value,
      postalCode: event.target.postalCode.value,
      contact: "Fred",
      images: "1",
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
    };

    axios.post(`${API_URL}/project`, { project }).then((res) => {
      console.log(res.data);
      console.log(this.state.projects);
      this.setState({ project: [...this.state.project, res.data] });
    });
  };

  //======----===---===-=---

  //=====DELETE PROJECTS=======
  handleDeleteProjects = (event, id) => {
    this.setState({ id: event.target.value });
  };
  handleDeleteSubmitProject = (event, id) => {
    console.log("DELETE");
    event.preventDefault();

    axios.delete(`${API_URL}/project/${id}`).then(() => {
      this.getProject();
    });
  };

  ///============GET CONTACTS==================
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
  // POST CONTACT Functions-----------------------------
  handleChangeContacts = (event) => {
    this.setState({ contact: event.target.value });
  };
  handleSubmitContact = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.company.value);
    console.log(event.target.position.value);
    console.log(event.target.email.value);

    const contact = {
      name: event.target.name.value,
      company: event.target.company.value,
      position: event.target.position.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      project_id: event.target.project_id.value,
    };

    axios.post(`${API_URL}/contact`, { contact }).then((res) => {
      this.setState({ contact: [...this.state.contact, res.data] });
    });
  };
  //------------------------------------------------
  //=====DELETE CONTACTS=======
  handleDeleteContacts = (event, id) => {
    this.setState({ id: event.target.value });
  };
  handleDeleteSubmitContacts = (event, id) => {
    console.log("DELETE");
    event.preventDefault();

    axios.delete(`${API_URL}/contact/${id}`).then(() => {
      this.getContacts();
    });
  };

  //=========GET IMAGES============
  getImages() {
    axios
      .get(`${API_URL}/image`)
      .then((res) => {
        this.setState({
          image: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //=======POST IMAGE-----------

  onChangeImage = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  handleSubmitImage = (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const title = event.target.title.value;
    const { selectedFile } = this.state;

    let formData = new FormData();

    formData.append("description", description);
    formData.append("selectedFile", selectedFile);
    formData.append("title", title);

    axios.post(`${API_URL}/image`, formData).then((result) => {
      console.log(result);
    });
  };

  //======DELETE IMAGE==========
  handleDeleteImage = (event, id) => {
    this.setState({ id: event.target.value });
  };
  handleDeleteSubmitImage = (event, id) => {
    event.preventDefault();

    axios.delete(`${API_URL}/image/${id}`).then(() => {
      this.getImages();
    });
  };
  //==============================

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/project"
            render={() => (
              <ProjectMain
                handleSubmit={this.handleSubmitProject}
                submitDelete={this.handleDeleteSubmitProject}
                data={this.state.project}
              />
            )}
            exact
          />
          <Route
            path="/contact"
            render={() => (
              <ContactMain
                submitDelete={this.handleDeleteSubmitContacts}
                handleSubmit={this.handleSubmitContact}
                data={this.state.contact}
              />
            )}
            exact
          />
          <Route
            path="/images"
            render={() => (
              <ImageMain
                changeImage={this.onChangeImage}
                submitImage={this.handleSubmitImage}
                submitDelete={this.handleDeleteSubmitImage}
                data={this.state.image}
              />
            )}
            exact
          />
          <Route path="/" component={Hero} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/schedule" component={MainSchedule} exact />
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
