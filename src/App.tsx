import { Provider } from "react-redux";
import './App.css';
import Weather from "./containers/Weather";
import { store } from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
    
  );
}

export default App;
