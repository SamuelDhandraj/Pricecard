import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Group() {
  return (
    <CardGroup className="Container">
      <Card className="box">
        <Card.Body className="Container">
          <Card.Title className="price-col">
            <h6>Free</h6>
            <h4>$0/Month</h4>
          </Card.Title>
          <Card.Text className="price-row">
            <ul>
              <li>Single User</li>
              <li>50GB Storage</li>
              <li>Unlimited Public Projects</li>
              <li>Community Access</li>
              <li>Unlimited private Projects</li>
              <li>Dedicated Phone Support</li>
              <li>Free Subdomain</li>
              <li>Monthly status Reports</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="Container">
          <Button>Add To Cart</Button>
        </Card.Footer>
      </Card>
      <Card className="box">
        <Card.Body className="Container">
          <Card.Title className="price-col">
            <h6>Plus</h6>
            <h4>$49/Month</h4>
          </Card.Title>
          <Card.Text className="price-row">
            <ul>
              <li>Single User</li>
              <li>50GB Storage</li>
              <li>Unlimited Public Projects</li>
              <li>Community Access</li>
              <li>Unlimited private Projects</li>
              <li>Dedicated Phone Support</li>
              <li>Free Subdomain</li>
              <li>Monthly status Reports</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="Container">
          <Button>Add To Cart</Button>
        </Card.Footer>
      </Card>
      <Card className="box">
        <Card.Body className="Container">
          <Card.Title className="price-col">
            <h6>Pro</h6>
            <h4>$49/Month</h4>
          </Card.Title>
          <Card.Text className="price-row">
            <ul>
              <li>Single User</li>
              <li>50GB Storage</li>
              <li>Unlimited Public Projects</li>
              <li>Community Access</li>
              <li>Unlimited private Projects</li>
              <li>Dedicated Phone Support</li>
              <li>Free Subdomain</li>
              <li>Monthly status Reports</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="Container">
          <Button>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Group;
