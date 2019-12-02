import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList'
import Search from '../components/Search'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

function App() {
  const [ robotsData, setRobotsData] = useState([])
  const [ searchField, setSearchField ] = useState('')
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( robots => setRobotsData(robots))
  },[robotsData])
  const onSearchChange = e => {
     e.preventDefault();
    setSearchField(e.target.value)
  }
  const filterRobots = robotsData.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  return (
    <div className="tc">
      <h1>Robots App</h1>
      <Search searchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots}/>
        </ErrorBoundry>
      </Scroll>

    </div>
  );
}

export default App;
