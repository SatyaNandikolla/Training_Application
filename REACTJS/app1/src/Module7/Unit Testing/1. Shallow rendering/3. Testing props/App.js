import './App.css';
import Todo_Function from './components/Todo_Function';
import Todo_Class from './components/Todo_Class';

function App() {
  var id = 1, title = "Learn JSF", description = "Finish this article", priority = 5;

  return (
    <div className="App">
      <Todo_Function id={id} title={title} description={description} priority={priority} />
      <Todo_Class id={id} title={title} description={description} priority={priority} />
    </div>
  );
}

export default App;
