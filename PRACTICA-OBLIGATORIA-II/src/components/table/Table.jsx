import React from "react";
import PropTypes from "prop-types";
const Table = ({ netIncomes }) => {
  return (
    <>
      <table className="table table-info table-striped-columns table-hover">
        <thead>
          <tr>
            <th>Marca: </th>
            <th>Ingreso Neto: </th>
          </tr>
        </thead>
        <tbody className="table-group-divider table-secondary">
          {netIncomes.map((netIncomes, index) => (
            <tr key={index}>
              <td>{netIncomes.brand}</td>
              <td>{netIncomes.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

Table.propTypes = {
  netIncomes: PropTypes.array,
};
