import React from 'react';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;
