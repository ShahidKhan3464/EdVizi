import { Icons } from 'assets';
import useInput from './use-custom-input';

export const CustomInput = ({
  name,
  label,
  error,
  type = 'text',
  disabled = false,
  className = 'w-full text-base text-black px-3 py-2.5 rounded-lg border-[0.66px] border-solid border-[#D0D5DD] bg-white ease-soft appearance-none outline-none transition-all focus:outline-none',
  ...rest
}) => {
  const { showPassword, setShowPassword, borderColor } = useInput();

  return (
    <div className="w-full">
      <label htmlFor={name} className="text-gray700 text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={name}
          {...rest}
          name={name}
          autoComplete="off"
          disabled={disabled}
          type={showPassword ? 'text' : type}
          min={type === 'number' ? 1 : undefined}
          className={`${className} ${borderColor}
                placeholder:text-[#98A2B3] ${disabled && 'bg-slate-100 cursor-not-allowed'
            }`}
        />
        {type === 'password' && (
          <img
            alt="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            src={!showPassword ? Icons.eyeOn : Icons.eyeOff}
            className="absolute right-3 top-3 cursor-pointer"
          />
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};