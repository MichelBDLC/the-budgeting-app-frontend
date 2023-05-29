import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//pages
import Index from './pages/Index';
import TransactionId from './pages/TransactionId';
import NewTransaction from './pages/NewTransaction';
import EditTransaction from './pages/EditTransaction';
import NotFound from './pages/NotFound';

//components
import Nav from './components/Nav';

function App() {

  const [total, setTotal] = useState(0);

  const [color, setColor] = useState('black');

  return (
    <div className="App">
      <header>
        <Nav total={total} color={color} />
        <br />
      </header>
      <br />
      <main>
        <br />
        <Routes>
          <Route path='/' element={<Index color={color} setColor={setColor} total={total} setTotal={setTotal} />} />
          {/* <Route path='/transactions' element={<AllTransactions />} /> */}
          <Route path='/transactions/new' element={<NewTransaction />} />
          <Route path='/transactions/:id' element={<TransactionId />} />
          <Route path='/transactions/:id/edit' element={<EditTransaction />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;