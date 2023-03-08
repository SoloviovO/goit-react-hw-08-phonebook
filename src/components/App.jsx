import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { LogIn } from 'pages/LogIn';
import { Registration } from 'pages/Registration';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
