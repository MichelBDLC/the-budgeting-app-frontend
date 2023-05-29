import { Link } from "react-router-dom";
import '../css/Transaction.css';

export default function Transaction(props) {

    return (
        <>
        {
            props.transactions.map((transaction) => {

                return (
                    <div key={transaction.id} className="transaction" >
                    <br />
                    <Link to={`transactions/${transaction.id}`} className="transaction"> {transaction.date} | {transaction.name} | ${transaction.amount} </Link>
                    <br />
                    </div>
                )
            })
        }
        </>
    )
};