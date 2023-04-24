import styles from './day.module.scss'

export default function Day() {
    return (
        <div className={styles.canvas}>
            <div className={styles.sun}>
                <div className={styles.circle}></div>
                <div className={styles.sunrays}>
                <span className={styles.sunray}>
                    <span className={styles.sunray}>
                    <span className={styles.sunray}></span>
                    </span>
                </span>
                </div>
            </div>
            <div className={styles.cloudsWrap}>
                <div className={`${styles.cloud} ${styles.cloud1}`}>
                <div className={styles.cotton}></div>
                </div>
                <div className={`${styles.cloud} ${styles.cloud2}`}>
                <div className={styles.cotton}></div>
                </div>
                <div className={`${styles.cloud} ${styles.cloud3}`}>
                <div className={styles.cotton}></div>
                </div>
                <div className={`${styles.cloud} ${styles.cloud4}`}>
                <div className={styles.cotton}></div>
                </div>
            </div>
        </div>
    )
  }
  