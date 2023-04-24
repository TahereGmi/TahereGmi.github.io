import styles from './saturn.module.scss'

export default function Saturn() {
    return (
        <div className={styles.canvas}>
            <div className={styles.arc}></div>
            <div className={styles.circ}>
                <div className={styles.arc3}></div>
                <div className={styles.arc7}></div>
            </div> 
        </div>
    )
  }
  