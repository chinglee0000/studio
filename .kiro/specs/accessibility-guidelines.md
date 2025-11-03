# Accessibility Guidelines

## Overview
These guidelines ensure the Twin3 platform is accessible to all users, including those with disabilities. We follow WCAG 2.1 Level AA standards as a minimum baseline.

## Core Principles (POUR)

### Perceivable
Information and UI components must be presentable to users in ways they can perceive.

### Operable
UI components and navigation must be operable by all users.

### Understandable
Information and UI operation must be understandable.

### Robust
Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.

---

## Color & Contrast

### Minimum Contrast Ratios (WCAG AA)

**Normal Text (< 18pt):**
- Minimum: 4.5:1
- Enhanced (AAA): 7:1

**Large Text (≥ 18pt or 14pt bold):**
- Minimum: 3:1
- Enhanced (AAA): 4.5:1

**UI Components & Graphics:**
- Minimum: 3:1

### Testing Contrast
```bash
# Use browser DevTools or online tools
- Chrome DevTools: Inspect > Accessibility
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
```

### Color Usage

**✅ Do:**
- Use color AND another indicator (icon, text, pattern)
- Provide text labels for color-coded information
- Test in grayscale mode

**❌ Don't:**
- Rely on color alone to convey information
- Use color combinations that are problematic for colorblind users (red/green)

**Example:**
```tsx
// ✅ Good: Color + icon + text
<div className="flex items-center gap-2 text-red-600">
  <AlertCircle className="h-4 w-4" />
  <span>Error: Invalid input</span>
</div>

// ❌ Bad: Color only
<div className="text-red-600">
  Invalid input
</div>
```

---

## Keyboard Navigation

### Focus Management

**All interactive elements must be keyboard accessible:**
- Links
- Buttons
- Form inputs
- Custom controls

**Focus Indicators:**
```css
/* Visible focus ring */
:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}
```

**Tab Order:**
- Follow logical reading order (left-to-right, top-to-bottom)
- Use `tabindex="0"` for custom interactive elements
- Use `tabindex="-1"` for programmatically focusable elements
- Never use positive `tabindex` values

**Example:**
```tsx
// ✅ Good: Natural tab order
<form>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>

// ❌ Bad: Disrupted tab order
<form>
  <input type="text" name="name" tabindex="3" />
  <input type="email" name="email" tabindex="1" />
  <button type="submit" tabindex="2">Submit</button>
</form>
```

### Keyboard Shortcuts

**Standard Shortcuts:**
- `Tab`: Move focus forward
- `Shift + Tab`: Move focus backward
- `Enter`: Activate button/link
- `Space`: Activate button, toggle checkbox
- `Esc`: Close dialog/modal
- `Arrow keys`: Navigate within components (tabs, menus, etc.)

**Custom Shortcuts:**
- Document all custom shortcuts
- Provide a way to view shortcuts (help dialog)
- Allow users to disable shortcuts if needed

---

## Screen Readers

### Semantic HTML

**Use appropriate HTML elements:**
```tsx
// ✅ Good: Semantic HTML
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

<button onClick={handleClick}>Submit</button>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

// ❌ Bad: Non-semantic divs
<div className="nav">
  <div className="link" onClick={goHome}>Home</div>
</div>

<div onClick={handleClick}>Submit</div>
```

### ARIA Labels & Roles

**When to use ARIA:**
- When semantic HTML isn't sufficient
- For custom interactive components
- To provide additional context

**Common ARIA Attributes:**

**aria-label:**
```tsx
<button aria-label="Close dialog">
  <X className="h-4 w-4" />
</button>
```

**aria-labelledby:**
```tsx
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Action</h2>
</div>
```

**aria-describedby:**
```tsx
<input
  type="email"
  aria-describedby="email-help"
/>
<span id="email-help">We'll never share your email</span>
```

**aria-live:**
```tsx
// For dynamic content updates
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

**aria-expanded:**
```tsx
<button
  aria-expanded={isOpen}
  aria-controls="dropdown-menu"
>
  Menu
</button>
```

**aria-hidden:**
```tsx
// Hide decorative elements from screen readers
<span aria-hidden="true">★</span>
```

### ARIA Roles

**Common Roles:**
- `button`: Interactive button
- `dialog`: Modal dialog
- `navigation`: Navigation section
- `main`: Main content
- `complementary`: Sidebar content
- `search`: Search form
- `alert`: Important message
- `status`: Status update

**Example:**
```tsx
<div role="alert" className="bg-red-100 p-4">
  <p>Error: Please fix the following issues</p>
</div>
```

---

## Touch Targets

### Minimum Size
**44x44px minimum** for all interactive elements (WCAG 2.1 Level AAA)

**Implementation:**
```tsx
// ✅ Good: Adequate touch target
<button className="min-h-[44px] min-w-[44px] p-2">
  <Icon className="h-4 w-4" />
</button>

// ❌ Bad: Too small
<button className="p-1">
  <Icon className="h-4 w-4" />
</button>
```

### Spacing
- Minimum 8px spacing between touch targets
- Use padding to increase touch area without increasing visual size

**Example:**
```tsx
// Visual size: 24px, Touch target: 44px
<button className="p-2.5">
  <Icon className="h-6 w-6" />
</button>
```

---

## Forms

### Labels
**Every input must have a label:**
```tsx
// ✅ Good: Visible label
<label htmlFor="email">Email</label>
<input type="email" id="email" name="email" />

// ✅ Good: aria-label for icon-only inputs
<input
  type="search"
  aria-label="Search quests"
  placeholder="Search..."
