export function getWrapperWidth() {
  const pageElement = document.querySelector(".sidebar");
  const sidebarWidth = (pageElement as HTMLDivElement).clientWidth;
  const wrapperWidth = window.innerWidth - sidebarWidth - 32;
  return wrapperWidth;
}
