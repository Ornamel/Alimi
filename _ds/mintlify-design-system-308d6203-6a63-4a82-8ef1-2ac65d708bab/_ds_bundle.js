/* @ds-bundle: {"format":4,"namespace":"MintlifyDesignSystem_308d62","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/code/CodeBlock.jsx"},{"name":"InlineCode","sourcePath":"components/code/CodeBlock.jsx"},{"name":"SidebarNav","sourcePath":"components/docs/Docs.jsx"},{"name":"TocList","sourcePath":"components/docs/Docs.jsx"},{"name":"PropertyRow","sourcePath":"components/docs/Docs.jsx"},{"name":"FeatureComparisonTable","sourcePath":"components/docs/Docs.jsx"},{"name":"Docs","sourcePath":"components/docs/Docs.jsx"},{"name":"SearchPill","sourcePath":"components/forms/SearchPill.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"HeroSky","sourcePath":"components/hero/Hero.jsx"},{"name":"HeroDark","sourcePath":"components/hero/Hero.jsx"},{"name":"ProductMockup","sourcePath":"components/hero/Hero.jsx"},{"name":"Hero","sourcePath":"components/hero/Hero.jsx"},{"name":"MarketingNav","sourcePath":"components/navigation/Navigation.jsx"},{"name":"DocsNav","sourcePath":"components/navigation/Navigation.jsx"},{"name":"FooterRegion","sourcePath":"components/navigation/Navigation.jsx"},{"name":"FaqAccordionItem","sourcePath":"components/navigation/Navigation.jsx"},{"name":"LogoWall","sourcePath":"components/navigation/Navigation.jsx"},{"name":"Navigation","sourcePath":"components/navigation/Navigation.jsx"},{"name":"SegmentedTabs","sourcePath":"components/tabs/Tabs.jsx"},{"name":"PillTabs","sourcePath":"components/tabs/Tabs.jsx"},{"name":"MonthlyYearlyToggle","sourcePath":"components/tabs/Tabs.jsx"},{"name":"Tabs","sourcePath":"components/tabs/Tabs.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"e0849c155007","components/buttons/Button.jsx":"70c157013026","components/cards/Card.jsx":"d7f032cd2715","components/code/CodeBlock.jsx":"07110cfc6e77","components/docs/Docs.jsx":"5c9fb4181206","components/forms/SearchPill.jsx":"1cecb6d3831e","components/forms/TextInput.jsx":"662e69c832ce","components/hero/Hero.jsx":"c428bd40990b","components/navigation/Navigation.jsx":"4bffa484e51c","components/tabs/Tabs.jsx":"209ad9cd0ead","ui_kits/marketing-site/DocsPage.jsx":"e145bc8ef49d","ui_kits/marketing-site/Home.jsx":"f98c1fd2e1ff","ui_kits/marketing-site/Pricing.jsx":"899849e31894","ui_kits/marketing-site/Startups.jsx":"48fe9536ba26"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MintlifyDesignSystem_308d62 = window.MintlifyDesignSystem_308d62 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label chips: discount, required, type-signature, and doc-tag references.
 */
