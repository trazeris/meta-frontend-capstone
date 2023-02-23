import * as yup from 'yup';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import './ReservationForm.styles.css';
import { Dispatch } from 'react';

interface ReservationsFormProps {
  availableTimes: string[];
  dispatchSelectedDate: Dispatch<string>;
  handleFormSubmit: (data: FieldValues) => void;
}

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  guests: yup
    .number()
    .min(1, 'There must be at least 1 guest')
    .required('Number of guests is required'),
  time: yup.string().required('Please select time'),
  date: yup.string().required('Please select date'),
  occasion: yup.string(),
});

function ReservationForm({
  availableTimes,
  dispatchSelectedDate,
  handleFormSubmit,
}: ReservationsFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const formSubmit = (data: FieldValues) => {
    handleFormSubmit(data);
  };

  const handleDateChange = () => {
    dispatchSelectedDate(getValues('date'));
  };

  return (
    <section className="reservation-page">
      <h1>Reservation</h1>

      <form onSubmit={handleSubmit(formSubmit)} noValidate={true}>
        <div className={`input-group ${errors?.name && 'invalid'}`}>
          <label htmlFor="res-name">Your name*</label>
          <input type="string" id="res-name" {...register('name')} />
          {errors?.name && (
            <span role="alert">{errors.name.message?.toString()}</span>
          )}
        </div>

        <div className={`input-group ${errors?.email && 'invalid'}`}>
          <label htmlFor="res-email">Your e-mail*</label>
          <input type="email" id="res-email" {...register('email')} />
          {errors?.email && (
            <span role="alert">{errors.email.message?.toString()}</span>
          )}
        </div>

        <div className={`input-group ${errors?.date && 'invalid'}`}>
          <label htmlFor="res-date">Choose date*</label>
          <input
            type="date"
            id="res-date"
            {...register('date', {
              onChange: handleDateChange,
            })}
          />
          {errors?.date && (
            <span role="alert">{errors.date.message?.toString()}</span>
          )}
        </div>

        <div className={`input-group ${errors?.time && 'invalid'}`}>
          <label htmlFor="res-time">Choose time*</label>
          <select id="res-time" {...register('time')}>
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          {errors?.time && (
            <span role="alert">{errors.time.message?.toString()}</span>
          )}
        </div>

        <div className={`input-group ${errors?.guests && 'invalid'}`}>
          <label htmlFor="res-guests">Number of guests*</label>
          <input type="number" id="res-guests" {...register('guests')} />
          {errors?.guests && (
            <span role="alert">{errors.guests.message?.toString()}</span>
          )}
        </div>

        <div className={`input-group ${errors?.occasion && 'invalid'}`}>
          <label htmlFor="res-occasion">Occasion</label>
          <select id="res-occasion" {...register('occasion')}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {errors?.occasion && (
            <span role="alert">{errors.occasion.message?.toString()}</span>
          )}
        </div>

        <input
          className="btn"
          type="submit"
          value="Make your reservation"
          disabled={!isDirty || !isValid}
        />
      </form>
    </section>
  );
}

export default ReservationForm;
