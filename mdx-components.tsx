import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

const components = {
  a: ({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) => {
    const className =
      'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
  },
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(components: MDXProvidedComponents) {
  return {
    ...components,
  };
}
