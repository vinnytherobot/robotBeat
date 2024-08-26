import { ChangeEventHandler, FormEventHandler } from "react"
import styles from "../../styles/AddMusic/index.module.css"

type AddMusicType = {
    handleSubmit: FormEventHandler;
    handleChange: ChangeEventHandler;
}


export default function AddMusic( {handleChange, handleSubmit }: AddMusicType){
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" className={styles.input} onChange={handleChange} name="musicLink" placeholder="Music Link..."/>
            <input type="submit" className={styles.button} value="Add music" />
        </form>
    )
}