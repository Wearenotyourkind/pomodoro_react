import React, {useRef, useState} from 'react';
import './Timer.css';

function padTime(time) {
    return time.toString().padStart(2,'0');
}



function Timer() {
    const [timeLeft, setTimeLeft] = useState(25*60);
    const minutes = padTime(Math.floor(timeLeft/60));
    const seconds =padTime(timeLeft-minutes*60);
    let intervalRef =useRef(null);


    function startTimer(){
        if (intervalRef.current !=null) return;
        intervalRef.current = setInterval(()=>{
            setTimeLeft(timeLeft => {
                if (timeLeft>=1) return timeLeft-1;

                return 0;
            });

        },1000);
    }
    function stopTimer() {
        clearInterval(intervalRef.current);
    }
    function resetTimer() {
        clearInterval(intervalRef.current);
        setTimeLeft(25*60);
    }
    


    return(
        <div className='timer'>
            <h1 className='timer_title'>Timer</h1>
            <span className='timer__minutes'>{minutes}</span>
            <span>:</span>
            <span className='timer__seconds'>{seconds}</span>

            <div className='timer__buttons'>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default Timer;