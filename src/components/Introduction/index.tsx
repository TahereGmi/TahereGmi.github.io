import { FC } from 'react';
import styles from './introduction.module.scss'

interface IIntroductionProps {}

const IIntroduction: FC<IIntroductionProps> = () => {
    return (
        <div className="flex-1">
            <h1>Tahereh Gholami</h1>
            <h2>Front-End Developer</h2>
        </div>
    )
}

export default IIntroduction;
  