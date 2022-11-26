import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input
          {...register('email', { required: 'Email is required field' })}
        />
      </label>
      <div>{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
      <label>
        Password
        <input
          {...register('password', { required: 'Password is required field' })}
        />
      </label>
      <div>
        {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

// 400 Bad Request //handle
