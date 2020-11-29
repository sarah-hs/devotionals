//import './App.css';
//import axios from 'axios';
//import { useEffect, useState } from 'react';
//
//function App() {
//    const [devotional, setDevotional] = useState(undefined);
//    const [isLoaded, setIsLoaded] = useState(false);
//    const [error, setError] = useState(undefined);
//
//    useEffect(() => {
//        axios.get('https://devotionals-api.herokuapp.com/api/v1/devotionals/today')
//        .then(({data}) => setDevotional(data[0]))
//        .catch((err) => setError(err))
//        .finally(() => setIsLoaded(true));
//    }, []);
//
//    if(error)
//        return (
//            <div className="App">
//                <h1>An error ocurred</h1>
//                <p>Error: {error.message}</p>
//            </div>
//        );
//    else if(!isLoaded)
//        return (
//            <div className="App">
//                <h1 className="loading">Loading...</h1>
//            </div>
//        );
//    else
//        return (
//            <div className="App">
//                <Devotional data={devotional} />
//            </div>
//        );
//}
//
//function Devotional({data}) {
//    return (
//        <div className="devotional">
//            <h1 className="title">{data.title}</h1>
//            <p className="date">{data.date}</p>
//            <p className="vers">{data.vers}</p>
//            <div className="content">
//                {data.content.map((p, i) => <p key={i}>{p}</p>)}
//            </div>
//        </div>
//    )
//}


import React from 'react';
import Tabs from "./components/Tabs";
import './App.css';
//
//function App() {
//  return (
//      <div>
//        <h1>Tabs Demo</h1>
//          <Tabs>
//             <div label="Gator">
//               See ya later, <em>Alligator</em>!
//             </div>
//             <div label="Croc">
//               After 'while, <em>Crocodile</em>!
//             </div>
//             <div label="Sarcosuchus">
//               Nothing to see here, this tab is <em>extinct</em>!
//             </div>
//           </Tabs>
//      </div>
//  );
//}




var SegmentedControl = require('react-segmented-control');

var App = React.createClass({

  getInitialState() {
    return {
      color: 'red'
    };
  },
  render() {
    return (
      <div>
        <SegmentedControl
          onChange={this.colorUpdated}
          value={this.state.color}
          name="color">
          <span value="red">Red</span>
          <span value="blue">Blue</span>
        </SegmentedControl>
        <div className='background' style={{background: this.state.color}} />
      </div>
    );
  },
  
  colorUpdated(value) {
    this.setState({color: value});
  }
});

export default App;
