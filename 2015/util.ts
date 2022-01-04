import * as fs from "fs";

export const range = (start: number, end: number) => {
  const low = Math.min(start, end);
  const high = Math.max(start, end);
  const result = [];
  for (let i = low; i <= high; i++) {
    result.push(i);
  }
  return start < end ? result : result.reverse();
};
export const uniqR = <T>(acc: T[], item: T): T[] => (acc.includes(item) ? acc : acc.concat(item));
export const combine2 = <T>(items: T[]) => combine(items, 2) as Array<[T, T]>;
export const combine3 = <T>(items: T[]) => combine(items, 3) as Array<[T, T, T]>;
export const combine = <T>(items: T[], count: number): Array<T[]> => {
  if (count === 1) return items.map((x) => [x]);
  if (items.length < count) return [];
  return items.reduce((acc, item, idx) => {
    const rest = combine(items.slice(idx + 1), count - 1);
    return acc.concat(rest.map((x) => [items[idx], ...x]));
  }, []);
};

export const toInt = (str: string) => parseInt(str, 10);

export class Counter extends Map {
  constructor() {
    super();
  }
  count(key: string) {
    if (!this.has(key)) {
      this.set(key, 1);
    } else {
      this.set(key, this.get(key) + 1);
    }
  }
}

export function readLines(filename: string): string[] {
  return readFile(filename)
    .split(/[\r\n]/)
    .filter((x) => !!x);
}

export function readFile(filename: string) {
  return fs.readFileSync(filename, "utf-8");
}
