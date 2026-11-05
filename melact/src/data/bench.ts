export const frameworks = {
  melact: { name: "Melact", color: "var(--series-own)" },
  react: { name: "React 18", color: "var(--series-react)" },
} as const;

type Row = { framework: keyof typeof frameworks; value: number; shown: string };

type Metric = {
  title: string;
  question: string;
  direction: string;
  baseline: { value: number; shown: string };
  rows: Row[];
};

export const metrics: Record<"speed" | "size" | "heap" | "swap", Metric> = {
  speed: {
    title: "Keyed benchmark, geometric mean",
    question: "Slowdown against hand-written vanilla JS, nine keyed operations",
    direction: "lower is better",
    baseline: { value: 1, shown: "×1.00" },
    rows: [
      { framework: "melact", value: 1.17, shown: "×1.17" },
      { framework: "react", value: 1.7, shown: "×1.70" },
    ],
  },
  size: {
    title: "JavaScript of the benchmark app",
    question: "gzip size of all JS in the production bundle",
    direction: "smaller is better",
    baseline: { value: 1.4, shown: "1.4 kB" },
    rows: [
      { framework: "melact", value: 9.9, shown: "9.9 kB" },
      { framework: "react", value: 45.6, shown: "45.6 kB" },
    ],
  },
  heap: {
    title: "Heap with 1,000 rows",
    question: "After two forced garbage collections",
    direction: "smaller is better",
    baseline: { value: 0.77, shown: "0.77 MB" },
    rows: [
      { framework: "melact", value: 1.64, shown: "1.64 MB" },
      { framework: "react", value: 3.17, shown: "3.17 MB" },
    ],
  },
  swap: {
    title: "Swap rows",
    question: "Slowdown against vanilla JS, swapping two of 1,000 rows",
    direction: "lower is better",
    baseline: { value: 1, shown: "×1.00" },
    rows: [
      { framework: "melact", value: 1.17, shown: "×1.17" },
      { framework: "react", value: 5.86, shown: "×5.86" },
    ],
  },
};
