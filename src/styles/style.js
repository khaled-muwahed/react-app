import styled from "styled-components";
import background from '../assets/background.jpg';

export const AppWrapper = styled.div`
background-image: url(${background}); 

.text {
font-size: 1.5rem;
font-weight: 500;
color: midnightblue;
}
.text-info {
    font-size: 1.5rem;
    font-weight: 500;
    }
.tiles{
    border-bottom: 2px solid brown;
    padding: 16px;
}
.flag {
    max-width: 50px;
    margin-left: 20px;
}
    

`;