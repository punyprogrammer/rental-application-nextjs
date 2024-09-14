import { Label } from "../ui/label";
import { Input } from "../ui/input";
type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};
export default function FormInput({
  name,
  type = "text",
  label,
  placeholder = "",
  defaultValue = "",
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