function Badge({
  variant = 'type',
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: variant === 'type' ? 'var(--font-mono)' : 'var(--font-sans)',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    padding: '2px 6px'
  };
  const variants = {
    discount: {
      background: 'var(--color-brand-green)',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-bold-size)',
      fontWeight: 'var(--text-caption-bold-weight)',
      borderRadius: 'var(--radius-full)',
      padding: '2px 8px'
    },
    required: {
      background: 'var(--color-brand-error)',
      color: 'var(--color-on-dark)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-micro-uppercase-size)',
      fontWeight: 'var(--text-micro-uppercase-weight)',
      letterSpacing: 'var(--text-micro-uppercase-ls)',
      textTransform: 'uppercase'
    },
    type: {
      background: 'var(--color-surface)',
      color: 'var(--color-steel)',
      fontSize: 'var(--text-code-sm-size)'
    },
    tag: {
      background: 'var(--color-badge-tag-bg)',
      color: 'var(--color-brand-tag)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-bold-size)',
      fontWeight: 'var(--text-caption-bold-weight)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Mintlify's single button primitive, covering every documented variant.
 * Pills (`radius-full`) dominate; `ghost` is the one squared exception for quiet in-UI actions.
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconOnly = false,
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-button-md-size)',
    fontWeight: 'var(--text-button-md-weight)',
    lineHeight: 'var(--text-button-md-lh)',
    border: 'none',
    cursor: disabled ? 'default' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    transition: 'background-color 180ms ease, color 180ms ease, border-color 180ms ease',
    whiteSpace: 'nowrap'
  };
  const paddings = iconOnly ? {
    padding: 0,
    width: '32px',
    height: '32px'
  } : {
    padding: '10px 20px'
  };
  const variants = {
    primary: {
      background: disabled ? 'var(--color-hairline)' : 'var(--color-primary)',
      color: disabled ? 'var(--color-muted)' : 'var(--color-on-primary)',
      borderRadius: 'var(--radius-full)'
    },
    'accent-green': {
      background: 'var(--color-brand-green)',
      color: 'var(--color-ink)',
      borderRadius: 'var(--radius-full)'
    },
    'on-dark': {
      background: 'var(--color-on-dark)',
      color: 'var(--color-primary)',
      borderRadius: 'var(--radius-full)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-full)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-ink)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 12px'
    },
    link: {
      background: 'transparent',
      color: 'var(--color-ink)',
      padding: 0,
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 'var(--text-body-sm-medium-weight)',
      textDecoration: 'none'
    },
    'icon-circular': {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-full)'
    }
  };
  const activeStyles = {
    ...base,
    ...(variant === 'ghost' ? {} : variant === 'link' ? {} : paddings),
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: activeStyles,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--color-charcoal)';
    },
    onMouseUp: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary)';
    }
  }, rest), icon, !iconOnly && children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's rectangular container family: base, feature, pricing, pricing-featured, testimonial.
 * Every variant uses --radius-lg except `feature`, which stays flat on a tinted surface.
 */
function Card({
  variant = 'base',
  children,
  style,
  ...rest
}) {
  const base = {
    borderRadius: 'var(--radius-lg)',
    fontFamily: 'var(--font-sans)'
  };
  const variants = {
    base: {
      background: 'var(--color-canvas)',
      padding: 'var(--space-xl)',
      border: '1px solid var(--color-hairline)'
    },
    feature: {
      background: 'var(--color-surface)',
      padding: 'var(--space-xxl)'
    },
    pricing: {
      background: 'var(--color-canvas)',
      padding: 'var(--space-xxl)',
      border: '1px solid var(--color-hairline)'
    },
    'pricing-featured': {
      background: 'var(--color-canvas)',
      padding: 'var(--space-xxl)',
      border: '2px solid var(--color-brand-green)',
      boxShadow: 'var(--shadow-4)'
    },
    testimonial: {
      background: 'var(--color-testimonial-orange)',
      color: 'var(--color-on-dark)',
      padding: 'var(--space-section)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/code/CodeBlock.jsx
try { (() => {
/**
 * CodeBlock — syntax-highlighted code container with header bar (language label + copy button).
 * Basic token coloring is applied via lightweight regex spans, not a full highlighter.
 */
function CodeBlock({
  language = 'jsx',
  code = '',
  filename,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-code)',
      color: 'var(--color-on-dark-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      padding: 'var(--space-xs) var(--space-md)',
      borderBottom: '1px solid var(--color-hairline-dark)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, filename || language), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      border: '1px solid var(--color-hairline-dark)',
      color: 'var(--color-on-dark-muted)',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 8px',
      fontSize: 'var(--text-caption-size)',
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer'
    }
  }, "Copy")), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      background: 'var(--color-surface-code)',
      color: 'var(--color-on-dark)',
      fontSize: 'var(--text-code-md-size)',
      lineHeight: 'var(--text-code-md-lh)',
      padding: 'var(--space-md)',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("code", null, code)));
}

/**
 * InlineCode — inline `<Tabs>`-style reference chip in body prose.
 */
function InlineCode({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'var(--color-surface)',
      color: 'var(--color-charcoal)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-code-inline-size)',
      fontWeight: 'var(--text-code-inline-weight)',
      borderRadius: 'var(--radius-xs)',
      padding: '2px 6px',
      border: '1px solid var(--color-hairline)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { CodeBlock, InlineCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/docs/Docs.jsx
try { (() => {
/**
 * SidebarNav — documentation left-rail navigation with section headers and active state.
 */
function SidebarNav({
  sections = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 240,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, sections.map(section => /*#__PURE__*/React.createElement("div", {
    key: section.title,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-micro-uppercase-size)',
      fontWeight: 'var(--text-micro-uppercase-weight)',
      letterSpacing: 'var(--text-micro-uppercase-ls)',
      textTransform: 'uppercase',
      color: 'var(--color-steel)',
      padding: 'var(--space-md) var(--space-md) var(--space-xs)'
    }
  }, section.title), section.items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      padding: 'var(--space-xs) var(--space-md)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body-sm-size)',
      fontWeight: item.active ? 'var(--text-body-sm-medium-weight)' : 'var(--text-body-sm-weight)',
      background: item.active ? 'var(--color-surface)' : 'transparent',
      color: item.active ? 'var(--color-ink)' : 'var(--color-steel)',
      cursor: 'pointer'
    }
  }, item.label || item)))));
}

