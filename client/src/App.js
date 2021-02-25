import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ProjectMain from "./components/ProjectMain";
import ContactMain from "./components/ContactMain";
import ImageMain from "./components/ImageMain";
import TaskMain from "./components/TaskMain";

import LoginPage from "./components/LoginPage";
import MainSchedule from "./components/MainSchedule";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpdateProject from "./components/UpdateProject";
import moment from "moment";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import IDbyProject from "./components/IDbyProjectMain";

const API_URL = "http://localhost:8080";

class App extends Component {
  state = {
    project: [],
    contact: [],
    image: [],
    task: [],
    description: "",
    selectedFile: "",
    currentProject: "",
    currentContact: "",
    currentTask: "",
    currentImage: "",
    events: [
      {
        start: moment().toDate(),
        end: moment().add(0, "days").toDate(),
        title: "TODAY",
      },
      {
        start: new Date(2021, 0, 1, 24, 0, 0),
        end: new Date(2021, 0, 14, 24, 0, 0),
        title: "Atrezi",
      },

      {
        start: new Date(2021, 0, 14),
        end: new Date(2021, 0, 16),
        title: "Test",
      },
    ],
    userData: {},
    //authenicate logged in//
    isLoggedIn: false,
    isLandingPage: false,
  };

  componentDidMount() {
    // this.getUserData();
    this.getProject();
    this.getContacts();
    this.getImages();
    this.getTasks();
  }
  componentDidUpdate(previousProps, previousState) {
    this.urlChecker(previousState);
  }
  //--------LOGGED IN---//

  urlChecker = (previousState) => {
    console.log("PROPS.LOCATION", this.props.location.pathname);
    if (
      this.props.location.pathname === "/" &&
      previousState.isLandingPage === false
    ) {
      this.setState({ isLandingPage: true });
    } else if (
      this.props.location.pathname !== "/" &&
      previousState.isLandingPage === true
    ) {
      this.setState({ isLandingPage: false });
    }
  };
  //=============SCHEDULER

  onEventResize = (resizeType, { event, start, end }) => {
    const { events } = this.state.events;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };
  // ++++USER+++++++
  getUserData = () => {
    axios
      .get(`${API_URL}/profile`)
      .then((response) => {
        const { data: userData } = response;
        if (Object.keys(userData).length === 0) {
          console.log("need to login");
          return;
        } else {
          console.log(userData);
          this.setState({ userData });
        }
      })
      .catch((err) => console.log(err));
  };

  handleLogout = () => {
    axios
      .get(`${API_URL}/auth/logout`)
      .then((response) => {
        console.log(response);
        this.setState({ userData: {} });
      })
      .catch((err) => console.log(err));
  };

  ////+++++++++++++++++

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

  //------------------------------------
  handleProjectbyID = (event, callback) => {
    event.preventDefault();

    console.log("IDEVENT", event.target.projectId);
    this.setState(
      {
        currentProject: event.target.projectId.value,
        currentContact: event.target.projectId.value,
        currentTask: event.target.projectId.value,
        currentImage: event.target.projectId.value,
      },
      callback(
        this.state.currentProject,
        this.state.currentContact,
        this.state.currentTask,
        this.state.currentImage
      )
    );
  };
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

  //======----UPDATE PROJECT=---===-=---

  updateProjectById = (data, id) => {
    this.setState({ project: data });
    console.log("this.state.project", this.state.project);
    axios({
      method: "put",
      url: `${API_URL}/project/update/${id}`,
      data: { project: data },
    });
    // axios.put(
    //   `${API_URL}/project/${id}`,
    //   { project: this.state.project },
    //   (res) => {
    //     console.log(res);
    //   }
    // );
  };

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
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
  };
  handleSubmitImage = (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const title = event.target.title.value;
    const project_id = event.target.project_id.value;
    const { selectedFile } = this.state;

    let formData = new FormData();

    formData.append("description", description);
    formData.append("selectedFile", selectedFile);
    formData.append("title", title);
    formData.append("project_id", project_id);

    axios.post(`${API_URL}/image`, formData).then((result) => {
      this.getImages();
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
  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\TASK\\\\\\\\\\\\\\\\
  getTasks() {
    axios
      .get(`${API_URL}/task`)
      .then((res) => {
        this.setState({
          task: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChangeTasks = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmitTask = (event) => {
    event.preventDefault();

    const task = {
      category: event.target.category.value,
      task: event.target.task.value,
      description: event.target.description.value,

      project_id: event.target.project_id.value,
    };

    axios.post(`${API_URL}/task`, { task }).then((res) => {
      this.setState({ task: [...this.state.task, res.data] });
    });
  };

  handleDeleteTasks = (event, id) => {
    this.setState({ id: event.target.value });
  };
  handleDeleteSubmitTasks = (event, id) => {
    console.log("DELETE");
    event.preventDefault();

    axios.delete(`${API_URL}/task/${id}`).then(() => {
      this.getTasks();
    });
  };

  render() {
    return (
      <div>
        {this.state.isLandingPage === true ? null : (
          <Header handleProjectbyID={this.handleProjectbyID} />
        )}

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
          {/* <Route path="/" component={Hero} exact /> */}
          <Route
            path="/"
            render={() => (
              <LoginPage
                data={this.state.userData}
                handleLogout={this.handleLogout}
              />
            )}
            exact
          />
          <Route
            path="/schedule"
            render={() => (
              <MainSchedule
                onEventResize={this.onEventResize}
                moveEvent={this.moveEvent}
                data={this.state.events}
              />
            )}
            exact
          />
          <Route
            path="/task"
            render={() => (
              <TaskMain
                submitDelete={this.handleDeleteSubmitTasks}
                handleSubmit={this.handleSubmitTask}
                data={this.state.task}
              />
            )}
            exact
          />
          <Route
            path="/project/:id"
            render={() => (
              <IDbyProject
                currentTaskId={this.state.currentTask}
                taskData={this.state.task}
                imageData={this.state.image}
                contactData={this.state.contact}
                data={this.state.project}
                currentImageId={this.state.currentImage}
                currentProjectId={this.state.currentProject}
                currentContactId={this.state.currentContact}
                submitDelete={this.handleDeleteSubmitTasks}
                handleSubmit={this.handleSubmitTask}
              />
            )}
            exact
          />
          <Route
            path="/update"
            render={() => (
              <UpdateProject
                data={this.state.project}
                updateProjectById={this.updateProjectById}
              />
            )}
          />
        </Switch>
        {this.state.isLandingPage === true ? null : <Footer />}
      </div>
    );
  }
}

export default withRouter(App);
