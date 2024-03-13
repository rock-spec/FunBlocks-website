'use client';
import Button from "@mui/joy/Button";
import {NavBar} from "@/components/NavBar/NavBar";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function Home() {
  return (
      <>
        <NavBar/>
        <Main/>
        <Footer/>
      </>
  )
}
