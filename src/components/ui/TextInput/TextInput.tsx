interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;

  error?: string;
}

export function TextInput({ label, error, id, ...props }: Props) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      <input
        id={id}
        className="
          w-full
          rounded-md
          border
          border-slate-300
          px-3
          py-2
        "
        {...props}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
