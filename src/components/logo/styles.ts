import styled from 'styled-components';

export const StyledLogo = styled.div`
    width: 225px;
    height: 50px;
    background-repeat: no-repeat;
    background-image: url(koala-logo.png);
    background-size: cover;
    background-position: center center;

    @media (max-width: 440px) {
        width: 75px;
        background-position: inherit;
      }
`;
