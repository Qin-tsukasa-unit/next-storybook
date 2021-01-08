import React,{ useState } from 'react';
import './email.css';
import { useForm } from 'react-hook-form';

export interface EmailProps {

  title? : string;
}

export const Email: React.FC<EmailProps> = () => {
  const { register, handleSubmit, errors, reset } = useForm<EmailProps>()

  const handleOnSubmit = (data: EmailProps) => {
      console.log(data.title);
      reset()
  }

  return (
    <div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <label>Email </label>
                <input
                    type="text"
                    className={errors.title && 'error'}
                    name="title"
                    ref={register({
                        required: 'メールアドレスを入力してください。',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "emailの形式で入力してください",
                        }
                    })}
                />
                { errors.title && <span className="error-message">{ errors.title.message }</span> }
                <button className="btn is-primary">追加</button>
            </form>
        </div>
    
  );
};