/**
 * TocList — right-rail table-of-contents; active item gets a mint left-border accent.
 */
function TocList({
  items = [],
  activeIndex = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, items.map((item, i) => {
    const active = i === activeIndex;
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      style: {
        fontSize: 'var(--text-body-sm-size)',
        fontWeight: active ? 'var(--text-body-sm-medium-weight)' : 'var(--text-body-sm-weight)',
        color: active ? 'var(--color-ink)' : 'var(--color-steel)',
        padding: '2px 0 2px 10px',
        borderLeft: active ? '2px solid var(--color-brand-green)' : '2px solid transparent'
      }
    }, item);
  }));
}

/**
 * PropertyRow — API property documentation row (e.g. `defaultIndex` on the Tabs page).
 */
function PropertyRow({
  name,
  type,
  required = false,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-md) 0',
      borderBottom: '1px solid var(--color-hairline-soft)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-code-inline-size)',
      fontWeight: 'var(--text-code-inline-weight)',
      color: 'var(--color-ink)'
    }
  }, name), type && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--color-surface)',
      color: 'var(--color-steel)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-code-sm-size)',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 6px'
    }
  }, type), required && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--color-brand-error)',
      color: 'var(--color-on-dark)',
      fontSize: 'var(--text-micro-uppercase-size)',
      fontWeight: 'var(--text-micro-uppercase-weight)',
      letterSpacing: 'var(--text-micro-uppercase-ls)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 6px'
    }
  }, "Required")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-steel)',
      lineHeight: 'var(--text-body-sm-lh)'
    }
  }, description));
}

/**
 * FeatureComparisonTable — pricing-page feature comparison grid with section dividers.
 */
function FeatureComparisonTable({
  columns = [],
  rows = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      overflow: 'hidden',
      ...style
    }
  }, rows.map((row, i) => row.section ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 'var(--space-md) var(--space-lg)',
      fontSize: 'var(--text-micro-uppercase-size)',
      fontWeight: 'var(--text-micro-uppercase-weight)',
      letterSpacing: 'var(--text-micro-uppercase-ls)',
      textTransform: 'uppercase',
      color: 'var(--color-steel)',
      background: 'var(--color-surface-soft)'
    }
  }, row.section) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: `2fr repeat(${columns.length}, 1fr)`,
      padding: 'var(--space-md) var(--space-lg)',
      borderBottom: '1px solid var(--color-hairline-soft)',
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-ink)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, row.label), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col,
    style: {
      textAlign: 'center',
      color: row[col] ? 'var(--color-brand-green-deep)' : 'var(--color-hairline)'
    }
  }, row[col] === true ? '✓' : row[col] || '—')))));
}
const Docs = {
  SidebarNav,
  TocList,
  PropertyRow,
  FeatureComparisonTable
};
Object.assign(__ds_scope, { SidebarNav, TocList, PropertyRow, FeatureComparisonTable, Docs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/docs/Docs.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchPill — documentation top-bar search affordance.
 */
function SearchPill({
  placeholder = 'Search...',
  icon = null,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: '36px',
      background: 'var(--color-surface)',
      color: 'var(--color-steel)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '0 12px',
      fontSize: 'var(--text-body-sm-size)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), icon, /*#__PURE__*/React.createElement("span", null, placeholder));
}
Object.assign(__ds_scope, { SearchPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * TextInput — standard form field. Focus uses the brand mint as the activation signal.
 */
function TextInput({
  label,
  required = false,
  placeholder,
  defaultValue = '',
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-micro-uppercase-size)',
      fontWeight: 'var(--text-micro-uppercase-weight)',
      letterSpacing: 'var(--text-micro-uppercase-ls)',
      textTransform: 'uppercase',
      color: 'var(--color-steel)',
      display: 'flex',
      gap: 6
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand-error)'
    }
  }, "Required")), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    defaultValue: defaultValue,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      height: '40px',
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: focused ? '2px solid var(--color-brand-green)' : '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: focused ? '11px 15px' : '12px 16px',
      fontSize: 'var(--text-body-sm-size)',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/hero/Hero.jsx
try { (() => {
/**
 * HeroSky — homepage hero: atmospheric sky-blue to cream gradient, centered content.
 * No cloud illustration asset was provided; the gradient itself carries the atmosphere.
 */
function HeroSky({
  eyebrow,
  headline,
  subtitle,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg, var(--color-hero-sky-from) 0%, var(--color-hero-sky-to) 100%)',
      padding: 'var(--space-hero) var(--space-xxl)',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 500,
      color: 'var(--color-slate)',
      marginBottom: 16
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-hero-display-size)',
      fontWeight: 'var(--text-hero-display-weight)',
      lineHeight: 'var(--text-hero-display-lh)',
      letterSpacing: 'var(--text-hero-display-ls)',
      color: 'var(--color-ink)'
    }
  }, headline), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      margin: '20px auto 0',
      fontSize: 'var(--text-subtitle-size)',
      lineHeight: 'var(--text-subtitle-lh)',
      color: 'var(--color-slate)'
    }
  }, subtitle), children);
}

