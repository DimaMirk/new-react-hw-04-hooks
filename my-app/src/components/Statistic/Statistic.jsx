import { useEffect, useState } from 'react'

export default function Statistic(){

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const updateState = (name) => {  
        switch (name) {
            case "good":
                setGood(prev => prev + 1);
                break;
            case "neutral":
                setNeutral(prev => prev + 1);
                break
            case "bad":
                setBad(prev => prev + 1);
                break
        }
    }

    useEffect(() => {
        setTotal(good + neutral + bad)
    }, [good, neutral, bad])
    
    useEffect(() => {
        setPercentage(good/total*100 || 0)
    },[total])


    return (
            <>
                <h1>Please leave feedback</h1>
                <ul>
                <li><button name='good' onClick={() => { updateState('good')}}>Good</button></li>
                    <li><button name='neutral'onClick={() => { updateState('neutral')}}>Neutral</button></li>
                    <li><button name='bad' onClick={() => { updateState('bad')}}>Bad</button></li>
                </ul>
                <h1>Statistics</h1>
                <ul>
                    <li>Good :{ good }</li>
                    <li>Neutral :{ neutral }</li>
                    <li>Bad :{ bad}</li>
                    <li>Total :{ total }</li>
                    <li>Positive :{percentage }</li>
                </ul>
            </>
        )
}