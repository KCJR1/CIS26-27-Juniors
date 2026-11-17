# Styling a Cybersecurity Page with External CSS

**Course:** Computer & Information Science (Grade 11)
**Estimated time:** 1–2 class periods
**Files you are given:** `cybersecurity.html` (finished content, no styling) and `cybersecurity.css` (empty stylesheet with step comments)

Until now, your web pages have been plain HTML. In this project you will take a finished page about cybersecurity and give it a professional look using an **external CSS file**. You will not change the content of the HTML page. Almost all of your work happens in `cybersecurity.css`.

---

## Project Objectives

By the end of this project, you will be able to:

1. Explain the difference between **HTML** (structure and content) and **CSS** (presentation and style).
2. Link an **external stylesheet** to an HTML page using the `<link>` element.
3. Write CSS rules using correct syntax: `selector { property: value; }`
4. Use **seven types of CSS selectors**: universal, element, class, ID, descendant, pseudo-class, and multiple (grouped).
5. Explain the difference between a **class** (reusable) and an **ID** (unique to one element).
6. Publish a styled page to GitHub Pages and link it from your home page.

---

## Selector Quick Reference

| Selector Type | Example | What It Selects |
|---|---|---|
| Universal | `*` | Every element on the page |
| Element | `p` | Every `<p>` element |
| Class | `.card` | Every element with `class="card"` |
| ID | `#page-header` | The ONE element with `id="page-header"` |
| Descendant | `nav a` | Every `<a>` that is inside a `<nav>` |
| Pseudo-class | `a:hover` | An `<a>` while the mouse is over it |
| Multiple | `h1, h2` | Every `<h1>` AND every `<h2>` |

**Remember:** a class starts with a **dot** (`.`), an ID starts with a **hash** (`#`). Element selectors have no symbol at all.

---

## Before You Start

1. Download `cybersecurity.html` and `cybersecurity.css`.
2. Place **both files** in the **same folder** as your `index.html` (the root of your GitHub repository).
3. Open `cybersecurity.html` in a browser. It works, but it looks plain. Keep this browser tab open.
4. Open both files in your code editor. Read through the HTML and find the comments that point out the `id` and `class` attributes. You will be targeting those.

> **Testing tip:** After every step, **save** your CSS file and **refresh** the browser. If nothing changes, check your spelling, your curly braces `{ }`, and your semicolons `;`.

---

## Step 1: Link the Stylesheet

In `cybersecurity.html`, find the comment that says `STEP 1` inside the `<head>`. On the blank line below it, add:

```html
<link rel="stylesheet" href="cybersecurity.css">
```

This tells the browser: "Go get the styles from this file." The `href` must match your CSS file name exactly, including capital letters.

**This is the only change you make to the HTML file** (except for your name in the footer).

---

## Step 2: Universal Selector (CSS Reset)

Browsers add their own default spacing to almost everything. A **CSS reset** removes it so *you* are in control. The universal selector `*` targets every element.

In `cybersecurity.css`, under the `STEP 2` comment, add:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Save and refresh.** Your page will look squished and worse. That is expected! You just wiped out the browser's default spacing. You will add your own spacing in the next steps.

---

## Step 3: Element Selector (body)

An **element selector** uses the tag name. Styling `body` affects the whole page because everything is inside it.

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #e9eef3;
    color: #222222;
    line-height: 1.6;
}
```

- `font-family` lists backup fonts in case the first one is not installed.
- `line-height` adds space between lines so text is easier to read.

---

## Step 4: Multiple Selector (Headings)

A **multiple selector** (also called a *grouping selector*) applies the same rules to more than one element. Separate the selectors with a **comma**.

```css
h1, h2 {
    font-family: "Courier New", Courier, monospace;
    color: #0b3d2e;
}
```

Now every `<h1>` and every `<h2>` shares the same "hacker terminal" font and color, with only one rule.

---

## Step 5: ID Selector (Page Header)

Look at the HTML: the `<header>` has `id="page-header"`. An **ID selector** starts with `#` and targets that single element.

```css
#page-header {
    background-color: #0b1f2a;
    color: #ffffff;
    text-align: center;
    padding: 30px 20px;
}
```

`padding: 30px 20px;` means 30 pixels on the top and bottom, 20 pixels on the left and right.

> **Notice:** The sections also have IDs like `id="threats"`. The navigation links use those IDs (`href="#threats"`) to jump down the page. IDs do double duty!

---

## Step 6: More Element Selectors (Layout, Text, Lists, Table)

Now put back some spacing and style the table. Add all of these rules:

