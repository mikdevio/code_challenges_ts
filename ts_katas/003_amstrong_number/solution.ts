export const narcissistic = (value: number): boolean => {
    const digits: number[] = Array.from(String(value), Number)
    const sumP = digits.map(n => n**digits.length).reduce((acc, n) => acc + n, 0);
    return sumP === value;
}
