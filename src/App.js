import './App.css';
import './components/Styles.css';
import ThemeProvider from './context/ThemeContext.jsx';

import Home from './Pages/Home/Home.jsx';

function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
