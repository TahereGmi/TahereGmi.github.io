import styles from './toggleTime.module.scss';

interface Props { 
    toggleToNight: boolean;
    onClick: () => void;
};

const ToggleTime: React.FC<Props> = ({ toggleToNight, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className={`${styles.toggleWrapper} ${toggleToNight ? styles.nightDesign : styles.dayDesign}`}>
            {toggleToNight ? 
                <>
                    <span className={styles.tinyMoon} />
                    <span className={styles.moonCerved} />
                    <span className={styles.star1} />
                    <span className={styles.star2} />
                </> :
                <>
                    <span className={styles.tinySun} />
                    <span className={styles.sunShine} />
                </>}
        </div>
    )
};

export default ToggleTime;
