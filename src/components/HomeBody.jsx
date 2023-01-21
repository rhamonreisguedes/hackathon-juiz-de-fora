import React from "react";
import styles from "./HomeBody.module.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const HomeBody = () => {
  const [search, setSearch] = useState("");

  const buscar = () => {
    console.log(search);
  }

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.body}>
      <form onSubmit={handleSearch} className={styles.form}>
        <label>
          <input
            className={styles.input}
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Pesquisar...'
          />
        </label>
        <button className={styles.btnBuscar} onClick={buscar}> < BsSearch /></button>
      </form>
    </div>
  );
};

export default HomeBody;
