import React, { Fragment } from "react";
import { Container, Segment, Statistic, Button } from "semantic-ui-react";
// import { useSelector } from "react-redux";
import NavBar from "../modules/NavBar";

function HomePage() {
  // const state = useSelector(state => state);

  return (
    <Fragment>
      <NavBar />
      <Container text textAlign="center" style={{ margin: "1rem auto" }}>
        <Segment>
          <Statistic label="Amount" value="5,500.00" />
        </Segment>
        <Button primary>Send Money</Button>
      </Container>
    </Fragment>
  );
}

export default HomePage;
