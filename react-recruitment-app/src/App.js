import React from "react";

import { useAuth } from "context/auth-context";

import { ErrorBoundary } from "react-error-boundary";
import { FullPageErrorFallback } from "components/lib";

import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Chat } from "pages/Chat";
import { NotFound } from "pages/NotFound";
import { List } from "pages/List";
import { Person } from "pages/Person";
import { News } from "pages/News";
import { Detail } from "pages/Detail";
import { Map } from "components/Map";
import { Test } from "pages/Test";

import { Unauthenticated } from "pages/unauthenticated";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/person" element={<Person />} />
            <Route path="/list" element={<List />} />
            <Route path="/news" element={<News />} />
          </Route>

          <Route path="unauth" element={<Unauthenticated />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="detail/:detailId" element={<Detail />} />
          <Route path="chat/:chatId" element={<Chat />} />
          <Route path="selectLocation" element={<Map />} />

          <Route path="test" element={<Test />} />
          {/* <Navigate to="/list" replace={true} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
