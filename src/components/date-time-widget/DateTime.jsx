import { useEffect, useState } from 'react';

const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();

    return (
        <div className="date-time-widget flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
            <div>Date: {formattedDate}</div>
            <div>Time: {formattedTime}</div>
        </div>
    );
};

export default DateTime;