import Blog from "../screens/blog/blog";
import Dashboards from "../screens/dashboards/dashboards";
import Home from "../screens/home/home";
import { Route, Routes } from "react-router-dom";
import NotFound from "../screens/notFound/notFound";
import Register from '../screens/register/register';
import Login from '../screens/login/login';
import Painel from "../screens/painel/painel";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;