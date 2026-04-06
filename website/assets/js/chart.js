(function () {
  const mount = document.getElementById("chart");
  const items = Array.isArray(window.generatedItems) ? window.generatedItems : [];

  if (!mount || items.length === 0) {
    return;
  }

  const width = 760;
  const height = 320;
  const padding = 36;
  const chartHeight = height - padding * 2;
  const chartWidth = width - padding * 2;
  const maxValue = Math.max(...items.map((item) => item.value), 1);
  const barWidth = chartWidth / items.length;

  const svgParts = [
    `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Simple bar chart">`,
    `<line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="currentColor" />`,
    `<line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="currentColor" />`
  ];

  items.forEach((item, index) => {
    const scaled = (item.value / maxValue) * (chartHeight - 20);
    const x = padding + index * barWidth + 10;
    const y = height - padding - scaled;
    const rectWidth = Math.max(barWidth - 20, 20);

    svgParts.push(`<rect x="${x}" y="${y}" width="${rectWidth}" height="${scaled}" fill="#93c5fd" />`);
    svgParts.push(`<text x="${x + rectWidth / 2}" y="${y - 8}" font-size="12" text-anchor="middle">${item.value}</text>`);
    svgParts.push(`<text x="${x + rectWidth / 2}" y="${height - padding + 18}" font-size="12" text-anchor="middle">${item.name}</text>`);
  });

  svgParts.push("</svg>");
  mount.innerHTML = svgParts.join("");
})();
