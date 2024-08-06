import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { STATUSES, type TConnectionStatus } from "utils";

interface IFormOutput<T extends {}> {
  values: T;
  isRejected: boolean;
  isFulfilled: boolean;
  isPending: boolean;
  handleChange: (
    name: keyof T,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
  errorMessage: string;
  resetStatus: () => void;
  setValues: (values: T) => void;
}

export const useForm = <T extends {}>(
  initialValues: T,
  submit: (inputs: T) => Promise<unknown>,
): IFormOutput<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [status, setStatus] = useState<TConnectionStatus | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange =
    (name: keyof T) => (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setValues((currentValues) => ({
        ...currentValues,
        [name]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit(values)
      .then((response) => {
        setStatus(STATUSES.FULFILLED);
        setErrorMessage("");
      })
      .catch((error) => {
        setStatus(STATUSES.REJECTED);
        setErrorMessage((error as Error).message);
      });
  };

  const resetStatus = () => {
    setErrorMessage("");
    setStatus(null);
  };

  return {
    values,
    isRejected: status === STATUSES.REJECTED,
    isFulfilled: status === STATUSES.FULFILLED,
    isPending: status === STATUSES.PENDING,
    handleChange,
    handleSubmit,
    errorMessage,
    resetStatus,
    setValues,
  };
};
