"use client";
import Image from "next/image";
import styles from "./page.module.css";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PageProps } from '../../.next/types/app/remove-user/page';
import React from 'react';
import RemoveUser from "./remove-user/page";

export default function Home() {
  return (
    <main>
      {/* <Provider store={store}> */}
        <AddUsers />
        <DisplayUsers />
        {/* <RemoveUser /> */}
      {/* </Provider> */}
    </main>
  );
}
