import Alert from "react-bootstrap/Alert";

const Myalert = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, Welcome to my new EPIBOOKS</Alert.Heading>
      <p>Dove potrai comprare tutti i libri che vuoi</p>
      <hr />
      <p className="mb-0">IN MODO EPICO!</p>
    </Alert>
  );
};

export default Myalert;
