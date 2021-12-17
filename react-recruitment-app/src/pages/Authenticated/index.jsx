import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Chat } from "pages/Chat";
import { NotFound } from "pages/NotFound";
import { List } from "pages/List";
import { Person } from "pages/Person";
import { News } from "pages/News";
export const Authenticated = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route path="/person" element={<Person />} />
              <Route path="/list" element={<List />} />
              <Route path="/news" element={<News />} />
      </Route>
      <Route path="chat/:chatId" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
