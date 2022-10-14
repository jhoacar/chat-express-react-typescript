import styles from './index.module.scss';

export function Spinner() {
  return (
    <div className={styles['fallback-spinner']}>
      <div className={styles.image}>
        <img src="/icon.svg" alt="icon" />
      </div>
      <div className={styles.loading}>
        <div className={`${styles.effects} ${styles['effect-1']}`} />
        <div className={`${styles.effects} ${styles['effect-2']}`} />
        <div className={`${styles.effects} ${styles['effect-3']}`} />
      </div>
    </div>
  );
}

export default Spinner;
