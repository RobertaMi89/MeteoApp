import Card from "react-bootstrap/Card";
export const CustomCard = ({ meteoProp, bgImg }) => {
  const backgroundImageStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "30px",
    marginTop: "20px",
    marginBottom: "20px",
    maxHeight: "180px",
    border: 0,
  };

  return (
    <div style={{ width: "500px", height: "auto" }}>
      <Card style={bgImg ? backgroundImageStyle : {}}>
        <Card.Body className="cardBody">
          <Card.Title>
            <b>{meteoProp.name}</b>
          </Card.Title>
          <Card.Text className="cardText">
            <img src={meteoProp.icon}></img>
            <b>{meteoProp.value}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CustomCard;
