// Parses a CSS declaration string (as used in the original prototype's
// inline style="..." attributes) into a React style object. Lets screen
// components keep the prototype's exact CSS text instead of hand-translating
// every declaration into camelCase object literals.
export function sx(cssText) {
  if (!cssText) return undefined;
  const style = {};
  cssText.split(';').forEach((decl) => {
    const idx = decl.indexOf(':');
    if (idx === -1) return;
    const rawProp = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!rawProp || !value) return;
    const camel = rawProp.startsWith('--')
      ? rawProp
      : rawProp.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    style[camel] = value;
  });
  return style;
}

// Merge one or more sx()-produced (or plain) style objects, skipping falsy entries.
export function mergeSx(...styles) {
  return Object.assign({}, ...styles.filter(Boolean));
}
