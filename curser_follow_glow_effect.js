const content = document.querySelector('#overview .content');
      
content.addEventListener('mousemove', (e) => {
  const rect = content.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Customize glow effect properties
  const glowSize = '0px'; // Size of the glow
  const glowColor = 'rgba(0, 255, 0, 0.2)'; // Color and opacity of the glow
  const blurSize = '150px'; // Size of the blur effect

  // Create multiple layers of radial gradients to simulate a blur effect
  const glow = `
    radial-gradient(circle at ${x}px ${y}px, ${glowColor} ${glowSize}, transparent ${blurSize})
  `;

  content.style.background = glow;
});

content.addEventListener('mouseleave', () => {
  // Reset glow effect when the cursor leaves the content area
  content.style.background = 'none';
});