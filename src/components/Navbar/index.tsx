import Link from "next/link"
import styles from "../../styles/Navbar/index.module.css"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/myplaylist">My Playlist</Link>
        </nav>
    )
}