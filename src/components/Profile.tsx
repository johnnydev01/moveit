import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile() {

    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu96njG50AWq5cSIUoFi2DvzT3xeEkhdAruxxToJ=s192-c-mo" alt="Johnny Sivla"/>
            <div>
                <strong>Johnny Silva</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}