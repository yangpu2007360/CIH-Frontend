import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ duration, results, category_count, time }) => {
    const targetTime = new Date().getTime() + duration * 60 * 1000;
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const [isRunning, setIsRunning] = useState(true);
    const [isTimeUp, setIsTimeUp] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                const remaining = calculateTimeRemaining();
                setTimeRemaining(remaining);

                if (remaining.minutes === 0 && remaining.seconds === 0) {
                    setIsTimeUp(true);
                    clearInterval(interval);
                }
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    const calculatePercentage = (value, total) => {
        return ((value / total) * 100).toFixed(2); // Adjust the decimal places as needed
    };

    const categories = Object.keys(category_count);

    function calculateTotalCorrectAnswers(results) {
        let totalCorrectAnswers = 0;
        Object.values(results).forEach((value) => {
            totalCorrectAnswers += value;
        });
        return totalCorrectAnswers;
    }

    function calculateTotalPercentage(results, category_count) {
        const totalCorrectAnswers = calculateTotalCorrectAnswers(results);
        const totalQuestions = time * 0.6;
        return ((totalCorrectAnswers / totalQuestions) * 100).toFixed(2);
    }

    function calculateTimeRemaining() {
        const currentTime = new Date().getTime();
        const difference = targetTime - currentTime;

        if (difference <= 0) {
            // Countdown is finished
            return {
                minutes: 0,
                seconds: 0
            };
        }

        // Calculate remaining minutes and seconds
        const minutes = Math.floor(difference / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            minutes,
            seconds
        };
    }

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    return (
        <div>
            <div>
                {isTimeUp ? (
                    <h4>
                        <div>Time is Up! Here is your results:</div>
                        <div>
                            <div className='complete-result'>
                                Total Number of Correct Answers: {calculateTotalCorrectAnswers(results)}
                                <br />
                                Percentage: {calculateTotalPercentage(results, category_count)}%
                            </div>
                            <div>{calculateTotalPercentage(results, category_count) > 70 ? <div>Pass! You beat 70%.</div> : <div>Fail! You need to achieve at least 70%.</div>}</div>
                            <div className='result-table'>
                                <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
                                    <thead>
                                        <tr>
                                            <th style={{ border: "1px solid black", padding: "5px" }}>Category</th>
                                            <th style={{ border: "1px solid black", padding: "5px" }}>Number of Correct Answers/Total number</th>
                                            <th style={{ border: "1px solid black", padding: "5px" }}>Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.map((category) => (
                                            <tr key={category}>
                                                <td style={{ border: "1px solid black", padding: "5px" }}>{category}</td>
                                                <td style={{ border: "1px solid black", padding: "5px", 'text-align': 'center' }}>{results[category]} / {category_count[category]}</td>
                                                <td style={{ border: "1px solid black", padding: "5px" }}>
                                                    {calculatePercentage(results[category], category_count[category])}%
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </h4>
                ) : (
                    <>

                        <div className='timer-display'>
                            <div>Remaining Time:</div>
                            <div>{timeRemaining.minutes} minutes</div>
                            <div>{timeRemaining.seconds} seconds</div>
                            {isRunning ? (
                                <div className="stop-button" onClick={handleStop}>Stop</div>
                            ) : (
                                <div className="stop-button" onClick={handleResume}>Resume</div>
                            )}
                        </div>

                    </>
                )}
            </div>

            {isTimeUp && <style>{'.question-card { display: none; }'}</style>}
            {isTimeUp && <style>{'.stop-button { display: none; }'}</style>}
        </div>
    );
};

export default CountdownTimer;
