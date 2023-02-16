import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/About.async";
import { MainPageAsync } from "./pages/MainPage/Main.async";
import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./halpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("App", {}, [theme])}>
      <button onClick={toggleTheme}>изменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">Обо мне</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
