# Notes

## 2020 October 4

#### Helpful Links
**Note**: there are additional links sprinkled around the codebase!

[Adding an enter keypress event handler to a form](https://stackoverflow.com/questions/34223558/enter-key-event-handler-on-react-bootstrap-input-component)

[A similar question about an enter keypress](https://stackoverflow.com/questions/51806208/how-do-i-use-enter-to-submit-the-semantic-react-search)

[A React hook for local storage](https://www.robinwieruch.de/local-storage-react)

[as const in the custom hook return type](https://stackoverflow.com/a/61694742)

[Sharing state between sibling components](https://stackoverflow.com/questions/47864929/how-to-render-results-of-search-in-another-component-in-react)

[Using an intermediate variable with an Apollo Client query](https://stackoverflow.com/questions/55890604/how-to-implement-search-function-in-react-graphql-using-react-hooks-and-apollo-c)
^ This one helped me fix Bug 1.

[Form validation](https://www.itsolutionstuff.com/post/react-form-validation-tutorial-exampleexample.html)
Note: more in `src/lib/hooks.ts`.

[Responsive YouTube video elements](https://css-tricks.com/fluid-width-video/)

#### Bugs

##### 1: Search is Too Eager

The search form at /recipes (RecipeIndex.tsx) is very eager. After clicking "Let's go!" (the submit button) the first time, the form re-queries the server whenever the user changes the text in the form - the user does not need to re-click the submit button.

I need to suppress this behaviour and make sure the form re-queries the server only when the user clicks the submit button.

##### FIXED 2020-October-11

##### 2: Empty Contact Form

The contact form at /contact (Contact.tsx) can submit an empty form. Ideally, the form will instead highlight the empty fields.

##### FIXED 2020-October-11

## 2020 October 7

##### 3: Navbar does not fit on mobile

On a mobile device (in my case, a Pixel phone), the links on the navigation bar run off the screen. Interestingly, *only* the links run off - the rest of the navigation bar is fine!

Maybe I can fold the links into a hamburger menu?

##### FIXED 2020-November-1

##### 4: Meal images and YouTube videos do not fit on mobile

Ditto.
*Note*: The images in /about *do* fit just fine. Inspect their CSS.

The meal cards in /recipes look fine although they need to be centered.

##### FIXED 2020-November-1

##### 5: Link colours are hard to read - unifying the styles