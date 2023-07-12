import { FC } from 'react';
import styles from './contactMe.module.scss';

interface Props {};

const ContactMe: FC<Props> = () => {
    return (
        <div className="flex container ml-auto mr-auto">
            <a href="mailto:mstgholami@gmail.com" className={styles.contactMe}>Contact Me</a>
            <a href="https://github.com/TahereGmi" target="_blank">Github</a>
            <a href="https://medium.com/@tgholami" target="_blank">Medium</a>
            <a href="https://www.linkedin.com/in/taheregholami/" target="_blank">LinkedIn</a>
            <a href="https://codepen.io/taheregmi" target="_blank">Code pen</a>
        </div>
    )
};

export default ContactMe;
