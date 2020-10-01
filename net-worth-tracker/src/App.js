import React, { Fragment, useState } from "react";
import "./App.css";
import NetWorthForm from "./components/Form/form";
import NetWorthTable from "./components/Table/table";

function App() {
  const [updateTable, setUpdateTable] = useState(false);

  function handleUpdateTable(state) {
    setUpdateTable(state);
  }

  return (
    <Fragment>
      <h1>Net Worth Tracker</h1>
      <NetWorthForm handleUpdateTable={handleUpdateTable} />
      <NetWorthTable
        handleUpdateTable={handleUpdateTable}
        updateTable={updateTable}
      />
    </Fragment>
  );
}

export default App;