```css
main {
    max-width: 900px;
    margin: 20px auto;
    padding: 0 15px;
}

h2 {
    margin-bottom: 10px;
}

p {
    margin-bottom: 12px;
}

ul, ol {
    margin-left: 30px;
    margin-bottom: 12px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
}

th, td {
    border: 1px solid #999999;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #0b3d2e;
    color: #ffffff;
}
```

- `margin: 20px auto;` centers the main content on wide screens.
- `border-collapse: collapse;` merges the double borders in the table into single lines.
- Did you notice `ul, ol` and `th, td`? Those are more multiple selectors.

---

## Step 7: Class Selectors

Every `<section>` has `class="card"`. A **class selector** starts with a `.` and can style **many** elements at once. Write one rule and all six sections change.

```css
.card {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}
```

Now style the other three classes in the HTML: `tagline`, `tip`, and `warning`.

```css
.tagline {
    font-style: italic;
    color: #9fe8c7;
    margin-bottom: 15px;
}

.tip {
    background-color: #e3f7ec;
    border-left: 6px solid #1e8e5a;
    padding: 10px;
}

.warning {
    background-color: #fdecea;
    border-left: 6px solid #c0392b;
    padding: 10px;
    font-weight: bold;
}
```

> **Think about it:** Why do we use a *class* for `card` but an *ID* for `page-header`? (Answer in your own words in the reflection question at the end.)

---

## Step 8: Descendant Selector (Navigation Links)

A **descendant selector** is two selectors separated by a **space**. `nav a` means "only the `<a>` elements that are inside `<nav>`." The links in the "Learn More" section are *not* inside the nav, so they will not change.

```css
nav a {
    display: inline-block;
    color: #ffffff;
    text-decoration: none;
    padding: 8px 14px;
    margin: 4px;
    border: 1px solid #ffffff;
    border-radius: 5px;
}
```

Now add a second descendant selector that targets only the `<h1>` inside the header:

```css
#page-header h1 {
    color: #39ff88;
}
```

Scroll down and check: the links in "Learn More" still look like normal links. That proves the descendant selector is working.

---

## Step 9: Pseudo-class Selector (Hover Effect)

A **pseudo-class** styles an element in a special *state*. `:hover` applies only while the mouse is over the element.

```css
nav a:hover {
    background-color: #39ff88;
    color: #0b1f2a;
}
```

**Save, refresh, and move your mouse over the navigation buttons.** They should light up. Click them to make sure they still jump to the right section.

---

## Step 10: Footer

Finish the bottom of the page with another element selector.

```css
footer {
    background-color: #0b1f2a;
    color: #ffffff;
    text-align: center;
    padding: 15px;
}
```

In `cybersecurity.html`, replace `YOUR NAME` in the footer with your name.

---

## Step 11: Make It Yours

The colors above are a starting point. Change **at least three** color values so your page has its own look. You can find color codes at https://www.w3schools.com/colors/colors_picker.asp

Make sure your text is still easy to read against its background.

---

## Step 12: Validate, Link, and Publish

1. Check your CSS for errors at the W3C CSS Validator: https://jigsaw.w3.org/css-validator/ (use **By direct input** and paste your CSS). Fix any errors it reports.
2. Open your `index.html` and add a link to your new page:
   ```html
   <a href="cybersecurity.html">Cybersecurity Basics</a>
   ```
3. Commit and push `cybersecurity.html`, `cybersecurity.css`, and `index.html` to GitHub.
4. Open your GitHub Pages site, click the link from your home page, and confirm the page **and its styles** load. (If the page shows up unstyled, the CSS file did not get pushed or the file name does not match.)

---

## Reflection Questions

Answer these in the comments at the top of your `cybersecurity.css` file:

1. Why is it better to keep CSS in an external file instead of inside the HTML page?
2. What is the difference between a class selector and an ID selector? Give an example of each from this project.
3. What did the descendant selector `nav a` let you do that the element selector `a` could not?

---

## Optional Challenges (Extra Credit)

- Add a `:hover` effect to the table rows (`tr:hover`) so a row highlights when the mouse is over it.
- Use a descendant selector `.card h2` to add a bottom border under every section heading.
- Style the links in the "Learn More" section with `#resources a` and give them their own hover color.
- Style visited links using the `:visited` pseudo-class.

---

## Submission Checklist

- [ ] `cybersecurity.css` is linked in the `<head>` of `cybersecurity.html`
- [ ] All seven selector types are used (universal, element, class, ID, descendant, pseudo-class, multiple)
- [ ] Each section of the CSS file has a comment
- [ ] At least three colors are changed to make the design your own
- [ ] Your name is in the footer
- [ ] CSS passes the W3C validator
- [ ] The page is linked from `index.html` and works on GitHub Pages
- [ ] Reflection questions are answered in the CSS comments

See `RUBRIC.md` for how this project will be graded.
