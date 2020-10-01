import React, { Fragment, useEffect, useState } from "react";
import { useTable } from "react-table";
import "./table.css";

function NetWorthTable({ handleUpdateTable, updateTable }) {
  // Hooks
  const [assets, setAssets] = useState(
    JSON.parse(localStorage.getItem("assets") || "[]")
  );

  // Handlers
  function handleAssetChange() {
    setAssets(JSON.parse(localStorage.getItem("assets") || "[]"));
  }

  // Information required for Table
  const data = React.useMemo(() => assets);
  const columns = React.useMemo(
    () => [
      {
        Header: "Asset",
        accessor: "asset",
      },
      {
        Header: "Value",
        accessor: "value",
      },
      {
        Header: "Currency",
        accessor: "currency",
      },
      {
        Header: "Month",
        accessor: "month",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  // Updates data when a new asset is added
  useEffect(() => {
    handleAssetChange();
    handleUpdateTable(false);
  }, [updateTable]);

  return (
    <Fragment>
      <h2>Net Worth Table</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default NetWorthTable;
