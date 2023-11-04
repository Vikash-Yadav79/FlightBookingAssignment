import './App.css';
import Navbar from '../src/components/Navbar'
import FlightBody from './components/FlightBody';
import BestPlacesSearch from './BestPlaceSearch';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import FlightSearchBox from './FlightSearchBox';


function App() {
  return (
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Navbar/>
     <FlightBody/>
     <FlightSearchBox/>
     <BestPlacesSearch/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;



