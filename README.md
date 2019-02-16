# Relay's Front-End Take Home Exercise

Hello and thanks for taking the time to do Relay's take-home coding exercise! What we have here is a survey engine and we need you to make some changes to it. The project should be set up and ready to go with some "dummy" data already plugged in.

## Directions

1. Clone this repo to your machine.
2. Create a new _private_ repository under your account on GitHub (or similar service) and push the cloned project there. Don't just fork it because then other people can see your solution. You'll probably have to remove the existing git remotes in `.git/config` before doing this.
3. Create a branch other than master that will contain your work.
4. Do the work described in "The Exercise" section.
5. Make a pull request of your working branch to master. Write a description of your design choices, thoughts, setbacks, etc. in the PR description (template provided).
6. Email a link to the PR back to us and we'll review it.

## The Exercise

1. Add a new route at `questions/new`. Make a new page and a form to add new questions. Add these questions to the Redux `questions` store. Don't worry about styling the form.
2. Add the ability to complete a survey. You should make your selection for each question, click "Finish Survey" at the bottom, and the results should then be stored in the Redux `results` store. After submitting, the radio boxes should be cleared and be ready another submission. Every question does not have to be answered but at least one does.
3. Style the header, footer, and the "Survey Questions" page, using SCSS only (no Bootstrap or similar), with the following guidelines:

- Make the header and footer full-width. Give them both a height of 100px and background color of your choosing.
- The header's links should be right-aligned and vertically centered. The title should stay left-aligned and also be vertically centered.
- The footer should be sticky to the bottom of the page but always below any other content. The text should be vertically and horizontally centered.
- Each survey question should be styled like a "card". [Something like this](https://bulma.io/documentation/components/card/).
- Make the "Finish Survey" button big and styled to your liking.
- The form page does not have to be styled.
- Don't worry about mobile or smaller widths.
- You only need to support modern Chrome.
- Use your judgement to make the page look good yet simple.

## Notes

- This is supposed to test your skills not take up all of your free time. If you find yourself spending more than 2-3 hours on it use your best judgement to find a stopping point and write a short description of what the challenges were.
- The project is already set up to work with the [Redux devtools extension](https://github.com/zalmoxisus/redux-devtools-extension).
- If something in the starter code is wrong, please fix it in your project and mention it in the PR description so we can continue to improve this part of the interview process.

## Starting The Server

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
