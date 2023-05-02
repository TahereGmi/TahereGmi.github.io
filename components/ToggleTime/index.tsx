import styles from './toggleTime.module.scss';

interface Props { 
    toggleToNight: boolean;
    onClick: () => void;
};

const ToggleTime: React.FunctionComponent<Props> = ({ toggleToNight, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className={`${styles.toggleWrapper} ${toggleToNight ? styles.nightDesign : styles.dayDesign}`}>
            {toggleToNight ? <span className={styles.tinyMoon} /> : <span className={styles.tinySun} />}
        </div>
    )
};

export default ToggleTime;
