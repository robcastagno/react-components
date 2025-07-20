import { ButtonVariants } from "./variants";
import type { VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof ButtonVariants>;
interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ children, onClick, disabled, ...variants }: ButtonProps): React.JSX.Element {

  return (
    <>
      <button className={ButtonVariants({ ...variants })} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  )
}

export default Button;
