import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";

const DepositPage = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showNaNAlert, setShowNaNAlert] = useState(false);
  const [showNegativeAlert, setShowNegativeAlert] = useState(false);

  const handleDeposit = (e) => {
    e.preventDefault();
    if (isNaN(depositAmount)) {
      setShowNaNAlert(true);
      return;
    }
    if (depositAmount < 0) {
      setShowNegativeAlert(true);
      return;
    }
    setBalance((prevBalance) => prevBalance + parseFloat(depositAmount));
    setDepositAmount("");
    setShowSuccess(true);
  };

  const handleDepositAmountChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleAlertClose = () => {
    setShowNaNAlert(false);
    setShowNegativeAlert(false);
    setShowSuccess(false);
  };

  return (
    <Card>
      <Card.Header>Deposit Page</Card.Header>
      <Card.Body>
        {showSuccess && (
          <Alert variant="success" onClose={handleAlertClose} dismissible>
            Deposit received successfully!
          </Alert>
        )}
        {showNaNAlert && (
          <Alert variant="danger" onClose={handleAlertClose} dismissible>
            Please enter a valid number.
          </Alert>
        )}
        {showNegativeAlert && (
          <Alert variant="danger" onClose={handleAlertClose} dismissible>
            Please enter a positive number.
          </Alert>
        )}
        <Card.Title>Balance: {balance}</Card.Title>
        <Form onSubmit={handleDeposit}>
          <Form.Group controlId="formDepositAmount">
            <Form.Label>Deposit Amount</Form.Label>
            <Form.Control
              type="text"
              value={depositAmount}
              onChange={handleDepositAmountChange}
              placeholder="Enter deposit amount"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!depositAmount}>
            Deposit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DepositPage;
