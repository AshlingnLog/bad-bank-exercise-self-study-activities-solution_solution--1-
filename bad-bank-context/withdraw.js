function Withdraw(){
  return (
    <h1>Withdraw</h1>
  )
}
import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";

function Withdraw() {
  const [balance, setBalance] = useState(1000); // initial balance of 1000
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (!withdrawAmount || isNaN(withdrawAmount)) {
      setShowAlert(true);
      setAlertVariant("danger");
      setAlertMessage("Please enter a valid number.");
      return;
    }
    if (withdrawAmount <= 0) {
      setShowAlert(true);
      setAlertVariant("danger");
      setAlertMessage("Please enter a positive number.");
      return;
    }
    if (withdrawAmount > balance) {
      setShowAlert(true);
      setAlertVariant("danger");
      setAlertMessage("Insufficient balance.");
      return;
    }
    setBalance((prevBalance) => prevBalance - parseFloat(withdrawAmount));
    setWithdrawAmount("");
    setShowAlert(true);
    setAlertVariant("success");
    setAlertMessage(`Withdrawal of $${withdrawAmount} successful.`);
  };

  const handleWithdrawAmountChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  return (
    <Card>
      <Card.Header>Withdraw</Card.Header>
      <Card.Body>
        {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
        <Card.Text>Balance: ${balance}</Card.Text>
        <Form onSubmit={handleWithdraw}>
          <Form.Group controlId="withdrawAmount">
            <Form.Label>Withdraw Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={handleWithdrawAmountChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!withdrawAmount}>
            Withdraw
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Withdraw;
