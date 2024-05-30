
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCategory from './pages/AddCategory';
import ViewCategory from './pages/ViewCategory';
import AddPackage from './pages/AddPackage';
import MyHTMLEditor from './components/MyHTMLEditor';
import ViewPackage from './pages/ViewPackage';
import ViewPackageDetails from './pages/ViewPackageDetails';

function App() {
  return (
    <>
  <Routes>

    <Route element ={<Login/>} path='/'/>
    <Route element={<Dashboard/>} path='/dashboard'/>
    <Route element={<AddCategory/>} path='/category-add'/>
    <Route element={<ViewCategory/>} path='/category-view'/>
    <Route element={<AddPackage/>} path='/package-add'/>
    <Route Component={MyHTMLEditor} path='/des'/>
    <Route element ={<ViewPackage/>} path='/package-view'/>
    <Route path='/viewpackagedetails'>
        <Route path=':id' Component={ViewPackageDetails} />
        </Route>
    
    
  </Routes>
  </>
  );
}

export default App;
