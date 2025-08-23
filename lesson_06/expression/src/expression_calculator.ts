export class ExpressionCalculator {
  /** Returns a calculation involving a, b, c, d, and e */
  calculate(a: number, b: number, c: number, d: number, e: number): number {
    // Implement your code here to return the correct value.
    return this.divide(this.multiply(this.add(a,b),c),this.pow(d,e));
  }

add(a: number, b: number): number {
  return a + b;
}

subtract(a: number, b: number): number {
  return a - b;
}

multiply(a: number, b: number): number {
  return a * b;
}

divide(a: number, b: number): number {
  return a / b;
}
  pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
}
