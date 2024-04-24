import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Table from "./components/table/Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
  { brand: "Dalia", income: 854300 },
  { brand: "Las Heras", income: 1030400 },
];

const mapIncome = netIncomes.map((arrayIncome) => arrayIncome.income);
const incomes =
  mapIncome.reduce((inc, current) => inc + current) / mapIncome.length;

function App() {
  return (
    <>
      <div className="container justify-content-center">
        <Table netIncomes={netIncomes} />
      </div>
      <p className="d-flex justify-content-center align-items-center">
        Promedio de todos los ingresos netos: ${incomes}
      </p>
    </>
  );
}

export default App;
