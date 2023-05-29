import Transaction from "../components/Transaction";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Index() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
       axios
        .get(`${API}/transactions`)
        .then((response) => {
            setTransactions(response.data);
        })
        .catch(e => console.error('catch', e));
    }, []);

    return (
        <>
        <br />
        <Transaction transactions={transactions} />
        <br />
        </>
    )
};