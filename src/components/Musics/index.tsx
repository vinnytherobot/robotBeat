'use client'

import styles from "../../styles/Musics/index.module.css"

import { useEffect, useState } from "react"

export default function Musics() {
    const [playlist, setPlaylist] = useState<string[]>([]);

    useEffect(() => {
        const playlistString = localStorage.getItem("playlist");

        const storedPlaylist = playlistString ? JSON.parse(playlistString) as string[] : [];
        
        setPlaylist(storedPlaylist);
    }, [])

    return (
        <main className={styles.container}>
            {playlist.map((item: string, key) => (
                <iframe className={styles.music} src={item} key={key}></iframe>
            ))}

            {playlist.length === 0 && <h1 className={styles.message}>No musics found.</h1>}
        </main>
    )
}