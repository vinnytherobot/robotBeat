'use client'

import styles from "../styles/Home.module.css"

import AddMusic from "@/components/AddMusic/index"

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Navbar from "@/components/Navbar/index"


export default function Home(){
    const [search, setSearch] = useState("");
    const router = useRouter();

    useEffect(() => {
        if(!localStorage.getItem("playlist")){
            localStorage.setItem("playlist", JSON.stringify([]));
        }
    }, [])

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value);
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const playlistBefore = JSON.parse(localStorage.getItem("playlist") || "[]");
        const updatedPlaylist = [...playlistBefore, search];

        localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));

        setSearch("");

        router.push("/myplaylist")
    }

    return(
        <>
            <main className={styles.container}>
                <AddMusic handleSubmit={handleSubmit} handleChange={handleChange}/>
            </main>
        </>
    )
}