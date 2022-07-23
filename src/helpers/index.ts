export const randomRgba = (): string => {
  const numbers = {
    o: Math.round,
    r: Math.random,
    s: 255,
  };
  const { o, r, s } = numbers;

  return `rgba(${o(r() * s)}, ${o(r() * s)},${o(r() * s)}, ${r().toFixed(1)})`;
};

export const getInitials = (value: string): string => value.slice(0, 1);
