import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [todos, setTodos] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [setTodos]);
  console.log(todos);
  return (
    <>
      <Head>
        <title>Dare XD | Vercel</title>
        <meta name="keywords" content="Dare XD" />
        <meta name="author" content="Dare Goodness" />
      </Head>
      <div>
        {/* {todos.map((todo) => (
          <p>{todo.title}</p>
        ))} */}
        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, saepe
          vel quia a deserunt, labore impedit perspiciatis aut error sed
          deleniti voluptatum aliquam inventore. Reiciendis, ad quaerat
          mollitia, vel hic dolor incidunt ut iste fugiat eius a cum eveniet
          qui!
        </p>
        <Link href="/listing">
          <a className={styles.btn}>Go to Contacts</a>
        </Link>
      </div>
    </>
  );
}
