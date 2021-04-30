import './App.css';
import LearnHook from './Features/LearnHook';
import TodoList from './Features/TodoList';
import WeatherApp from './Features/WeatherApp';

function App() {
  return (
    <div className="wrapper">
      {/* <WeatherApp /> */}
      <TodoList />
      {/* <LearnHook /> */}
    </div>
  );
}

export default App;
