import './App.css';

import FirstPage from './Components/FirstPage/FirstPage';
import SecondPage from './Components/SecondPage/SecondPage';
import{Routes,Route} from 'react-router-dom'
import ThirPage from './Components/ThirdPage/ThirPage';
import FourthPage from './Components/FourthPage/FourthPage';
import FifthPage from './Components/FifthPage/FifthPage';



function App() {
  return (
    <div className="App">
      <Routes>
    <Route path="/" element={<FirstPage />} />
    <Route path="/paths" element={<SecondPage />} />
    <Route path="/courses" element={<ThirPage />} />
    <Route path="/eventschedule" element={<FourthPage />} />
    <Route path="/aboutus" element={<FifthPage />} />

    </Routes>

    </div>
  );
}

export default App;
