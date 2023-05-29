// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import '../css/TransactionId.css';

// const API = process.env.REACT_APP_API_URL;

// export default function TransactionId() {

//     const navigate = useNavigate();

//     const { id } = useParams();

//     const [transaction, setTransaction] = useState({});

//     useEffect(() => {
//         axios
//         .get(`${API}/transactions/${id}`)
//         .then(response => {
//             setTransaction(response.data)
//         })
//         .catch((e) => {
//             console.error(e);
//         });
//     }, [id]);

//     return (
//         <>
//         <br />
//         <button onClick={() => navigate('/')}> Go Back </button>
//         <br />
//         <h2> {transaction.name} </h2>
//         <p> {transaction.amount} </p>
//         <p> {transaction.date} </p>
//         <p> {transaction.category} </p>
//         <p> {transaction.origin} </p>
//         </>
//     )

//     //if clicked on pull all other transactions that are within that date, category, origin, amount, or name
// }