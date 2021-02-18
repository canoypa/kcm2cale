type Range = {
  (stop: number): number[];
  (start: number, stop: number): number[];
  (start: number, stop: number, step: number): number[];
};
export const range: Range = (
  _start: number,
  _stop?: number,
  _step?: number
) => {
  const start = _stop === undefined ? 0 : _start;
  const stop = _stop ?? _start;

  const diff = (stop - start) / (_step ?? 1);
  const length = Math.abs(diff);
  const step = _step ?? Math.sign(diff);

  return [...Array(length).keys()].map((i) => start + i * step);
};
