import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useForm, Controller } from 'react-hook-form';

export type CheckoutFormType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export const CheckOutForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CheckoutFormType>();

  const onSubmit = (data: CheckoutFormType) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mb-4">
        <div className="flex flex-col mr-8">
          <label
            htmlFor="firstName"
            className={classNames({ 'p-error': errors.firstName })}
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
          <p>{errors.firstName && <span>This field is required</span>}</p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastname"
            className={classNames({ 'p-error': errors.lastName })}
          >
            Last Name<span className="text-red-500">*</span>
          </label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Last Name is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
          <p>{errors.lastName && <span>This field is required</span>}</p>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex flex-col mr-8">
          <label
            htmlFor="phone"
            className={classNames({ 'p-error': errors.phone })}
          >
            Phone<span className="text-red-500">*</span>
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: 'Phone is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
          <p>{errors.phone && <span>This field is required</span>}</p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={classNames({ 'p-error': errors.email })}
          >
            Email<span className="text-red-500">*</span>
          </label>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
          <p>{errors.email && <span>This field is required</span>}</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="address1"
            className={classNames({ 'p-error': errors.address1 })}
          >
            Address Line 1<span className="text-red-500">*</span>
          </label>
          <Controller
            name="address1"
            control={control}
            rules={{ required: 'Address is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
          <p>{errors.address1 && <span>This field is required</span>}</p>
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="address2"
            className={classNames({ 'p-error': errors.address2 })}
          >
            Address Line 2
          </label>
          <Controller
            name="address2"
            control={control}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="city"
            className={classNames({ 'p-error': errors.city })}
          >
            City<span className="text-red-500">*</span>
          </label>
          <Controller
            name="city"
            control={control}
            rules={{ required: 'City is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
          <p>{errors.city && <span>This field is required</span>}</p>
        </div>

        <div className="flex mb-4">
          <div className="flex flex-col mr-8">
            <label
              htmlFor="state"
              className={classNames({ 'p-error': errors.state })}
            >
              State<span className="text-red-500">*</span>
            </label>
            <Controller
              name="state"
              control={control}
              rules={{ required: 'State is required.' }}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  {...field}
                  autoFocus
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
            <p>{errors.state && <span>This field is required</span>}</p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="zip"
              className={classNames({ 'p-error': errors.zip })}
            >
              Zip Code<span className="text-red-500">*</span>
            </label>
            <Controller
              name="zip"
              control={control}
              rules={{ required: 'Zip code is required.' }}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  {...field}
                  autoFocus
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
            <p>{errors.zip && <span>This field is required</span>}</p>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="country"
            className={classNames({ 'p-error': errors.country })}
          >
            Country<span className="text-red-500">*</span>
          </label>
          <Controller
            name="country"
            control={control}
            rules={{ required: 'Country is required.' }}
            render={({ field, fieldState }) => (
              <InputText
                id={field.name}
                {...field}
                autoFocus
                className={classNames({ 'p-invalid': fieldState.invalid })}
              />
            )}
          />
          <p>{errors.country && <span>This field is required</span>}</p>
        </div>
      </div>
      <Button type="submit" label="Submit" className="!h-8" />
    </form>
  );
};
