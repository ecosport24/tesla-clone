import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        carImage="model-s.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Order Customer"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        carImage="model-3.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Order Customer"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        carImage="model-y.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Order Customer"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        carImage="model-x.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Order Customer"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar for New Roofs"
        carImage="solar-roof.jpg"
        description="Solar Roof Costs Less Than a Roof Plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        carImage="accessories.jpg"
        description=""
        leftBtnText="Shop now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
