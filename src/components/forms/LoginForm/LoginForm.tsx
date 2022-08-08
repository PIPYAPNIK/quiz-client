import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';

interface ILoginFormValues {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginFormValues>();

  const onSubmit = useCallback((values: ILoginFormValues) => {
    console.log(values);
  }, []);

  return (
    <div className={styles.root}>
      <h2 className={styles.subtitle}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['form-item']}>
          <input
            className={styles.input}
            {...register('username', { required: true, maxLength: 20 })}
          />
          <label className={styles.label}>Username</label>
        </div>
        <div className={styles['form-item']}>
          <input
            className={styles.input}
            {...register('password', { required: true, maxLength: 20 })}
          />
          <label className={styles.label}>Password</label>
        </div>
        <button className={styles.button} type="submit">
          <span />
          <span />
          <span />
          <span />
          Submit
        </button>
      </form>
    </div>
  );
};
