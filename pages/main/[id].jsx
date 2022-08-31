import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'

export default function Main() { 

    const router = useRouter()

    const parametro = router.query.id

    return (
        <div style={{backgroundColor: `${parametro}`, height: "100vh", width: "100vw"}} className={styles.container}>
            <p>PARAMETRO: {parametro}</p>
        </div>
    )
}