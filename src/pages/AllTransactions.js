//import '../css/css.css';
import { useNavigate } from "react-router-dom";

export default function AllTransactions(props) {

    const navigate = useNavigate();

    

    return (
        <>
        {
            props.transactions.map((transaction) => {

                return (
                    <div key={transaction.id} className="itransaction">
                        <br />
                        <p> {transaction.date} | {transaction.name} | ${transaction.amount} </p> 
                        <br />
                    </div>
                )
            })
        }
        </>
    )
};