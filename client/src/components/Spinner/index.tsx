import { Heading, Spinner as BaseSpinner } from 'grommet';

import styles from './index.module.scss';

export function Spinner() {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles['spinner-content']}>
        <Heading margin="none">Loading</Heading>
        <BaseSpinner height="100px" width="100px" />
      </div>
    </div>
  );
}

export default Spinner;
