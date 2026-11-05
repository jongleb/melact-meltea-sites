export const series = {
  vanilla: { name: "vanilla JS", color: "var(--series-vanilla)" },
  meltea: { name: "Meltea", color: "var(--series-meltea)" },
  react: { name: "React 18", color: "var(--series-react)" },
} as const;

type Row = { series: keyof typeof series; value: number; shown: string };

type Metric = {
  title: string;
  question: string;
  direction: string;
  rows: Row[];
};

export const metrics: Record<"speed" | "size" | "heap" | "swap", Metric> = {
  speed: {
    title: "Time, geometric mean of nine keyed operations",
    question: "Slowdown against hand-written vanilla JS",
    direction: "lower is better",
    rows: [
      { series: "vanilla", value: 1, shown: "×1.00" },
      { series: "meltea", value: 1.15, shown: "×1.15" },
      { series: "react", value: 1.7, shown: "×1.70" },
    ],
  },
  size: {
    title: "JavaScript of the benchmark app",
    question: "gzip size of all JS in the production bundle",
    direction: "smaller is better",
    rows: [
      { series: "vanilla", value: 1.4, shown: "1.4 kB" },
      { series: "meltea", value: 9.0, shown: "9.0 kB" },
      { series: "react", value: 45.6, shown: "45.6 kB" },
    ],
  },
  heap: {
    title: "Heap with 1,000 rows",
    question: "After two forced garbage collections",
    direction: "smaller is better",
    rows: [
      { series: "vanilla", value: 0.77, shown: "0.77 MB" },
      { series: "meltea", value: 1.22, shown: "1.22 MB" },
      { series: "react", value: 3.17, shown: "3.17 MB" },
    ],
  },
  swap: {
    title: "Swap two rows of 1,000",
    question: "Slowdown against hand-written vanilla JS",
    direction: "lower is better",
    rows: [
      { series: "vanilla", value: 1, shown: "×1.00" },
      { series: "meltea", value: 1.12, shown: "×1.12" },
      { series: "react", value: 5.86, shown: "×5.86" },
    ],
  },
};
