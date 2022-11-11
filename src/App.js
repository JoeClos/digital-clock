import './App.css';
import MyDate from './components/MyDate';
import Clock from './components/Clock';
import Welcome from './components/Welcome';

const username = "visitor"
function App() {
  return (
    <div className="App">
      <Welcome username={username} />
      <div className="watch">
        <div className="digital-watch">
          <MyDate />
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
