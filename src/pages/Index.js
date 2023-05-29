import Transaction from "../components/Transaction";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Index() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {

    axios
      .get(`${API}/transactions`)
      .then((response) => {

        setTransactions(response.data);

        const totalAmount = response.data.reduce(
          (accumulator, transaction) => accumulator + transaction.amount,
          0
        );

        setTotal(totalAmount);

        if (totalAmount > 100) {
          setColor('green');
        } 
        else if (0 < totalAmount < 100) {
          setColor('blue');
        }
        else if (totalAmount < 0) {
          setColor('red')
        }
      })
      .catch((error) => {
        console.error('catch', error);
      });
  }, []);

  return (
    <>
      <h3> Total Amount: <p style={{ color: color }}> {total} </p> </h3>
      <br />
      <Transaction transactions={transactions} />
      <br />
    </>
  );
}
