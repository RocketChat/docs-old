# Markdown Style Guide

The Rocket.Chat documentation supports the [Markdown Markup Language](https://en.wikipedia.org/wiki/Markdown) (You can also find a "Cheatsheet" [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet))

Markdown can be written in various different styles, in this document you will find the standard formatting guide for creating Rocket.Chat documentation.

TODO:
We are currently running a markdown [linter](https://github.com/markdownlint/markdownlint) on incoming Pull Requests, so it is a good idea to download it and run it locally before submitting a Pull Request.

All the rules listed here have their respective code attached here, so if the linter fails you can come here and check out the rule that was broken.

You can run the Markdown linter locally by installing this [Markdown Linter Tool](https://github.com/markdownlint/markdownlint)
and running the command `mdl ../` command on the docs main folder.

## Rules

### MD001 - Header levels should only increment by one level at a time

Headers should not be skipped, instead incremented one by one

**Wrong**:

```markdown
# Header 1

### Header 3

We skipped out a 2nd level header in this document
```

**Correct**:

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

## Another Header 2

### Another Header 3
```

### MD002 - First header should be a top level header

The first header of the document should be a top level header (H1).

**Wrong**:

```markdown
## This isn't a H1 header

### Another header
```

**Correct**:

```markdown
# Start with a H1 header

## Then use a H2 for subsections
```

### MD003 - Header style

The header style used on documents should be `atx`.

**Wrong**:

```markdown
Setext style H1
===============

Setext style H2
---------------
```

### ATX style H3

**Correct**:

```markdown
# ATX style H1

## ATX style H2
```

### MD004 - Unordered list style

Lists should be created using dashes.

**Wrong**:

```markdown
* Item 1
+ Item 2
- Item 3
```

**Correct**:

```markdown
- Item 1
- Item 2
- Item 3
```

### MD005 - No inconsistent indentation for list items at the same level

Lists should have consistent indentation, usually this rule will be triggered because of a typo.

**Wrong**:

```markdown
- Item 1
    - Nested Item 1
    - Nested Item 2
    - A misaligned item
```

**Correct**:

```markdown
- Item 1
    - Nested Item 1
    - Nested Item 2
    - Nested Item 3
```

### MD006 - Consider starting bulleted lists at the beginning of the line

Bulleted lists should start on the beginning of the line.

**Wrong**:

```markdown
Some text

    * List item
    * List item
```

**Correct**:

```markdown
Some test

* List item
* List item
```

### MD007 - Unordered list indentation

List items should be indented using 4 spaces.

**Wrong**:

```markdown
* List item
    * Nested list item indented by 3 spaces
```

**Correct**:

```markdown
* List item
    * Nested list item indented by 4 spaces
```

### MD009 - No trailing spaces

There shouldn't have any trailing spaces after the end of the lines.

To fix this, find the line that is triggered and remove any trailing spaces from the end.

### MD010 - No hard tabs

Spaces should be used for indentation instead of hard tabs.

To fix this, replace any hard tab characters with spaces instead.

### MD011 - No reversed link syntax

When creating links you should use the `[]` surrounding the text and `()` surrounding the link.

**Wrong**:

```markdown
(Incorrect link syntax)[http://www.example.com/]
```

**Correct**:

```markdown
    [Correct link syntax](http://www.example.com/)
```

### MD012 - No multiple consecutive blank lines

There should not have more than one consecutive blank line on the document.

**Wrong**:

```markdown
Some text here


Some more text here
```

**Correct**:

```markdown
Some text here

Some more text here
```

### MD018 - Use space after hash on atx style header

There should be a space after the hashes on atx style headers.

**Wrong**:

```markdown
#Header 1

##Header 2
```

**Correct**:

```markdown
# Header 1

## Header 2
```

### MD019 - No multiple spaces after hash on atx style header

There shouldn't have more than 1 space after the hash on atx style headers.

**Wrong**:

```markdown
#  Header 1

##  Header 2
```

**Correct**:

```markdown
# Header 1

## Header 2
```

### MD022 - Headers should be surrounded by blank lines

All headers should have a blank line both before and after (except where the header is at the beginning or end of the document)

**Wrong**:

```markdown
# Header 1
Some text

Some more text
## Header 2
```

**Correct**:

```markdown
# Header 1

Some text

Some more text

## Header 2
```

### MD023 - Headers must start at the beginning of the line

**Wrong**:

```markdown
Some text

    # Indented header
```

**Correct**:

```markdown
Some text

# Header
```

### MD025 - No multiple top level headers in the same document

There should only have one top level header (`h1`) on a document.

**Wrong**:

```markdown
# Top level header

# Another top level header
```

**Correct**:

```markdown
# Title

## Header

## Another header
```

### MD027 - No multiple spaces after blockquote symbol

Blockquote should not have more than one space after the blockquote symbol ( `>` ).

**Wrong**:

```markdown
>  This is a block quote with bad indentation
>  there should only be one.
```

**Correct**:

```markdown
> This is a block quote with bad indentation
> there should only be one.
```

### MD028 - No blank line inside blockquote

There shouldn't have a blank line inside the same blockquote.

**Wrong**:

```markdown
> This is a blockquote
> which is immediately followed by

> this blockquote. Unfortunately
> In some parsers, these are treated as the same blockquote.
```

**Correct**:

```markdown
> This is a blockquote.

And Jimmy also said:

> This too is a blockquote.
```

Alternatively, if they are supposed to be the same quote, then add the blockquote symbol at the beginning of the blank line

```markdown
> This is a blockquote.
>
> This is the same blockquote.
```

### MD029 - Ordered list item prefix

Ordered lists should be ordered by a prefix that increases in numerical order.

**Wrong**:

```markdown
1. Do this.
1. Do that.
1. Done.
```

**Correct**:

```markdown
1. Do this.
2. Do that.
3. Done.
```

### MD030 - Space after list markers

There should be only one space after a list marker.

**Wrong**:

```markdown
*Foo
*Bar
*Baz

1.  Foo
1.  Bar
1.  Baz
```

**Correct**:

```markdown
* Foo
* Bar
* Baz

1. Foo
1. Bar
1. Baz

1. Foo
* Bar
1. Baz
```

### MD031 - Fenced code blocks should be surrounded by blank lines

Fenced code blocks should be surrounded by blank lines.

**Wrong**:

```markdown
Some text
`` `
Code block
`` `

`` `
Another code block
`` `
Some more text
```

**Correct**:

```markdown
Some text

`` `
Code block
`` `

`` `
Another code block
`` `

Some more text
```

### MD032 - Lists should be surrounded by blank lines

Lists should be surrounded by blank lines.

**Wrong**:

```markdown
Some text
* Some
* List

1. Some
2. List
Some text
```

**Correct**:

```markdown
Some text

* Some
* List

1. Some
2. List

Some text
```

### MD034 - No bare URLs

There should no bare urls on the document, surround the links with angle brackets (`< >`).

**Wrong**:

```markdown
For more information, see http://www.example.com/.
```

**Correct**:

```markdown
For more information, see <http://www.example.com/>.
```

### MD035 - Horizontal rule style

Horizontal rules should be created using three slashes (`---`).

**Wrong**:

```markdown
***

* * *

****
```

**Correct**:

```markdown
---
```

### MD037 - No spaces inside emphasis markers

There shouldn't have spaces inside emphasis markers (bold, italic).

**Wrong**:

```markdown
Here is some ** bold ** text.

Here is some _ italic _ text.
```

**Correct**:

```markdown
Here is some **bold** text.

Here is some _italic_ text.
```

### MD038 - No spaces inside code span elements

There shouldn't have spaces inside code span elements.

**Wrong**:

```markdown
` some text `

`some text `

` some text`
```

**Correct**:

```markdown
`some text`
```

### MD039 - No spaces inside link text

There shouldn't have spaces inside link texts.

**Wrong**:

```markdown
[ a link ](http://www.example.com/)
```

**Correct**:

```markdown
[a link](http://www.example.com/)
```

### MD046 - Code block style

Code blocks should be fenced.

**Wrong**:

```markdown

    codeblock using indentation.

```

**Correct**:

```markdown

` ` `
codeblock using fences.
` ` `

```