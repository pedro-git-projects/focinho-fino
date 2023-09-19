export function generateContainerStyles(darkMode: boolean) {
  const baseClass = "flex justify-center items-center h-full";
  const darkModeClass = darkMode ? "bg-gray-900" : "bg-gray-100";
  return `${baseClass} ${darkModeClass}`;
}
