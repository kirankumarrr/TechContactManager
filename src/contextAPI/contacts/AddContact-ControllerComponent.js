import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //    {this.setState({[e.target.name], e.target.value})}
  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email..."
                  value={email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter phone..."
                  value={phone}
                  onChange={this.onChange}
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddContact;
