import Transaction from "../components/Transaction";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Index() {

    const [transactions, setTransactions] = useState([]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
       axios
        .get(`${API}/transactions`)
        .then((response) => {
            setTransactions(response.data);
            for (let transaction of transactions) {
                let transactionAmount = transaction.amount;
                setTotal(transactionAmount =+ transactionAmount)
            }
        })
        .catch(e => console.error('catch', e));
    }, []);

    return (
        <>
        <h3> Total Amount: {total} </h3>
        <br />
        <Transaction transactions={transactions} />
        <br />
        </>
    )
};