import styled from 'styled-components';
export const StyledCloseButton = styled.div`
  background: ${props => props.theme.buttons.primary_button_border_color};
  border: 2px solid;
  border-color: ${props => props.theme.buttons.primary_button_border_color};
  border-radius: ${props => props.theme.buttons.primary_button_border_radius}px;
  font-family: ${props => props.theme.buttons.primary_button_font_family};
  color: ${props => props.theme.buttons.primary_button_text_color};
  padding: 10px 15px;
  width: fit-content;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background: ${props => props.theme.buttons.primary_button_text_color};
    color: ${props => props.theme.buttons.primary_button_border_color};
  }
`;
export const StyledButton = styled.div`
  background: ${props => props.theme.buttons.primary_button_text_color};
  border: 2px solid;
  border-color: ${props => props.theme.buttons.primary_button_border_color};
  border-radius: ${props => props.theme.buttons.primary_button_border_radius}px;
  font-family: ${props => props.theme.buttons.primary_button_font_family};
  color: ${props => props.theme.buttons.primary_button_border_color};
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 5px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background: ${props => props.theme.buttons.primary_button_border_color};
    color: ${props => props.theme.buttons.primary_button_text_color};
  }
`;
export const StyledMenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  border-left: 1px solid ${props => props.theme.buttons.primary_button_border_color};
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 300px;
  z-index: 1;
`;
export const StyledInputAlign = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`; 
export const StyledInputLabelAlign = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;
`; 
export const StyledInput = styled.input`
  width: 50px;
  border-radius: 5px;
  font-size: 2em;
`; 
export const StyledButtonAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 300px;
  align-items: center;
`;
