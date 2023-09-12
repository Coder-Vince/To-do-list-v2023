import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Headers = () => {
  return (
    <>
      <header>
        <FontAwesomeIcon icon={faList} size="xl" />
        <p>Todo List</p>
      </header>
    </>
  );
};

export default Headers;
