import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPhoto from './componenets/AddPhoto';
import SearchPhoto from './componenets/SearchPhoto';
import DeletePhoto from './componenets/DeletePhoto';
import ViewAllPhotos from './componenets/ViewAllPhotos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <AddPhoto/> } />
      <Route path="/search" element={ <SearchPhoto/> } />
      <Route path="/delete" element={ <DeletePhoto/> } />
      <Route path="/viewall" element={ <ViewAllPhotos/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
