// Configuration using CSS variables
const borderSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--border-size'));
const triangleSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--triangle-size'));
const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap'));
const linesPerTriangle = 15;
const lineThickness = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--line-thickness'));
const lineGap = (borderSize - lineThickness) / (linesPerTriangle - 1);

function createBorders() {
  // Clear existing borders
  document.querySelectorAll('.border-pattern').forEach(border => {
    border.innerHTML = '';
  });
  
  // Calculate how many triangles fit
  const horizontalTriangles = Math.ceil(window.innerWidth / (triangleSize + gap * 2));
  const verticalTriangles = Math.ceil(window.innerHeight / (triangleSize + gap * 2));
  
  // LEFT BORDER (right-pointing)
  const leftBorder = document.getElementById('left-border');
  for (let t = 0; t < verticalTriangles; t++) {
    for (let i = 0; i < linesPerTriangle; i++) {
      const line = document.createElement('div');
      line.className = 'horizontal-line';
      line.style.left = '0';
      line.style.top = `${t * (triangleSize + gap * 2) + i * lineGap}px`;
      
      const middleIndex = Math.floor(linesPerTriangle / 2);
      const distanceFromMiddle = Math.abs(i - middleIndex);
      const width = triangleSize - (distanceFromMiddle * (triangleSize / middleIndex));
      line.style.width = `${width}px`;
      
      leftBorder.appendChild(line);
    }
  }
  
  // RIGHT BORDER (left-pointing)
  const rightBorder = document.getElementById('right-border');
  for (let t = 0; t < verticalTriangles; t++) {
    for (let i = 0; i < linesPerTriangle; i++) {
      const line = document.createElement('div');
      line.className = 'horizontal-line';
      line.style.right = '0';
      line.style.top = `${t * (triangleSize + gap * 2) + i * lineGap}px`;
      
      const middleIndex = Math.floor(linesPerTriangle / 2);
      const distanceFromMiddle = Math.abs(i - middleIndex);
      const width = triangleSize - (distanceFromMiddle * (triangleSize / middleIndex));
      line.style.width = `${width}px`;
      
      rightBorder.appendChild(line);
    }
  }
  
  // TOP BORDER (down-pointing)
  const topBorder = document.getElementById('top-border');
  for (let t = 0; t < horizontalTriangles; t++) {
    for (let i = 0; i < linesPerTriangle; i++) {
      const line = document.createElement('div');
      line.className = 'vertical-line';
      line.style.top = '0';
      line.style.left = `${t * (triangleSize + gap * 2) + i * lineGap}px`;
      
      const middleIndex = Math.floor(linesPerTriangle / 2);
      const distanceFromMiddle = Math.abs(i - middleIndex);
      const height = triangleSize - (distanceFromMiddle * (triangleSize / middleIndex));
      line.style.height = `${height}px`;
      
      topBorder.appendChild(line);
    }
  }
  
  // BOTTOM BORDER (up-pointing)
  const bottomBorder = document.getElementById('bottom-border');
  for (let t = 0; t < horizontalTriangles; t++) {
    for (let i = 0; i < linesPerTriangle; i++) {
      const line = document.createElement('div');
      line.className = 'vertical-line';
      line.style.bottom = '0';
      line.style.left = `${t * (triangleSize + gap * 2) + i * lineGap}px`;
      
      const middleIndex = Math.floor(linesPerTriangle / 2);
      const distanceFromMiddle = Math.abs(i - middleIndex);
      const height = triangleSize - (distanceFromMiddle * (triangleSize / middleIndex));
      line.style.height = `${height}px`;
      
      bottomBorder.appendChild(line);
    }
  }
}

// Initial creation
createBorders();

// Responsive adjustments
window.addEventListener('resize', () => {
  createBorders();
});