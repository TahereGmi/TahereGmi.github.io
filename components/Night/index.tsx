import Saturn from '../Saturn';
import styles from './night.module.scss';

export default function Night() {
    return (
        <div className={styles.canvas}>
            <div className={styles.moon}></div>
            <div className={styles.star}></div>
            <div className={styles.star2}></div>
            <div className={styles.star3}></div>
            <div className={styles.star4}></div>
            <div className={styles.meteorite}></div>
            <div className={styles.cloudsWrap}>
                <div className={styles.cloud1}>
                <div className={styles.cotton}></div>
                </div>
                <div className={styles.cloud2}>
                <div className={styles.cotton}></div>
                </div>
            </div>
            <Saturn />
        </div>
    )
}
