/**
 * Tiny classnames joiner — filters out falsy values and joins with spaces.
 * Deliberately dependency-free; good enough for className composition.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
