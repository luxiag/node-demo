import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Chat } from "pages/Chat";
import { NotFound } from "pages/NotFound";
import { List } from "pages/List";
import { Person } from "pages/Person";
import { News } from "pages/News";
import { Detail } from "pages/Detail";

export const Authenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/person" element={<Person />} />
        <Route path="/list" element={<List />} />
        <Route path="/news" element={<News />} />
      </Route>
      <Route path="detail/:detailId" element={<Detail />} />
      <Route path="chat/:chatId" element={<Chat />} />
      {/* <Navigate to="/list" replace={true} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
