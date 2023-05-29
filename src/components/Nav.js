import '../css/Nav.css';
import { useNavigate } from 'react-router-dom';

export default function Nav() {

    const navigate = useNavigate();

    return (
        <>
        <span>
        <h2> A Budgeting Site </h2>
        <p> Track & categorize your transactions. </p>
        </span>
        <br />
        <button onClick={() => navigate('/transactions/new')} className='newbtn'> + New Transaction + </button>
        <br />
        </>
    )
}