import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

const _FishEnter = () => {
  return (
    <form>
      <input />
    </form>
  );
};

export const FishEnter = connect(
  null,
  null
)(
  reduxForm<any, any>({
    form: "fishEnter",
  })(_FishEnter)
);
