import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Asset } from "../../classes/Asset";
import "./form.css";

export default function NetWorthForm({ handleUpdateTable }) {
  const { register, handleSubmit, watch, errors } = useForm();
  var assets = JSON.parse(localStorage.getItem("assets") || "[]");

  const onSubmit = (data) => {
    const newAsset = new Asset(
      data.asset,
      data.value,
      data.currency,
      data.month
    );
    assets.push(newAsset);
    localStorage.setItem("assets", JSON.stringify(assets));
    handleUpdateTable(true);
  };

  function validValue(value) {
    if (isNaN(value)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <Fragment>
      <h2>Net Worth Form</h2>
      <form id="net-worth-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Assets */}

        <div className="input-pair">
          <label className="form-label">
            {" "}
            Asset {errors.asset && <div id="form-error"> &nbsp;* </div>}
          </label>
          <input
            className="form-input"
            type="text"
            name="asset"
            ref={register({ required: true })}
          />
        </div>
        {/* Value */}
        <div className="input-pair">
          <label className="form-label">
            {" "}
            Value {errors.value && <div id="form-error"> &nbsp;* </div>}{" "}
          </label>
          <input
            className="form-input"
            type="number"
            name="value"
            ref={register({ required: true, validate: validValue })}
          />
        </div>
        {/* Currency */}
        {/* Would probably use an API to pull list of valid Currencies and create a select box if given more time */}
        <div className="input-pair">
          <label className="form-label">
            {" "}
            Currency {errors.currency && (
              <div id="form-error"> &nbsp;* </div>
            )}{" "}
          </label>
          <input
            className="form-input"
            type="text"
            name="currency"
            ref={register({ required: true })}
          />
        </div>
        {/* Month */}
        {/* Could create an Enum for the months and pull from that to create the list of select options */}
        <div className="input-pair">
          <label className="form-label"> Month </label>
          <select
            className="form-input"
            type="text"
            name="month"
            ref={register({ required: true })}
          >
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
        </div>

        <input id="submit-button" type="submit" value="Submit" />
      </form>
    </Fragment>
  );
}
