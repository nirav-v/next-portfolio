// components/ButtonLink.js
import Link from 'next/link';

type ButtonLinkProps = {
  href?: string;
  onClick?: () => void;
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
};

export default function ButtonLink({
  href,
  onClick,
  label,
  variant = 'primary',
  fullWidth = true,
}: ButtonLinkProps) {
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
  };

  return (
    <Link
      href={href || '#'}
      onClick={onClick}
      className={`btn btn-outline ${variantStyles[variant]} uppercase my-4 ${
        fullWidth ? 'w-2/3' : 'w-auto'
      } text-center`}>
      {label}
    </Link>
  );
}
