import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actFetchAllMenusAsync } from "./store/menu/actions";
import { actFetchAllCategoriesAsync } from "./store/category/actions";
import { actFetchMeAsync } from "./store/user/actions";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchMeAsync())
    dispatch(actFetchAllMenusAsync());
    dispatch(actFetchAllCategoriesAsync())
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/post/:slug">
            <PostDetailPage />
          </Route>
          <Route path="/category/:slug">
            <CategoryPage/>
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
