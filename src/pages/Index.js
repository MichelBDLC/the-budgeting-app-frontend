import AllTransactions from "./AllTransactions";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Index() {

    const [transactions, setTransactions] = useState([]);

    const navigate = useNavigate();

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
        {/* <AllTransactions /> */}
        {
            transactions.map((transaction) => {

                return (
                    <div key={transaction.id}>
                        <p> {transaction.date} {transaction.name} {transaction.amount} </p> 
                    </div>
                )
            })
        }
        </>
    )
};