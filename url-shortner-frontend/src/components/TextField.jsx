


const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`${
          className || ""
        } font-semibold text-md text-textPrimary`}
      >
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${
          className || ""
        } px-3 py-2 border outline-none bg-surface text-textPrimary rounded-md ${
          errors[id]?.message ? "border-error" : "border-borderColor"
        }`}
        {...register(id, {
          required: { value: required, message },
          minLength: min
            ? { value: min, message: "Minimum 6 characters required" }
            : null,
          pattern:
            type === "email"
              ? {
                  value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                  message: "Invalid email",
                }
              : type === "url"
              ? {
                  value:
                    /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                  message: "Please enter a valid URL",
                }
              : null,
        })}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-error mt-1">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default TextField;
