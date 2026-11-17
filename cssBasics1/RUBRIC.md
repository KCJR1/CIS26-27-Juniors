# Grading Rubric: Styling a Cybersecurity Page with External CSS

**Total: 100 points** (+ up to 5 points extra credit)

| Criteria | Exemplary (full points) | Proficient | Developing | Missing (0) | Points |
|---|---|---|---|---|---|
| **External Stylesheet** | `<link>` is in the `<head>`, `href` matches the file name, and all styles load. | Linked, but placed outside the `<head>` or has a minor attribute error. | Link exists but styles do not load (wrong path or name). | No external stylesheet, or CSS is written inside the HTML. | **/5** |
| **Universal Selector** | `*` reset removes default margin and padding and sets `box-sizing`. | Reset present but missing one property. | `*` used but does not function as a reset. | Not used. | **/10** |
| **Element Selectors** | At least 5 element selectors (e.g., `body`, `main`, `p`, `table`, `footer`) that clearly affect the page. | 3–4 element selectors. | 1–2 element selectors. | None. | **/10** |
| **Class Selectors** | `.card`, `.tagline`, `.tip`, and `.warning` are all styled correctly, and `.card` visibly applies to every section. | 3 of the 4 classes styled. | 1–2 classes styled, or syntax errors (missing `.`). | None. | **/15** |
| **ID Selector** | `#page-header` is styled correctly and visibly changes only the header. | ID selector works with a minor issue. | ID selector attempted but uses wrong syntax or wrong ID name. | None. | **/10** |
| **Descendant Selector** | `nav a` styles only the navigation links (Learn More links unaffected); a second descendant selector is also used. | `nav a` works correctly. | Descendant selector attempted but targets the wrong elements. | None. | **/10** |
| **Pseudo-class Selector** | `nav a:hover` produces a clear, readable hover effect. | Hover works but is hard to see or affects text readability. | `:hover` attempted but does not work. | None. | **/10** |
| **Multiple Selector** | `h1, h2` (and at least one other grouped selector) apply shared styles correctly. | One working multiple selector. | Attempted, but missing comma or incorrect. | None. | **/10** |
| **Code Quality & Customization** | CSS is indented consistently, every section is commented, passes the W3C validator, and at least 3 colors are changed with readable contrast. | Minor indentation/comment gaps, or 1–2 validator errors, or only 1–2 colors changed. | Messy formatting, few comments, several validator errors, or no colors changed. | Code is unreadable or does not validate at all. | **/10** |
| **Published & Linked** | Page and stylesheet work on GitHub Pages, and the page is linked from `index.html`. | Published but not linked from `index.html` (or vice versa). | Files pushed but page does not load correctly online. | Not published. | **/5** |
| **Reflection Questions** | All 3 questions answered thoughtfully in the CSS comments with examples from the project. | All 3 answered but brief or missing examples. | 1–2 questions answered. | Not answered. | **/5** |
| **TOTAL** | | | | | **/100** |

---

## Extra Credit (up to +5)

| Challenge | Points |
|---|---|
| `tr:hover` table row highlight | +1 |
| `.card h2` bottom border under section headings | +1 |
| `#resources a` styled with its own hover color | +1 |
| `:visited` pseudo-class used | +1 |
| Additional creative styling that uses a new selector or property not covered in the steps | +1 |

---

## Quick Check for Grading

When grading, open the student's GitHub Pages site and verify:

1. The page loads with styling from the home page link.
2. Hovering over the navigation buttons changes their color.
3. The "Learn More" links look different from the navigation links (proves the descendant selector).
4. Then open `cybersecurity.css` in the repository and check for each selector type and the reflection answers.
