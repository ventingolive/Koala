import styled from 'styled-components';

export const StyledButton = styled.div`
  background: ${props => props.theme.buttons.primary_button_text_color};
  border: 2px solid;
  border-color: ${props => props.theme.buttons.primary_button_background_color};
  border-radius: 8px;
  font-family: "Arial","Helvetica";
  color: ${props => props.theme.buttons.primary_button_background_color};
  padding: 10px 15px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-weight: 600;

  :hover {
    cursor: pointer;
  }
`;