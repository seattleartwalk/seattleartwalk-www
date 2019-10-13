import React, { Component } from "react";
import IBWelcome from "./InfoBox/IBWelcome";
import IBDetail from "./InfoBox/IBDetail";
import "./InfoBox.css";

class InfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let cls = "InfoBox"
    if (this.props.searchActive) {
      cls += " InfoBox--search"
    }
    if (this.props.detailVisible) {
      cls += " InfoBox--detail"
    }

    return (
      <div className={cls}>
        <div className="InfoBox-contents">
          <IBWelcome
            search={this.props.search}
            searchActive={this.props.searchActive}
            setSearch={this.props.setSearch}
            activateSearch={this.props.activateSearch}
            deactivateSearch={this.props.deactivateSearch}
            commitSearch={this.props.commitSearch}
          />
          <IBDetail
            data={this.props.data}
            closeDetail={this.props.closeDetail}
            commitSearch={this.props.commitSearch}
          />
        </div>
      </div>
    );
  }
}

export default InfoBox;
