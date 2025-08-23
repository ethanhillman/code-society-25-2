/**
 * Returns true if the provided age meets the minimum US voting age and false otherwise.
 *
 * @param age The age to check.
 * @return True if the age corresponds to a voting age and false otherwise.
 */
export function canVote(age: number): boolean {
  if (age >=18){
    return true;
  }
  else{
    return false;
  }
}

/**
 * Adds all of the provided values and returns the sum.
 *
 * @param values The values to sum.
 * @return The sum of all the values.
 */
export function addNumbers(values: number[]): number {
  let sum = 0;
  for (const value of values){
    sum +=value;
  }
  return sum;
}

/**
 * Computes the factorial of the given value of `n`.
 *
 * @param n The value for which to compute the factorial.
 * @return The factorial of n.
 */
export function computeFactorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
