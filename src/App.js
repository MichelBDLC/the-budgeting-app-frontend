import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//pages
import Index from './pages/Index';
import AllTransactions from './pages/AllTransactions';
import NewTransaction from './components/NewTransaction';
import EditTransaction from './pages/EditTransaction';
import NotFound from './pages/NotFound';

//components
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <br />
      </header>
      <br />
      <main>
        <br />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/transactions' element={<AllTransactions />} />
          <Route path='/transactions/new' element={<NewTransaction />} />
          <Route path='/transactions/:id/new' element={<EditTransaction />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
