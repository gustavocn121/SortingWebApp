import './styles/App.css';
import Header from './Header';
import SortingVisualizer from './SortingVisualizer';
import React from "react";

function App() {
  
  return (
    <div className="App">
      <Header/>
      <main>
        <SortingVisualizer></SortingVisualizer>
      </main>

    </div>
  );
}

export default App;