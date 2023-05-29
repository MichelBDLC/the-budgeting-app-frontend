import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import '../css/TransactionId.css';

const API = process.env.REACT_APP_API_URL;

export default function TransactionId() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [transaction, setTransaction] = useState({});

    useEffect(() => {
        axios
        .get(`${API}/transactions/${id}`)
        .then(response => {
            setTransaction(response.data)
        })
        .catch((e) => {
            console.error(e);
        });
    }, [id]);

    return (
        <>
        <br />
        <button onClick={() => navigate('/')} className="gobackbtn"> Go Back </button>
        <br />
        {
            transaction && (
                <>
                 <button onClick={() => navigate(`${transaction.id}/edit`)}> Edit </button>
                 <br />
                 <h2> {transaction.name} </h2>
                 <p> Amount: {transaction.amount}</p>
                 <p> Date: {transaction.date} </p>
                 <p> Category: {transaction.category} </p>
                 <p> Origin: {transaction.origin} </p>
                </>
            )
        }
        </>
    )

    //if clicked on pull all other transactions that are within that date, category, origin, amount, or name
}