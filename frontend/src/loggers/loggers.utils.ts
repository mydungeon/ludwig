export function logTable(component: any, value1: any) {
  const metrics = { component, value1 };
  console.table(metrics);
}
