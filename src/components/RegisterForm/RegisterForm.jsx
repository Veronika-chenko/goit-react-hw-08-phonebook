import { useDispatch } from 'react-redux';
import { singup } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { RegForm, FormLabel } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(
      singup({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    // console.log(data);
    reset();
  };

  return (
    <RegForm onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>
        Username
        <input
          {...register('name', { required: 'Username is required field' })}
          type="text"
        />
      </FormLabel>
      <div>{errors?.name && <p>{errors?.name?.message || 'Error'}</p>}</div>
      <FormLabel>
        Email
        <input
          {...register('email', { required: 'Email is required field' })}
          type="email"
        />
      </FormLabel>
      <div>{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
      <FormLabel>
        Password
        <input
          {...register('password', {
            required: 'Password is required field',
            minLength: {
              value: 7,
              message: 'Min length is 7',
            },
          })}
          type="password"
        />
      </FormLabel>
      <div>
        {errors?.password && <p>{errors?.password?.message || 'Error'}</p>}
      </div>
      <button type="submit">Register</button>
    </RegForm>
  );
};

// 400 Bad Request //handle
