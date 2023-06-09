import '../css/Nav.css';
import { useNavigate } from 'react-router-dom';

export default function Nav(props) {

    const navigate = useNavigate();

    return (
        <>
        <span>
        <h2> A Budgeting Site </h2>
        <p> Track & categorize your transactions. </p>
        <p style={{ color: props.color }}> Current Total Amount: {props.total} </p>
        </span>
        <br />
        <button onClick={() => navigate('/transactions/new')} className='newbtn'> + New Transaction + </button>
        <br />
        </>
    )
}