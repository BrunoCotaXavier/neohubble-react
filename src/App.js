import './App.css';
import AppRoutes from './routes';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
