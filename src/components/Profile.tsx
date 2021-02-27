import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } =useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/tiagosn01.png" alt="Tiago"/>
      <div>
        <strong>Tiago Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}