/**
 * HeroDark — startups page hero: dark teal-to-mint diagonal gradient, left-aligned content.
 * No rocket-launch illustration asset was provided; layout leaves room for one on the right.
 */
function HeroDark({
  headline,
  subtitle,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, var(--color-hero-dark-from) 0%, var(--color-hero-dark-to) 100%)',
      padding: 'var(--space-hero) var(--space-xxl)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-hero-display-size)',
      fontWeight: 'var(--text-hero-display-weight)',
      lineHeight: 'var(--text-hero-display-lh)',
      letterSpacing: 'var(--text-hero-display-ls)',
      color: 'var(--color-on-dark)'
    }
  }, headline), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480,
      margin: '20px 0 0',
      fontSize: 'var(--text-subtitle-size)',
      lineHeight: 'var(--text-subtitle-lh)',
      color: 'var(--color-on-dark-muted)'
    }
  }, subtitle), children), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 200px',
      height: 200,
      borderRadius: 'var(--radius-xxl)',
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-on-dark-muted)',
      fontSize: 'var(--text-caption-size)',
      textAlign: 'center',
      padding: 16
    }
  }, "Illustration placeholder \u2014 rocket-launch artwork not provided"));
}

/**
 * ProductMockup — code-editor mockup frame with deep diffuse shadow (the brand's one dimensional moment).
 */
function ProductMockup({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-hairline-soft)',
      boxShadow: 'var(--shadow-3)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children);
}
const Hero = {
  HeroSky,
  HeroDark,
  ProductMockup
};
Object.assign(__ds_scope, { HeroSky, HeroDark, ProductMockup, Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/Hero.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navigation.jsx
try { (() => {
const {
  useState
} = React;
/**
 * MarketingNav — sticky white top nav: wordmark + link list + right-side CTAs.
 */
function MarketingNav({
  links = ['Solutions', 'Pricing', 'Customers', 'Documentation', 'Changelog'],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64,
      padding: '0 var(--space-xxl)',
      background: 'var(--color-canvas)',
      borderBottom: '1px solid var(--color-hairline-soft)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, "Mintlify"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-steel)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 500,
      color: 'var(--color-ink)'
    }
  }, "Talk to sales"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: 'none',
      borderRadius: 'var(--radius-full)',
      padding: '10px 20px',
      fontSize: 'var(--text-button-md-size)',
      fontWeight: 'var(--text-button-md-weight)'
    }
  }, "Get Started")));
}

/**
 * DocsNav — compressed documentation top nav with center search-pill.
 */
function DocsNav({
  links = ['Documentation', 'Guides', 'API Reference', 'Changelog'],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 56,
      padding: '0 var(--space-xl)',
      background: 'var(--color-canvas)',
      borderBottom: '1px solid var(--color-hairline-soft)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, "Mintlify"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '0 12px',
      color: 'var(--color-steel)',
      fontSize: 'var(--text-body-sm-size)',
      flex: '0 1 320px'
    }
  }, "Search..."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-steel)'
    }
  }, l)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--color-brand-green)',
      color: 'var(--color-primary)',
      border: 'none',
      borderRadius: 'var(--radius-full)',
      padding: '10px 20px',
      fontSize: 'var(--text-button-md-size)',
      fontWeight: 'var(--text-button-md-weight)'
    }
  }, "Get started")));
}

/**
 * FooterRegion — multi-column site footer with brand mark + 4 link groups.
 */
