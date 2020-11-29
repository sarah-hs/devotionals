import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [devotional, setDevotional] = useState(undefined);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(undefined);
    
    useEffect(() => {
        axios.get('https://devotionals-api.herokuapp.com/api/v1/devotionals/today')
        .then(({data}) => setDevotional(data[0]))
        .catch((err) => setError(err))
        .finally(() => setIsLoaded(true));
    }, []);
        

    if(error)
        return (
            <div className="App">
                <h1>An error ocurred</h1>
                <p>Error: {error.message}</p>
            </div>
        );
    else if(!isLoaded)
        return (
            <div className="App">
                <h1 className="loading">Loading...</h1>
            </div>
        );
    else
        return (
            <div className="App">
                <Menu />
                <Devotional data={devotional} />
            </div>
        );
}

function Devotional({data}) {
    return (
        <div className="devotional">
            <h1 className="title">{data.title}</h1>
            <p className="date">{data.date}</p>
            <p className="vers">{data.vers}</p>
            <div className="content">
                {data.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
        </div>
    )
}

            

function Menu() {
    const option1 = () => {
        document.getElementsByClassName("devotional")[0].style.background = "white";
        document.getElementsByClassName("devotional")[0].style.color = "black";
    }
        
    const option2 = () => {
        document.getElementsByClassName("devotional")[0].style.background = 'black';
        document.getElementsByClassName("devotional")[0].style.color = "white";
    }
        
    return (
        <div id="container">
            <ul class="segmented-control">
                <li class="segmented-control__item">
            <input class="segmented-control__input" type="radio" value="1" name="option" id="option-1" onClick={option1} checked></input>
                    <label class="segmented-control__label" for="option-1">Light</label>
                </li>
                <li class="segmented-control__item">
            <input class="segmented-control__input" type="radio" value="2" name="option" id="option-2" onClick={option2}></input>
                    <label class="segmented-control__label" for="option-2">Dark</label>
                </li>
            </ul>
        </div>
    )
}

export default App;
