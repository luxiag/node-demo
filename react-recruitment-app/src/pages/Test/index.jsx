import { useState } from "react";
import { Map } from "components/Map";
export const Test = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {isShow}
      <button onClick={() => setIsShow(true)}>button</button>
      {isShow ? <Map /> : ""}
    </>
  );
};
