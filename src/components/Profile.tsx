import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu96njG50AWq5cSIUoFi2DvzT3xeEkhdAruxxToJ=s192-c-mo" alt="Johnny Sivla"/>
            <div>
                <strong>Johnny Silva</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    );
}