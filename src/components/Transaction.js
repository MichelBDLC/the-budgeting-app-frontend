import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Transaction(props) {

    const navigate = useNavigate();

    function handleDelete(transactionId) {
        axios
        .delete(`${API}/transactions/${transactionId}`)
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <>
        {
            //onClick={navigate(`/transactions/${transaction.id}`)}
            props.transactions.map((transaction) => {

                return (
                    <div key={transaction.id} >
                    <br />
                    <Link to={`transactions/${transaction.id}`} className="transaction"> {transaction.date} | {transaction.name} | {transaction.amount} </Link>
                    <br />
                    <button onClick={() => handleDelete(transaction.id)}> Delete </button>
                    <br />
                    </div>
                )
            })
        }
        </>
    )
};