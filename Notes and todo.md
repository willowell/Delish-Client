# Notes

## 2020 October 4

#### Bugs

##### 1: Search is Too Eager

The search form at /recipes (RecipeIndex.tsx) is very eager. After clicking "Let's go!" (the submit button) the first time, the form re-queries the server whenever the user changes the text in the form - the user does not need to re-click the submit button.

I need to suppress this behaviour and make sure the form re-queries the server only when the user clicks the submit button.

##### 2: Empty Contact Form

The contact form at /contact (Contact.tsx) can submit an empty form. Ideally, the form will instead highlight the empty fields.