export type FilterGroup = {
  id: string;
  title: string;
  filters: Array<{ value: string | number; label: string }>;
};
