# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored some advanced React topics ⚛️. During this sprint, you studied class components, the component lifecycle and class component lifecycle methods, custom hooks, and React Testing Library 🐙. In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from a local server using a class component, displaying that data, using a custom hook, and writing tests for your app.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain how to build stateful class components.
  Class components are built with the syntax [class (component name) extends React.component]
  and under that you define state with either the constructor method and calling super, or 
  using shorthand and just defining initial state as an object without the constructor method. 
  From there you connect your state to all the elements of the component that need it 
  and use this.setState to change the state when necesarry.

2. Describe the different phases of the component lifecycle.
   The first phase of the component lifecycle is the mounting phase,
   which is where your initial data is rendered. The second phase is 
   the updating phase, where any updates to the inital data are handled.
   The third and last phase is the unmounting phase, where the life cycle 
   'dies' and functions that we don't want to continue running are unmounted 
   so they don't use up more memory.

3. Demonstrate an understanding of class component lifecycle methods.
    The common three lifecycle methods are componentDidMount, componentDidUpdate,
    and componentWillUnmount. The first is used for data recieved asyncronously 
    or after the initial render like an axios call. The second is for making 
    things happen when the component updates. Unlike the first, this is called
    every time the component updates instead of just once after the render.
    The third is for the end of the lifecycle when the component is no longer
    being used. We want to unmount the component so it doesn't take up memory when 
    not in use.

4. Define stateful logic.
   Stateful logic is any logic or code that deals with state.
   anything that updates or initializes state is concidered stateful logic.

5. Describe how to test a React component with React Testing Library.
    To test a React component with React Testing Library, you first need to 
    create a testing file and import the testing dependencies and component you
    are testing into it. Then you use the 'test()' keyword and inside the parenthesies
    describe your test in a string and create an anonymous function. From there you render 
    the component, get any elements in the component you need, fire user events if needed, and assert 
    what you expect to happen.
    These steps constitute the Arrange, Act, Assert method. You arrange the test, you act via user events, 
    and you assert that what you expect to happen will happen. It is also important to intentionaly fail your
    tests at one point to make sure the test isn't just passing no matter what.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

_This project uses a local server for the data fetching. You will need three seperate terminal windows open:_

1. _one for your server_
2. _one for your React app (in the /client folder)_
3. _and one to run your tests_

_Please follow the setup instructions closely so that you can get everything up and running smoothly_

**Basic set up**

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] [OPTIONAL] Create a new branch: git checkout -b `<firstName-lastName>`. If you choose to do this, you will need to merge your working branch into the master branch and push your final code to master in order for the submission to work with CodeGrade.

\_Note: Ignore the `mocks` directory. That is in place for the CodeGrade tests

**Setting up the CodeGrade webhook**

Go [here](./CodeGrade-webhook.md) to setup the CodeGrade webhook before you begin.

**Starting the server**

- [ ] Run `npm install` to download dependencies for the server.
- [ ] Run the server using `npm start`.
- [ ] Open a new browser tab and navigate to `http://localhost:3333/plants` - if you see a JSON object with plants data, then you know the server is running 👍

**Starting the React app**

- [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
- [ ] Still inside the `client` folder run `npm run start` to run the client application.
- [ ] Your browser should open up the project as normal

**Starting your test runner**

- [ ] In the final terminal window, make sure you are in the `client` folder still
- [ ] Start the test runner with `npm test` (I recommend doing this only when you're testing - any change in your app will make the tests run, and that could eat up your computer power)

**Commit and Push OFTEN!**

- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin master`, or, if working on your own branch: git push origin <firstName-lastName>`.

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

#### Plant List

Display a list of the plants from the server. This should be done in the class component `PlantList`.

- [ ] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants`
- [ ] Set the data to a state property called `this.state.plants`
- [ ] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart

#### Shopping Cart

Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

- [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic

_Note: You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And *do not* copy/paste directly from the guided project!_

#### Testing the Checkout Form

- [ ] Build out the tests listed in `CheckoutForm.test.js`. You will need to make sure they are testing what the test title implies they are testing
- [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working

<hr/>
In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add a filter input to the plant list page.
- [ ] Build and implement another custom hook - a dark mode hook would be great for this project, though you'll have to style the light theme ☀️ 🌙
- [ ] Add a test file for the `ShoppingCart` component and test that it displays plants there (you'll need some mock plant data for the test, and then you can pass that data in as a prop when you call `render` and render the component - see the example below)

```js
const plants = {{}, {}, {}} // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  ...

})
```

## Submission format

To submit, simply push your latest commit to the master branch and the CodeGrade webhook you setup will run automatically.
