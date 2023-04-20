import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  LabelHTMLAttributes,
} from "react";
import { useFormContext } from "react-hook-form";

export const InputGroup = ({
  name,
  label,
  type,
  placeholder,
  required,
}: {
  required?: boolean;
  placeholder?: string;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  // console.log("NAME", name);
  return (
    <div>
      <label htmlFor={name} className="block text-lg font-medium leading-6 ">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type ?? "text"}
          {...register(name, {
            required,
            pattern:
              type === "email"
                ? /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                : undefined,
          })}
          className="block w-full rounded-md text-2xl border-0 py-1.5 pr-10 lg:py-3 lg:px-4 bg-[#3c3c3c]    focus:ring-gray-500 "
          placeholder={placeholder}
          // aria-invalid="true"
          // aria-describedby="email-error"
        />
        {errors[name] && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {errors[name]?.type === "required" && (
        <p className="mt-2 text-base text-red-600" id="email-error">
          Required.
        </p>
      )}
      {errors[name]?.type === "pattern" && (
        <p className="mt-2 text-base text-red-600" id="email-error">
          Invalid email address
        </p>
      )}
    </div>
  );
};
export function InputCheckbox({
  name,
  label,
  required,
  labelProps,
}: {
  required?: boolean;
  label: string;
  name: string;
  labelProps?: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          aria-describedby="aggreement-description"
          type="checkbox"
          {...register(name, { required })}
          className="h-4 w-4 lg:h-8 lg:w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label
          htmlFor={name}
          className="font-medium text-xl hover:cursor-pointer underline"
          {...labelProps}
        >
          {label}
        </label>
        {errors[name]?.type === "required" && (
          <p className="mt-2 text-base text-red-600" id="email-error">
            Required.
          </p>
        )}
      </div>
    </div>
  );
}
