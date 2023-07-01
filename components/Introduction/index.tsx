import { FC } from 'react';
import styles from './introduction.module.scss'

interface IIntroductionProps {}

const IIntroduction: FC<IIntroductionProps> = () => {
    return (
        <div className={styles.introduction}>
            <h1 className={styles.title}>Tahereh Gholami</h1>
            <h2 className={styles.title}>Front-End Developer</h2>
        </div>
    )
}

export default IIntroduction;
  