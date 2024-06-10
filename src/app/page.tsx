"use client";
import Image from "next/image";
import styles from "./page.module.css";
import AddUsers from './components/AddUsers';
import DisplayUsers from "./components/DisplayUsers";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
  return <main>
    <Provider store={store}>
    <AddUsers />
    <DisplayUsers />
    </Provider>
  </main>;
}