function FooterRegion({
  groups = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)',
      borderTop: '1px solid var(--color-hairline)',
      padding: 'var(--space-section) var(--space-xxl)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      gap: 60,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--color-ink)',
      flex: '0 0 160px'
    }
  }, "Mintlify"), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 500,
      color: 'var(--color-ink)'
    }
  }, g.title), g.links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-steel)'
    }
  }, l)))));
}

/**
 * FaqAccordionItem — expandable FAQ panel item with chevron.
 */
function FaqAccordionItem({
  question,
  answer,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      background: 'var(--color-canvas)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-xl)',
      border: '1px solid var(--color-hairline-soft)',
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-5-size)',
      fontWeight: 'var(--text-heading-5-weight)',
      color: 'var(--color-ink)'
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-steel)',
      fontSize: 16,
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 180ms ease'
    }
  }, "\u2304")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--color-steel)',
      lineHeight: 'var(--text-body-md-lh)'
    }
  }, answer));
}

/**
 * LogoWall — 6-up customer wordmark trust row.
 */
function LogoWall({
  names = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${names.length}, 1fr)`,
      ...style
    }
  }, names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-lg)',
      fontSize: 'var(--text-body-md-medium-size)',
      fontWeight: 'var(--text-body-md-medium-weight)',
      color: 'var(--color-steel)',
      fontFamily: 'var(--font-sans)'
    }
  }, n)));
}
const Navigation = {
  MarketingNav,
  DocsNav,
  FooterRegion,
  FaqAccordionItem,
  LogoWall
};
Object.assign(__ds_scope, { MarketingNav, DocsNav, FooterRegion, FaqAccordionItem, LogoWall, Navigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navigation.jsx", error: String((e && e.message) || e) }); }

// components/tabs/Tabs.jsx
try { (() => {
const {
  useState
} = React;
/**
 * SegmentedTabs — underline-style tab nav (docs Tabs component: "First tab / Second tab / Third tab").
 */
function SegmentedTabs({
  tabs = [],
  defaultIndex = 0,
  onChange,
  style
}) {
  const [active, setActive] = useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--color-hairline)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => {
      setActive(i);
      onChange && onChange(i);
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 'var(--space-sm) var(--space-md)',
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 'var(--text-body-sm-medium-weight)',
      color: active === i ? 'var(--color-ink)' : 'var(--color-steel)',
      borderBottom: active === i ? '2px solid var(--color-ink)' : '2px solid transparent',
      marginBottom: '-1px'
    }
  }, t)));
}

/**
 * PillTabs — pill-style tab nav (pricing page top: "Pricing / Roadmap").
 */
function PillTabs({
  tabs = [],
  defaultIndex = 0,
  onChange,
  style
}) {
  const [active, setActive] = useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, tabs.map((t, i) => {
    const isActive = active === i;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => {
        setActive(i);
        onChange && onChange(i);
      },
      style: {
        padding: '8px 16px',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-button-md-size)',
        fontWeight: 'var(--text-button-md-weight)',
        cursor: 'pointer',
        background: isActive ? 'var(--color-primary)' : 'var(--color-canvas)',
        color: isActive ? 'var(--color-on-primary)' : 'var(--color-steel)',
        border: isActive ? 'none' : '1px solid var(--color-hairline)'
      }
    }, t);
  }));
}

/**
 * MonthlyYearlyToggle — two-state pill toggle with a sliding white thumb + discount badge.
 */
function MonthlyYearlyToggle({
  defaultYearly = false,
  onChange,
  style
}) {
  const [yearly, setYearly] = useState(defaultYearly);
  const toggle = () => {
    const v = !yearly;
    setYearly(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: toggle,
    style: {
      position: 'relative',
      width: 132,
      height: 36,
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-full)',
      padding: 4,
      cursor: 'pointer',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 4,
      left: yearly ? '50%' : 4,
      width: 'calc(50% - 4px)',
      height: 28,
      background: 'var(--color-canvas)',
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-1)',
      transition: 'left 180ms ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 500,
      color: !yearly ? 'var(--color-ink)' : 'var(--color-steel)',
      lineHeight: '28px'
    }
  }, "Monthly"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 500,
      color: yearly ? 'var(--color-ink)' : 'var(--color-steel)',
      lineHeight: '28px'
    }
  }, "Annual"))));
}
const Tabs = {
  SegmentedTabs,
  PillTabs,
  MonthlyYearlyToggle
};
Object.assign(__ds_scope, { SegmentedTabs, PillTabs, MonthlyYearlyToggle, Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/DocsPage.jsx
try { (() => {
const {
  DocsNav,
  SidebarNav,
  TocList,
  PropertyRow,
  SegmentedTabs,
  InlineCode,
  Badge
} = window.MintlifyDesignSystem_308d62;
function DocsPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement(DocsNav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      maxWidth: 1280,
      margin: '0 auto',
      padding: 'var(--space-xxl) var(--space-xxl)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    sections: [{
      title: 'Get Started',
      items: ['Introduction', 'Quickstart']
    }, {
      title: 'Components',
      items: ['Accordion', 'Card', {
        label: 'Tabs',
        active: true
      }, 'Tooltip']
    }, {
      title: 'Primitives',
      items: ['Callout', 'CodeGroup']
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-3-size)',
      fontWeight: 'var(--text-heading-3-weight)',
      color: 'var(--color-ink)',
      marginBottom: 8
    }
  }, "Tabs"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-md-size)',
      lineHeight: 'var(--text-body-md-lh)',
      color: 'var(--color-charcoal)',
      marginTop: 0
    }
  }, "The ", /*#__PURE__*/React.createElement(InlineCode, null, "<Tabs>"), " component groups related content into switchable panels. Use it to present alternative code samples, platform-specific instructions, or comparison content."), /*#__PURE__*/React.createElement(SegmentedTabs, {
    tabs: ['First tab', 'Second tab', 'Third tab'],
    style: {
      margin: '24px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-code)',
      color: 'var(--color-on-dark)',
      borderRadius: 8,
      padding: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      marginBottom: 32
    }
  }, '<Tabs defaultIndex={0}>\n  <Tab title="First tab">Content</Tab>\n</Tabs>'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-5-size)',
      fontWeight: 'var(--text-heading-5-weight)',
      color: 'var(--color-ink)',
      marginBottom: 8
    }
  }, "Props"), /*#__PURE__*/React.createElement(PropertyRow, {
    name: "defaultIndex",
    type: "number",
    description: "Index of the tab shown first. Defaults to 0 when omitted."
  }), /*#__PURE__*/React.createElement(PropertyRow, {
    name: "titles",
    type: "string[]",
    required: true,
    description: "Array of tab titles, rendered in order."
  }), /*#__PURE__*/React.createElement(PropertyRow, {
    name: "onChange",
    type: "(index: number) => void",
    description: "Called with the new active index whenever the user switches tabs."
  })), /*#__PURE__*/React.createElement(TocList, {
    items: ['Overview', 'Props', 'Examples'],
    activeIndex: 1
  })));
}
window.DocsPage = DocsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/DocsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Home.jsx
try { (() => {
const {
  MarketingNav,
  HeroSky,
  ProductMockup,
  LogoWall,
  Card,
  Button,
  Badge,
  FooterRegion
} = window.MintlifyDesignSystem_308d62;
function Home() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement(MarketingNav, null), /*#__PURE__*/React.createElement(HeroSky, {
    eyebrow: "Mintlify",
    headline: "The intelligent Knowledge Platform",
    subtitle: "Write your docs once. Mintlify renders them fast, keeps them searchable, and makes them legible to AI agents and humans alike."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent-green"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Talk to us")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '56px auto 0'
    }
  }, /*#__PURE__*/React.createElement(ProductMockup, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      borderRight: '1px solid var(--color-hairline-soft)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-micro-uppercase-size)',
      fontWeight: 600,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: 'var(--color-steel)',
      marginBottom: 8
    }
  }, "Components"), ['Accordion', 'Card', 'Tabs', 'Tooltip'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      padding: '6px 8px',
      borderRadius: 6,
      fontSize: 13,
      background: i === 2 ? 'var(--color-surface)' : 'transparent',
      color: i === 2 ? 'var(--color-ink)' : 'var(--color-steel)',
      fontWeight: i === 2 ? 500 : 400
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 600,
      marginBottom: 12,
      color: 'var(--color-ink)'
    }
  }, "Tabs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--color-steel)',
      lineHeight: 1.5,
      marginBottom: 16
    }
  }, "Group related content into switchable panels."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-code)',
      color: 'var(--color-on-dark)',
      borderRadius: 8,
      padding: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 14
    }
  }, '<Tabs defaultIndex={0}>')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    names: ['Anthropic', 'Cognition', 'Vercel', 'react', 'Lovable'],
    style: {
      opacity: 0.8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-section-lg) var(--space-xxl)',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--text-display-lg-size)',
      fontWeight: 'var(--text-display-lg-weight)',
      letterSpacing: 'var(--text-display-lg-ls)',
      margin: '0 0 48px',
      color: 'var(--color-ink)'
    }
  }, "Built for the intelligence age"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, [['Instant search', 'Every page indexed and ranked the moment you publish.'], ['AI-ready by default', 'Structured content your product\u2019s own agent can read.'], ['Analytics built in', 'See what people search for and where they get stuck.']].map(([title, desc]) => /*#__PURE__*/React.createElement(Card, {
    variant: "base",
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-brand-green-deep)',
      fontSize: 20,
      marginBottom: 12
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-5-size)',
      fontWeight: 'var(--text-heading-5-weight)',
      marginBottom: 8,
      color: 'var(--color-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-steel)',
      lineHeight: 1.5
    }
  }, desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-xxl) var(--space-section-lg)',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "testimonial"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-3-size)',
      fontWeight: 600,
      lineHeight: 1.3,
      maxWidth: 640
    }
  }, "\"Every YC batch we consistently see the top performing startups use Mintlify to build their docs.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 500
    }
  }, "\u2014 Cursor"))), /*#__PURE__*/React.createElement(FooterRegion, {
    groups: [{
      title: 'Explore',
      links: ['Pricing', 'Customers', 'Changelog']
    }, {
      title: 'Resources',
      links: ['Guides', 'API Reference', 'Community']
    }, {
      title: 'Company',
      links: ['About', 'Careers', 'Blog']
    }, {
      title: 'Legal',
      links: ['Privacy', 'Terms']
    }]
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Pricing.jsx
try { (() => {
const {
  MarketingNav,
  PillTabs,
  MonthlyYearlyToggle,
  Card,
  Badge,
  Button,
  FeatureComparisonTable,
  FaqAccordionItem,
  FooterRegion
} = window.MintlifyDesignSystem_308d62;
function Pricing() {
  const [yearly, setYearly] = React.useState(false);
  const tiers = [{
    name: 'Free',
    price: '$0',
    desc: 'For individuals trying Mintlify out.',
    features: ['1 seat', 'Community support', 'Mintlify subdomain'],
    variant: 'pricing',
    cta: 'secondary'
  }, {
    name: 'Lift Off',
    price: yearly ? '$120' : '$150',
    desc: 'For teams shipping serious docs.',
    features: ['Unlimited seats', 'Custom domain', 'Priority support', 'Analytics'],
    variant: 'pricing-featured',
    cta: 'accent-green',
    featured: true
  }, {
    name: 'Custom',
    price: 'Let\u2019s talk',
    desc: 'For orgs with compliance & scale needs.',
    features: ['SSO/SAML', 'Dedicated support', 'Custom contracts'],
    variant: 'pricing',
    cta: 'secondary'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement(MarketingNav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-section) var(--space-xxl) 0',
      maxWidth: 1280,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(PillTabs, {
    tabs: ['Pricing', 'Roadmap'],
    style: {
      justifyContent: 'center',
      display: 'inline-flex',
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-heading-1-size)',
      fontWeight: 'var(--text-heading-1-weight)',
      letterSpacing: 'var(--text-heading-1-ls)',
      margin: '0 0 32px',
      color: 'var(--color-ink)'
    }
  }, "Pricing on your terms"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(MonthlyYearlyToggle, {
    onChange: setYearly
  }), /*#__PURE__*/React.createElement(Badge, {
    variant: "discount"
  }, "Save 20%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-xxl) var(--space-section)',
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(Card, {
    variant: t.variant,
    key: t.name
  }, t.featured && /*#__PURE__*/React.createElement(Badge, {
    variant: "tag",
    style: {
      marginBottom: 12
    }
  }, "Featured"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-3-size)',
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-display-lg-size)',
      fontWeight: 600,
      margin: '8px 0 4px',
      color: 'var(--color-ink)'
    }
  }, t.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-steel)',
      marginBottom: 20
    }
  }, t.desc), /*#__PURE__*/React.createElement(Button, {
    variant: t.cta,
    style: {
      width: '100%',
      marginBottom: 20
    }
  }, "Get started"), t.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-ink)',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand-green-deep)'
    }
  }, "\u2713"), f))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-xxl) var(--space-section)',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(FeatureComparisonTable, {
    columns: ['Free', 'Lift Off', 'Custom'],
    rows: [{
      section: 'Core'
    }, {
      label: 'Custom domain',
      Free: false,
      'Lift Off': true,
      Custom: true
    }, {
      label: 'Seats',
      Free: '1',
      'Lift Off': 'Unlimited',
      Custom: 'Unlimited'
    }, {
      section: 'Support'
    }, {
      label: 'Community support',
      Free: true,
      'Lift Off': true,
      Custom: true
    }, {
      label: 'Priority support',
      Free: false,
      'Lift Off': true,
      Custom: true
    }, {
      label: 'Dedicated support',
      Free: false,
      'Lift Off': false,
      Custom: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-xxl) var(--space-section-lg)',
      maxWidth: 800,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FaqAccordionItem, {
    question: "Can I change plans later?",
    answer: "Yes \u2014 upgrade or downgrade anytime; billing prorates automatically.",
    defaultOpen: true
  }), /*#__PURE__*/React.createElement(FaqAccordionItem, {
    question: "Do you offer startup discounts?",
    answer: "Yes, see the Mintlify startup program for eligibility and perks."
  })), /*#__PURE__*/React.createElement(FooterRegion, {
    groups: [{
      title: 'Explore',
      links: ['Pricing', 'Customers', 'Changelog']
    }, {
      title: 'Resources',
      links: ['Guides', 'API Reference']
    }, {
      title: 'Company',
      links: ['About', 'Careers']
    }, {
      title: 'Legal',
      links: ['Privacy', 'Terms']
    }]
  }));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Startups.jsx
try { (() => {
const {
  MarketingNav,
  HeroDark,
  Card,
  Button,
  FooterRegion
} = window.MintlifyDesignSystem_308d62;
function Startups() {
  const perks = [['Discounts and credits', 'Up to 12 months free on the Lift Off plan.'], ['Priority support', 'A direct line to the Mintlify team.'], ['Startup pack', 'Templates and guides to launch docs fast.'], ['Founder community', 'Connect with other founders shipping docs.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement(MarketingNav, null), /*#__PURE__*/React.createElement(HeroDark, {
    headline: "Apply to the Mintlify startup program",
    subtitle: "Early-stage teams get discounted access to Mintlify's full platform, plus perks to help you ship better docs faster."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark"
  }, "Apply now"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: 'var(--color-on-dark)'
    }
  }, "Learn more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-section) var(--space-xxl)',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-heading-2-size)',
      fontWeight: 'var(--text-heading-2-weight)',
      letterSpacing: 'var(--text-heading-2-ls)',
      textAlign: 'center',
      margin: '0 0 40px',
      color: 'var(--color-ink)'
    }
  }, "Perks for early-stage teams"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, perks.map(([title, desc]) => /*#__PURE__*/React.createElement(Card, {
    variant: "base",
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-brand-green-deep)',
      fontSize: 20,
      marginBottom: 12
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-5-size)',
      fontWeight: 'var(--text-heading-5-weight)',
      marginBottom: 8,
      color: 'var(--color-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: 'var(--color-steel)',
      lineHeight: 1.5
    }
  }, desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-xxl) var(--space-section-lg)',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "testimonial"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-heading-3-size)',
      fontWeight: 600,
      lineHeight: 1.3,
      maxWidth: 640
    }
  }, "\"Every YC batch we consistently see the top performing startups use Mintlify to build their docs.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 'var(--text-body-sm-medium-size)',
      fontWeight: 500
    }
  }, "\u2014 Cursor, Founder"))), /*#__PURE__*/React.createElement(FooterRegion, {
    groups: [{
      title: 'Explore',
      links: ['Pricing', 'Customers', 'Changelog']
    }, {
      title: 'Resources',
      links: ['Guides', 'API Reference']
    }, {
      title: 'Company',
      links: ['About', 'Careers']
    }, {
      title: 'Legal',
      links: ['Privacy', 'Terms']
    }]
  }));
}
window.Startups = Startups;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Startups.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.InlineCode = __ds_scope.InlineCode;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.TocList = __ds_scope.TocList;

__ds_ns.PropertyRow = __ds_scope.PropertyRow;

__ds_ns.FeatureComparisonTable = __ds_scope.FeatureComparisonTable;

__ds_ns.Docs = __ds_scope.Docs;

__ds_ns.SearchPill = __ds_scope.SearchPill;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.HeroSky = __ds_scope.HeroSky;

__ds_ns.HeroDark = __ds_scope.HeroDark;

__ds_ns.ProductMockup = __ds_scope.ProductMockup;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.MarketingNav = __ds_scope.MarketingNav;

__ds_ns.DocsNav = __ds_scope.DocsNav;

__ds_ns.FooterRegion = __ds_scope.FooterRegion;

__ds_ns.FaqAccordionItem = __ds_scope.FaqAccordionItem;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.Navigation = __ds_scope.Navigation;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.PillTabs = __ds_scope.PillTabs;

__ds_ns.MonthlyYearlyToggle = __ds_scope.MonthlyYearlyToggle;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
