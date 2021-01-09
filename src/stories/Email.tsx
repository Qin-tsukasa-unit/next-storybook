import React, { useState } from 'react'
import './email.css'
import { useForm } from 'react-hook-form'

export interface EmailProps {
  mail_text?: string
}

export const Email: React.FC<EmailProps> = ({ mail_text }) => {
  const { register, handleSubmit, errors, reset } = useForm<EmailProps>()

  const handleOnSubmit = (data: EmailProps) => {
    console.log(data.mail_text)
    reset()
  }

  return (
    <div>
      <form onBlur={handleSubmit(handleOnSubmit)}>
        <label>Email </label>
        <input
          type="text"
          className={errors.mail_text && 'error'}
          name="mail_text"
          ref={register({
            required: 'メールアドレスを入力してください。',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'emailの形式で入力してください'
            }
          })}
          value={mail_text}
        />
        {errors.mail_text && <span className="error-message">{errors.mail_text.message}</span>}
      </form>
    </div>
  )
}
