import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component.js";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import "./directory.style.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othersectionProps }) => (
      <MenuItem key={id} {...othersectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);
