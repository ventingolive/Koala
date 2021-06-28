import styled from 'styled-components';

export const StyledCountdown = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.global.body_color};
`;
export const StyledButton = styled.div`
  background: ${props => props.theme.buttons.primary_button_background_color};
  border: 2px solid;
  border-color: ${props => props.theme.buttons.primary_button_border_color};
  border-radius: ${props => props.theme.buttons.primary_button_border_radius}px;
  font-family: ${props => props.theme.buttons.primary_button_font_family};
  color: ${props => props.theme.buttons.primary_button_text_color};
  padding: 10px 15px;
  width: fit-content;

  :hover {
    cursor: pointer;
  }
`;
export const StyledTimer = styled.div`
  width: 710px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.text.primary_text_color};
  opacity: 0.5;

  @media (max-width: 720px) {
    width: 610px;
  }
  @media (max-width: 620px) {
    width: 510px;
  }
  @media (max-width: 520px) {
    width: 410px;
  }
  @media (max-width: 420px) {
    width: 310px;
  }
`;
export const StyledSeperator = styled.div`
  width: auto;
  float: left;
  display: block;
  height: 156px;
`;
export const StyledSeperatorText = styled.div`
  width: auto;
  margin-top: -30%;
  line-height: 150px;
  font-weight: bold;
`;
export const StyledNum = styled.div`
  width: 100%;
  position: relative;
  height: 156px;
`;
export const StyledNumText = styled.div`
  width: auto;
  display: table;
  line-height: 150px;
  font-weight: bold;
`;
export const StyledNumGrpWrap = styled.div`
  width: 100%;
  position: relative;
`;
export const StyledNumGrp = styled.div`
  width: auto;
  display: block;
  height: 156px;
  float: left;
  overflow: hidden;
`;
export const StyledClockDisplayGrp = styled.div`
  width: 100%;
  position: relative;
`;
export const StyledTimerClock = styled.div`
  display: flex;
  overflow: hidden;
  font-size: 12em;

  @media (max-width: 760px) {
    font-size: 10em;
  }
  @media (max-width: 640px) {
    font-size: 8em;
  }
  @media (max-width: 530px) {
    font-size: 6em;
  }
  @media (max-width: 430px) {
    font-size: 4em;
  }
`;