/>

// ❌ Bad: No label
<input type="email" placeholder="Email" />
```

### Error Messages
**Associate errors with inputs:**
```tsx
<label htmlFor="email">Email</label>
<input
  type="email"
  id="email"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <span id="email-error" role="alert">
    Please enter a valid email
  </span>
)}
```

### Required Fields
```tsx
<label htmlFor="name">
  Name <span aria-label="required">*</span>
</label>
<input
  type="text"
  id="name"
  required
  aria-required="true"
/>
```

### Field Instructions
```tsx
<label htmlFor="password">Password</label>
<input
  type="password"
  id="password"
  aria-describedby="password-requirements"
/>
<div id="password-requirements">
  Must be at least 8 characters with 1 number
</div>
```

---

## Images & Media

### Alt Text

**Informative Images:**
```tsx
<img
  src="/chart.png"
  alt="Bar chart showing 50% increase in user engagement"
/>
```

**Decorative Images:**
```tsx
<img src="/decoration.png" alt="" />
// or
<img src="/decoration.png" role="presentation" />
```

**Complex Images:**
```tsx
<figure>
  <img
    src="/complex-chart.png"
    alt="Detailed sales data"
    aria-describedby="chart-description"
  />
  <figcaption id="chart-description">
    Sales increased from $10k in January to $50k in December,
    with the largest jump occurring in Q3.
  </figcaption>
</figure>
```

### Icons
```tsx
// Decorative icon (with text)
<button>
  <Save className="h-4 w-4" aria-hidden="true" />
  <span>Save</span>
</button>

// Functional icon (no text)
<button aria-label="Save document">
  <Save className="h-4 w-4" />
</button>
```

### Video & Audio
- Provide captions for videos
- Provide transcripts for audio
- Ensure media players are keyboard accessible
- Provide audio descriptions for important visual content

---

## Motion & Animation

### Reduced Motion
**Respect user preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**In React:**
```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
>
```

### Animation Guidelines
- Avoid flashing content (< 3 flashes per second)
- Provide pause/stop controls for auto-playing content
- Don't use animation as the only way to convey information

---

## Responsive & Mobile

### Zoom & Reflow
- Support 200% zoom without horizontal scrolling
- Content must reflow at different viewport sizes
- Don't disable pinch-to-zoom

```html
<!-- ✅ Good: Allows zooming -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- ❌ Bad: Prevents zooming -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

### Orientation
- Support both portrait and landscape
- Don't lock orientation unless essential
- Ensure content is accessible in both orientations

---

## Testing Checklist

### Automated Testing
- [ ] Run axe DevTools
- [ ] Run Lighthouse accessibility audit
- [ ] Check HTML validation
- [ ] Test color contrast

### Manual Testing
- [ ] Navigate entire site with keyboard only
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Test with 200% zoom
- [ ] Test in high contrast mode
- [ ] Test with reduced motion enabled
- [ ] Test on mobile devices
- [ ] Test with different input methods (mouse, keyboard, touch)

### Screen Reader Testing

**Windows:**
- NVDA (free)
- JAWS (paid)

**macOS:**
- VoiceOver (built-in)

**Mobile:**
- iOS VoiceOver
- Android TalkBack

**Basic Screen Reader Commands:**

**NVDA/JAWS:**
- `Insert + Down Arrow`: Read next item
- `H`: Next heading
- `B`: Next button
- `F`: Next form field
- `Insert + F7`: List all elements

**VoiceOver (Mac):**
- `VO + Right Arrow`: Next item
- `VO + Command + H`: Next heading
- `VO + Space`: Activate element

---

## Common Patterns

### Modal Dialog
```tsx
<Dialog
  open={isOpen}
  onOpenChange={setIsOpen}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <DialogContent>
    <DialogHeader>
      <DialogTitle id="dialog-title">
        Confirm Action
      </DialogTitle>
      <DialogDescription id="dialog-description">
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleConfirm}>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Tabs
```tsx
<Tabs defaultValue="tab1">
  <TabsList role="tablist">
    <TabsTrigger value="tab1" role="tab" aria-selected={true}>
      Tab 1
    </TabsTrigger>
    <TabsTrigger value="tab2" role="tab" aria-selected={false}>
      Tab 2
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1" role="tabpanel">
    Content 1
  </TabsContent>
  <TabsContent value="tab2" role="tabpanel">
    Content 2
  </TabsContent>
</Tabs>
```

### Dropdown Menu
```tsx
<DropdownMenu>
  <DropdownMenuTrigger aria-haspopup="true" aria-expanded={isOpen}>
    Menu
  </DropdownMenuTrigger>
  <DropdownMenuContent role="menu">
    <DropdownMenuItem role="menuitem">
      Option 1
    </DropdownMenuItem>
    <DropdownMenuItem role="menuitem">
      Option 2
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Resources

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [NVDA Screen Reader](https://www.nvaccess.org/)

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)

### Training
- [Web Accessibility by Google (Udacity)](https://www.udacity.com/course/web-accessibility--ud891)
- [Deque University](https://dequeuniversity.com/)

---

## Maintenance

### Regular Audits
- Run automated tests on every PR
- Manual testing quarterly
- User testing with people with disabilities annually

### Staying Updated
- Follow WCAG updates
- Monitor browser support for accessibility features
- Stay informed about assistive technology changes

### Reporting Issues
- Create accessibility issues in issue tracker
- Tag with `a11y` label
- Prioritize based on severity (blocker, critical, major, minor)
