// From https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-exhaustiveness-checking
import { t } from '../../locales';

export function assertNever(x: never): never {
  throw new Error(t('backend.utils.unexpectedObject', { value: JSON.stringify(x) }));
}
