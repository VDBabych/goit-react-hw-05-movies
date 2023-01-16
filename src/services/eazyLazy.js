import { lazy } from 'react';

export const eazyLazy =(str) => {
    return lazy(() =>
    import(`../pages/${str}/${str}`).then(module => ({
    ...module,
    default: module[str],
  }))
);
}