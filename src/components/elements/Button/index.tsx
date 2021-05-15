import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

// types
type Variant = `solid` | `outlined` | `text`;

type Size = `small` | `medium` | `large`;

type Color = `primary` | `danger` | `default`;

type VariantColor = `${Variant}-${Color}`;

export type ButtonProps = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// button variants
const SIZE_MAPS: Record<Size, string> = {
  small: `px-2.5 text-xs`,
  medium: `px-3 text-sm`,
  large: `px-3 text-lg`,
};

const VARIANT_MAPS: Record<Variant, string> = {
  solid: ``,
  outlined: ``,
  text: ``,
};

const COLOR_MAPS: Record<VariantColor, string> = {
  'solid-primary': `bg-revolver-800 text-gray-100`,
  'solid-default': `bg-gray-200 text-gray-800`,
  'solid-danger': `bg-red-200 text-gray-100`,
  'outlined-default': `border-gray-800 text-gray-800`,
  'outlined-primary': `border-revolver-200 text-revolver-200`,
  'outlined-danger': `border-red-200 text-red-200`,
  'text-danger': `text-red-200`,
  'text-default': `text-gray-800`,
  'text-primary': `text-revolver-200`,
};

/**
 * @component Button
 */
function Button({
  variant = `solid`,
  size = `medium`,
  color = `default`,
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    `font-medium flex flex-row items-center `,
    COLOR_MAPS[`${variant}-${color}` as VariantColor],
    VARIANT_MAPS[variant],
    SIZE_MAPS[size],
    className,
  );
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
