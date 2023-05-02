import styles from './toggleTime.module.scss';

type Props = { toggleToNight: boolean };

const ToggleTime: React.FunctionComponent<Props> = ({ toggleToNight }) => {
    return (
        <div className={`${styles.toggleWrapper} ${toggleToNight ? styles.nightDesign : styles.dayDesign}`}>
            {toggleToNight ? <span className={styles.tinyMoon} /> : <span className={styles.tinySun} />}
        </div>
    )
};

export default ToggleTime;
