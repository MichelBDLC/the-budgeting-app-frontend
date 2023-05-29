import Transaction from "../components/Transaction";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Index(props) {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    axios
      .get(`${API}/transactions`)
      .then((response) => {

        setTransactions(response.data);

        const totalAmount = response.data.reduce(
          (accumulator, transaction) => accumulator + transaction.amount,
          0
        );

        props.setTotal(totalAmount);

        if (totalAmount > 100) {
          props.setColor('green');
        } 
        else if (0 < totalAmount < 100) {
          props.setColor('blue');
        }
        else if (totalAmount < 0) {
          props.setColor('red')
        }
      })
      .catch((error) => {
        console.error('catch', error);
      });
  }, []);

  return (
    <>
      <h3> Total Amount: <p style={{ color: props.color }}> {props.total} </p> </h3>
      <br />
      <Transaction transactions={transactions} />
      <br />
    </>
  );
}
