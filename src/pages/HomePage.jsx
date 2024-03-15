import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return <PageContainer></PageContainer>;
};

export default HomePage;

const PageContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 25% 65%;
  grid-template-rows: 400px;
  align-items: center;
`;
