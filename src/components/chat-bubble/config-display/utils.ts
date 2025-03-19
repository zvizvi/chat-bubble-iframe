
// Function to format the icon config value based on whether it's a keyword or SVG
export const formatIconConfig = (icon: string) => {
  const keywords = ["message-circle", "arrow-up", "arrow-down", "close"];

  // If it's a keyword, use it directly
  if (keywords.includes(icon)) {
    return `'${icon}'`;
  }

  // If it starts with <svg, it's an SVG string
  if (icon.trim().startsWith('<svg')) {
    return `'${icon.replace(/'/g, "\\'")}'`;
  }

  // Default fallback
  return `'message-circle'`;
};
