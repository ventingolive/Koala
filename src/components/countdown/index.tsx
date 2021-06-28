import React, { useContext, useRef, useEffect } from 'react';
import { StyledCountdown, StyledTimer, StyledSeperator, StyledSeperatorText, StyledNum, StyledNumText, StyledNumGrpWrap, StyledNumGrp, StyledClockDisplayGrp, StyledTimerClock } from './styles';
import { gsap } from 'gsap';
import { SettingContext } from '../../context/SettingsContext';

// Write your countdown code in this component
export const Countdown = () => {
  var timeNumbers;
  const emptyTimer = ['0', '0', '0', '0', '0', '0'];//used for cancel
  const defaultTimer = '00:00:00';

  //context values/functions
  const { stopCountDown } = useContext(SettingContext)
  const { initCancelTimer } = useContext(SettingContext)
  const { currentTimer } = useContext(SettingContext)
  const { setTimerTime } = useContext(SettingContext)

  //ref values for timeout looping
  const stopCountDownRef = useRef(stopCountDown)//stopCountDown is in a closure, therefore, when setTimeout is scheduled it uses the value of stopCountDown at that exact moment in time, which is the initial value of false.
  stopCountDownRef.current = stopCountDown
  const cancelTimerRef = useRef(initCancelTimer)
  cancelTimerRef.current = initCancelTimer
  const timerTimeRef = useRef(currentTimer)
  timerTimeRef.current = currentTimer

  useEffect(() => {
    if (currentTimer !== defaultTimer && !stopCountDownRef.current) {
      initTimer(currentTimer)
    }
  })

  function initTimer(t: string) {
    var hoursGroupEl = document.querySelector('.hours-group'),
      minutesGroupEl = document.querySelector('.minutes-group'),
      secondsGroupEl = document.querySelector('.seconds-group');
    if (hoursGroupEl) {
      var hoursGroup = {
        firstNum: hoursGroupEl.querySelector('.first'),
        secondNum: hoursGroupEl.querySelector('.second')
      }
    }
    if (minutesGroupEl) {
      var minutesGroup = {
        firstNum: minutesGroupEl.querySelector('.first'),
        secondNum: minutesGroupEl.querySelector('.second')
      }
    }

    if (secondsGroupEl) {
      var secondsGroup = {
        firstNum: secondsGroupEl.querySelector('.first'),
        secondNum: secondsGroupEl.querySelector('.second')
      }
    }

    var time = {
      hour: t.split(':')[0],
      min: t.split(':')[1],
      sec: t.split(':')[2]
    };

    let updateTimer = () => {
      if (!stopCountDownRef.current) {
        var timestr;
        var date = new Date();

        date.setHours(time.hour === '' ? 0 : parseInt(time.hour));
        date.setMinutes(time.min === '' ? 0 : parseInt(time.min));
        date.setSeconds(time.sec === '' ? 0 : parseInt(time.sec));

        var newDate = new Date(date.valueOf() - 1000);
        var temp = newDate.toTimeString().split(" ");
        var tempsplit = temp[0].split(':');

        time.hour = tempsplit[0];
        time.min = tempsplit[1];
        time.sec = tempsplit[2];

        timestr = time.hour + time.min + time.sec;
        if(timestr !== 'Invalidundefinedundefined')
          setTimerTime(time.hour + ':' + time.min + ':' + time.sec);

        timeNumbers = timestr.toString().split('');
        updateTimerDisplay(timeNumbers);

        if (timestr === '000000' || cancelTimerRef.current) {
          updateTimerDisplay(emptyTimer);
        }
        else {
          setTimeout(updateTimer, 1000);
        }
      }
    }

    let updateTimerDisplay = (arr: string[]) => {
      animateNum(hoursGroup.firstNum, arr[0]);
      animateNum(hoursGroup.secondNum, arr[1]);
      animateNum(minutesGroup.firstNum, arr[2]);
      animateNum(minutesGroup.secondNum, arr[3]);
      animateNum(secondsGroup.firstNum, arr[4]);
      animateNum(secondsGroup.secondNum, arr[5]);

    }

    let animateNum = (group: Element | null, arrayValue: string) => {
      var newGroup = group != null ? group.querySelector('.number-grp-wrp') : null;
      var newGroupNum = group != null && arrayValue != null ? group.querySelector('.num-' + arrayValue) : null;
      if (newGroup && newGroupNum) {
        gsap.killTweensOf(newGroup);
        if (newGroupNum instanceof HTMLElement) {
          gsap.to(newGroup, 1, {
            y: - newGroupNum.offsetTop
          });
        }
      }
    }
    setTimeout(updateTimer, 1000);
  }

  return (
    <StyledCountdown>
      <StyledTimer>
        <StyledTimerClock>
          <StyledClockDisplayGrp className="hours-group">
            <StyledNumGrp className="first">
              <StyledNumGrpWrap className='number-grp-wrp'>
                <StyledNum className="num num-0"><StyledNumText>0</StyledNumText></StyledNum>
                <StyledNum className="num num-1"><StyledNumText>1</StyledNumText></StyledNum>
                <StyledNum className="num num-2"><StyledNumText>2</StyledNumText></StyledNum>
                <StyledNum className="num num-3"><StyledNumText>3</StyledNumText></StyledNum>
                <StyledNum className="num num-4"><StyledNumText>4</StyledNumText></StyledNum>
                <StyledNum className="num num-5"><StyledNumText>5</StyledNumText></StyledNum>
                <StyledNum className="num num-6"><StyledNumText>6</StyledNumText></StyledNum>
                <StyledNum className="num num-7"><StyledNumText>7</StyledNumText></StyledNum>
                <StyledNum className="num num-8"><StyledNumText>8</StyledNumText></StyledNum>
                <StyledNum className="num num-9"><StyledNumText>9</StyledNumText></StyledNum>
              </StyledNumGrpWrap>
            </StyledNumGrp>
            <StyledNumGrp className="second ">
              <StyledNumGrpWrap className='number-grp-wrp'>
                <StyledNum className="num num-0"><StyledNumText>0</StyledNumText></StyledNum>
                <StyledNum className="num num-1"><StyledNumText>1</StyledNumText></StyledNum>
                <StyledNum className="num num-2"><StyledNumText>2</StyledNumText></StyledNum>
                <StyledNum className="num num-3"><StyledNumText>3</StyledNumText></StyledNum>
                <StyledNum className="num num-4"><StyledNumText>4</StyledNumText></StyledNum>
                <StyledNum className="num num-5"><StyledNumText>5</StyledNumText></StyledNum>
                <StyledNum className="num num-6"><StyledNumText>6</StyledNumText></StyledNum>
                <StyledNum className="num num-7"><StyledNumText>7</StyledNumText></StyledNum>
                <StyledNum className="num num-8"><StyledNumText>8</StyledNumText></StyledNum>
                <StyledNum className="num num-9"><StyledNumText>9</StyledNumText></StyledNum>
              </StyledNumGrpWrap>
            </StyledNumGrp>
          </StyledClockDisplayGrp>
          <StyledSeperator><StyledSeperatorText>:</StyledSeperatorText></StyledSeperator>
          <StyledClockDisplayGrp className="minutes-group">
            <StyledNumGrp className="first">
              <StyledNumGrpWrap className='number-grp-wrp'>
                <StyledNum className="num num-0"><StyledNumText>0</StyledNumText></StyledNum>
                <StyledNum className="num num-1"><StyledNumText>1</StyledNumText></StyledNum>
                <StyledNum className="num num-2"><StyledNumText>2</StyledNumText></StyledNum>
                <StyledNum className="num num-3"><StyledNumText>3</StyledNumText></StyledNum>
                <StyledNum className="num num-4"><StyledNumText>4</StyledNumText></StyledNum>
                <StyledNum className="num num-5"><StyledNumText>5</StyledNumText></StyledNum>
                <StyledNum className="num num-6"><StyledNumText>6</StyledNumText></StyledNum>
                <StyledNum className="num num-7"><StyledNumText>7</StyledNumText></StyledNum>
                <StyledNum className="num num-8"><StyledNumText>8</StyledNumText></StyledNum>
                <StyledNum className="num num-9"><StyledNumText>9</StyledNumText></StyledNum>
              </StyledNumGrpWrap>
            </StyledNumGrp>
            <StyledNumGrp className="second ">
              <StyledNumGrpWrap className='number-grp-wrp'>
                <StyledNum className="num num-0"><StyledNumText>0</StyledNumText></StyledNum>
                <StyledNum className="num num-1"><StyledNumText>1</StyledNumText></StyledNum>
                <StyledNum className="num num-2"><StyledNumText>2</StyledNumText></StyledNum>
                <StyledNum className="num num-3"><StyledNumText>3</StyledNumText></StyledNum>
                <StyledNum className="num num-4"><StyledNumText>4</StyledNumText></StyledNum>
                <StyledNum className="num num-5"><StyledNumText>5</StyledNumText></StyledNum>
                <StyledNum className="num num-6"><StyledNumText>6</StyledNumText></StyledNum>
                <StyledNum className="num num-7"><StyledNumText>7</StyledNumText></StyledNum>
                <StyledNum className="num num-8"><StyledNumText>8</StyledNumText></StyledNum>
                <StyledNum className="num num-9"><StyledNumText>9</StyledNumText></StyledNum>
              </StyledNumGrpWrap>
            </StyledNumGrp>
          </StyledClockDisplayGrp>
          <StyledSeperator><StyledSeperatorText>:</StyledSeperatorText></StyledSeperator>
          <StyledClockDisplayGrp className="seconds-group">
            <StyledNumGrp className="first">
              <StyledNumGrpWrap className='number-grp-wrp'>
                <StyledNum className="num num-0"><StyledNumText>0</StyledNumText></StyledNum>
                <StyledNum className="num num-1"><StyledNumText>1</StyledNumText></StyledNum>
                <StyledNum className="num num-2"><StyledNumText>2</StyledNumText></StyledNum>
                <StyledNum className="num num-3"><StyledNumText>3</StyledNumText></StyledNum>
                <StyledNum className="num num-4"><StyledNumText>4</StyledNumText></StyledNum>
                <StyledNum className="num num-5"><StyledNumText>5</StyledNumText></StyledNum>
                <StyledNum className="num num-6"><StyledNumText>6</StyledNumText></StyledNum>
                <StyledNum className="num num-7"><StyledNumText>7</StyledNumText></StyledNum>
                <StyledNum className="num num-8"><StyledNumText>8</StyledNumText></StyledNum>
                <StyledNum className="num num-9"><StyledNumText>9</StyledNumText></StyledNum>
              </StyledNumGrpWrap>
            </StyledNumGrp>
            <StyledNumGrp className="second">
              <StyledNumGrpWrap className='number-grp-wrp'>
                <StyledNum className="num num-0"><StyledNumText>0</StyledNumText></StyledNum>
                <StyledNum className="num num-1"><StyledNumText>1</StyledNumText></StyledNum>
                <StyledNum className="num num-2"><StyledNumText>2</StyledNumText></StyledNum>
                <StyledNum className="num num-3"><StyledNumText>3</StyledNumText></StyledNum>
                <StyledNum className="num num-4"><StyledNumText>4</StyledNumText></StyledNum>
                <StyledNum className="num num-5"><StyledNumText>5</StyledNumText></StyledNum>
                <StyledNum className="num num-6"><StyledNumText>6</StyledNumText></StyledNum>
                <StyledNum className="num num-7"><StyledNumText>7</StyledNumText></StyledNum>
                <StyledNum className="num num-8"><StyledNumText>8</StyledNumText></StyledNum>
                <StyledNum className="num num-9"><StyledNumText>9</StyledNumText></StyledNum>
              </StyledNumGrpWrap>
            </StyledNumGrp>
          </StyledClockDisplayGrp>
        </StyledTimerClock>
      </StyledTimer>
    </StyledCountdown>
  );
};

