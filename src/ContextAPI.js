import React, { Component } from "react";

export const myContext = React.createContext();

const API =
  "https://pixabay.com/api/?key=17741685-8d03f6c8b2f4801e3cc8bd94b&q=";
const ImageType = "photo";

export default class ContextAPI extends Component {
  state = {
    fetchedData: [],
    SQuery: "Cars",
  };

  getAPIData = (SQuery) => {
    fetch(API + SQuery + "&image_type=" + ImageType + "&pretty=true")
      .then((response) => response.json())
      .then((data) => this.setState({ fetchedData: data["hits"] }));
  };

  componentDidMount() {
    const { SQuery } = this.state;
    this.getAPIData(SQuery);
  }

  render() {
    const { fetchedData } = this.state;
    return (
      <myContext.Provider
        value={{
          fetchedData,
          getSearchInput: (SQuery) => this.getAPIData(SQuery),
        }}
      >
        {this.props.children}
      </myContext.Provider>
    );
  }
}
