import styled from "styled-components";
import background from "../assets/background.jpg";

export const AppWrapper = styled.div`
  background-image: url(${background});

  .App {
    text-align: center;
  }

  .text {
    font-size: 1.5rem;
    font-weight: 500;
    color: midnightblue;
  }
  .text-info {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .tiles {
    border-bottom: 2px solid brown;
    padding: 16px;
  }
  .flag {
    max-width: 50px;
    margin-left: 20px;
  }
  .header {
    background-color: #f4e04d;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #10375c;
    position: sticky;
    top: 0;
  }
`;
