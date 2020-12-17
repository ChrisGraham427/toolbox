import { relativeTimeThreshold } from "moment";
import React, { Component } from "react";
const API_URL = "http://localhost:8080";

class UpdateProject extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    streetName: "",
    streetNumber: "",
    city: "",
    province: "",
    postalCode: "",
    startDate: "",
    endDate: "",
  };
  componentDidMount() {
    this.setState({
      id: this.props.data[0]?.id,
      title: this.props.data[0]?.title,
      description: this.props.data[0]?.description,
      streetName: this.props.data[0]?.streetName,
      streetNumber: this.props.data[0]?.streetNumber,
      city: this.props.data[0]?.city,
      province: this.props.data[0]?.province,
      postalCode: this.props.data[0]?.postalCode,
      startDate: this.props.data[0]?.startDate,
      endDate: this.props.data[0]?.endDate,
    });
  }
  handleProjectChange = (event) => {
    this.setState({
      id: this.props.data[event.target.value]?.id,
      title: this.props.data[event.target.value]?.title,
      description: this.props.data[event.target.value]?.description,
      streetName: this.props.data[event.target.value]?.streetName,
      streetNumber: this.props.data[event.target.value]?.streetNumber,
      city: this.props.data[event.target.value]?.city,
      province: this.props.data[event.target.value]?.province,
      postalCode: this.props.data[event.target.value]?.postalCode,
      startDate: this.props.data[event.target.value]?.startDate,
      endDate: this.props.data[event.target.value]?.endDate,
    });
  };
  updateFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.updateProjectById(this.state, this.state.id);
  };
  render() {
    return (
      <section className="updateproject">
        <div className="updateproject__div">
          <h1 className="updateproject__title">UPDATE PROJECTS</h1>
          <div className="updateproject__select-div">
            <h2 className="updateproject__title-id">SELECT PROJECT</h2>
            {Array.isArray(this.props.data) ? (
              <select
                className="updateproject__form-select"
                closeMenuOnSelect={true}
                onChange={this.handleProjectChange}
              >
                {this.props.data.map((project, index) => {
                  return <option value={index}>{project.title}</option>;
                })}
              </select>
            ) : (
              ""
            )}
          </div>
          <form
            onChange={this.updateFormChange}
            className="updateproject__form"
            onSubmit={this.handleSubmit}
          >
            <div className="updateproject__form-div">
              <div className="updateproject__form-div-left">
                <label className="updateproject__form-label">
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  className="updateproject__form-input-title"
                  value={this.state.title}
                />
                <label className="updateproject__form-label">
                  Project Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Project Description"
                  className="updateproject__form-input-description"
                  value={this.state.description}
                />
              </div>
              <div className="updateproject__form-div-right">
                <label className="updateproject__form-label">
                  Street Number
                </label>
                <input
                  type="text"
                  name="streetNumber"
                  placeholder="Enter Street Number"
                  className="updateproject__form-input"
                  value={this.state.streetNumber}
                />
                <label className="updateproject__form-label">Street Name</label>
                <input
                  type="text"
                  name="streetName"
                  placeholder="Enter Street Name"
                  className="updateproject__form-input"
                  value={this.state.streetName}
                />
                <label className="updateproject__form-label">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="updateproject__form-input"
                  value={this.state.city}
                />
                <label className="updateproject__form-label">Province</label>
                <input
                  type="text"
                  name="province"
                  placeholder="Enter Province"
                  className="updateproject__form-input"
                  value={this.state.province}
                />
                <label className="updateproject__form-label">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Enter Postal Code"
                  className="updateproject__form-input"
                  value={this.state.postalCode}
                />
                <label className="updateproject__form-label">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="updateproject__form-input"
                  value={this.state.startDate}
                />
                <label className="updateproject__form-label">End Date</label>

                <input
                  type="date"
                  name="endDate"
                  className="updateproject__form-input"
                  value={this.state.endDate}
                />
                <div className="updateproject__form-radio">
                  <label for="contactChoice1">Active</label>
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="active"
                  />

                  <label for="contactChoice3">On Hold</label>
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="onHold"
                  />
                </div>

                <select className="updateproject__form-select" name="type">
                  <option value="">-PROJECT TYPE--</option>
                  <option value="renovation">RENOVATION</option>
                  <option value="remodel">REMODEL</option>
                  <option value="designOnly">DESIGN ONLY</option>
                  <option value="subContract">SUBCONTRACT</option>
                  <option value="newConstruction">NEW CONSTRUCTION</option>
                  <option value="quote">QUOTE</option>
                </select>
                <div className="updateproject__form-button-div">
                  <button className="updateproject__form-button" type="submit">
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="updateproject__form-button-div">
              <button className="updateproject__form-button" type="submit">
                UPDATE
              </button>
            </div> */}
          </form>
        </div>
      </section>
    );
  }
}

export default UpdateProject;
