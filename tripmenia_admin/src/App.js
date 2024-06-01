
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
        <Route element={<Login />} path="admin/view/" />
        <Route element={<Dashboard />} path="admin/view/dashboard" />
        <Route element={<AddCategory />} path="admin/view/category-add" />
        <Route element={<ViewCategory />} path="admin/view/category-view" />
        <Route element={<AddPackage />} path="admin/view/package-add" />
        <Route Component={MyHTMLEditor} path="admin/view/des" />
        <Route element={<ViewPackage />} path="admin/view/package-view" />
        <Route path="admin/view/viewpackagedetails">
          <Route path=":id" Component={ViewPackageDetails} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
