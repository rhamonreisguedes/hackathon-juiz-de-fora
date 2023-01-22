import React from "react";
import styles from "./HomeBody.module.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const HomeBody = () => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [pacientes] = useState([]);

  const buscar = () => {
    if (pacientes.filter((item) => item === search).length === 0) {
      setNotFound(true);
      setSearch("");
    }
  };

  const digitar = (e) => {
    if (notFound) {
      setNotFound(false);
    }
    setSearch(e.target.value);
  };

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
            onChange={(e) => digitar(e)}
            placeholder="Pesquisar..."
          />
        </label>
        <button className={styles.btnBuscar} onClick={buscar}>
          <BsSearch />
        </button>
        {notFound ? (
          <p className={styles.found}>Paciente não encontrado.</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default HomeBody;
