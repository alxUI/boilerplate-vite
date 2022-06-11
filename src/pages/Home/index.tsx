import { useEffect } from 'react';

import { useTheme } from 'contexts/Theme';
import { useToast } from 'contexts/Toast';

import styles from './Home.module.scss';

export function Homepage() {
  const { theme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    toast.success('Bem vindo ao template alx');
  }, [toast]);

  return (
    <>
      <div className={styles.home} data-theme={theme}>
        <h1>
          alx<span>boilerplate</span>
        </h1>
      </div>
    </>
  );
}
