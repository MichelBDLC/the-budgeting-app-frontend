import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/TransactionId.css";

const API = process.env.REACT_APP_API_URL;

export default function TransactionId() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = () => {
    navigate(`/transactions/${id}/edit`);
  };

  return (
    <>
      <br />
      <button onClick={() => navigate("/")} className="gobackbtn">
        Go Back
      </button>
      <br />
      {transaction && (
        <>
          <br />
          <h2> {transaction.name} </h2>
          <p> Amount: {transaction.amount}</p>
          <p> Date: {transaction.date} </p>
          <p> Category: {transaction.category} </p>
          <p> Origin: {transaction.origin} </p>
        </>
      )}
      <br />
      <button onClick={handleDelete}> Delete </button>
      <button onClick={handleEdit}> Edit </button>
    </>
  );
}
