import styles from './introduction.module.scss'

interface IDayProps {
    status: boolean;
}

const Day: React.FC<IDayProps> = ({ status }) => {
    return (
        <div className={styles.introduction}>
            <h1 className={`${styles.title} ${status ? styles.isDay : styles.isNight}`}>Tahereh Gholami</h1>
            <h2 className={`${styles.title} ${status ? styles.isDay : styles.isNight}`}>Front-End Developer</h2>
        </div>
    )
}

export default Day;
  