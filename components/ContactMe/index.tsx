import { FC } from 'react';
import styles from './contactMe.module.scss';

interface Props {};

const ContactMe: FC<Props> = () => {
    return (
        <div className={styles.contactWrapper}>
            <span className={styles.contactMe}>Contact Me</span>
            <span>Email</span>
            <span>Github</span>
            <span>Medium</span>
            <span>LinkedIn</span>
            <span>Code pen</span>
        </div>
    )
};

export default ContactMe;
