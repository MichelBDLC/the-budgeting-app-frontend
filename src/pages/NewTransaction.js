import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/New.css';

const API = process.env.REACT_APP_API_URL;

export default function NewTransaction() {

    const navigate = useNavigate();

    const [transactions, setTransactions] = useState([]);

    const [transaction, setTransaction] = useState({
        name: '',
        amount: '',
        date: '',
        origin: '',
        category: '',
    });

    const addTransaction = theNewTransaction => {
        axios
        .post(`${API}/transactions`, theNewTransaction)
        .then(response => {
            setTransactions([...transactions, response.data]);
        //    navigate(`/transactions/${transaction}`);
           navigate(`/`);
        },
            error => console.error(error)
        )
        .catch(c => console.warn('catch', c));
    };

    const handleTextChange = event => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        addTransaction(transaction);
    };

    return (
        <>
        <br />
        <button onClick={() => navigate('/')} className="gobackbtn"> Go Back </button>
        <br />
        <div>
            <br />
        <h2> New Transaction </h2>
        <br />
        <form onSubmit={handleSubmit}>
            <br />
            <div>
            <label> Name </label>
            <input id="name" value={transaction.name} type="text" onChange={handleTextChange} />
            </div>
            <br />
            <div>
            <label> Amount </label>
            <input id="amount" type="number" value={transaction.amount} onChange={handleTextChange} />
            </div>
            <br />
            <div>
            <label> Date </label>
            <input id="date" type="text" value={transaction.date} onChange={handleTextChange} />
            </div>
            <br />
            <div>
            <label> Origin </label>
            <input id="origin" type="text" value={transaction.origin} onChange={handleTextChange} />
            </div>
            <br />
            <div>
            <label> Category </label>
            <select id="category" value={transaction.category} onChange={handleTextChange}>
                <option value='miscellanous'> Miscellanous </option>
                <option value='food'> Food </option>
                <option value='transportation'> Transportation </option>
                <option value='subscriptions'> Subscriptions </option>
                <option value='clothing'> Clothing </option>
                <option value='selfcare'> Self Care </option>
            </select>
            </div>
            <br />
            <button type="submit"> + Add + </button>
        </form>
        </div>
        </>
    )
};