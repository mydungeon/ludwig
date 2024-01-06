export function filterKeys(columns: any, filter: string[]) {
  return Object.keys(columns).filter((key) => {
    return filter.indexOf(key) > -1;
  });
}
