---
id: posts/2019-12-15 Custom React Hooks
path: /posts/2019-12-15 Custom React Hooks
date: 2019-12-15
title: Refactoring a React component using custom hooks
---


I've found it extremely helpful when writing React components using hooks to create new abstractions for my multiple hooks by grouping them into a single "custom hook". Reasoning about a single hook is very simple (literally composed of a single element), but when your single component needs to keep track of multiple pieces of states, or actions that act on that state, things become tend to become more complex.

At this point it's a great idea to abstract away that complexity, exposing only what is relevant in the context of the consumer.


```js
/* MyApp.jsx */
function MyApp() {
  const [isVisible, setVisible] = useState(false);
  const actions = {
    open: () => setVisible(true),
    close: () => setVisible(false),
  };

  return (
    <main>
      <Modal isVisible={isVisible} closeButton={actions.close}>
        <h1>I'm in a dialog!</h1>
        <button onClick={actions.close}>Close</button>
      </Modal>

      <button onClick={actions.open}>Open dialog</button>
    </main>
  );
}
```


## Step one: create an empty hook

```js
// add the hook
import {useModalVisibility} from './use-modal-visibility';

function MyApp() {
  // call it from your component
  const unusedValue = useModalVisibility(false);

  // Everything else unchanged....
  const [isVisible, setVisible] = useState(false);
  const actions = {
    open: () => setVisible(true),
    close: () => setVisible(false),
  };

  // rendering...
```

> ☝️  This shouldn't affect our component at all.

```js
/* use-modal-visibility.jsx */
function useModalVisibility() {
  return;
};
```

This doesn't achieve much, but it doesn't break our code and our component should continue to work as normal 🤞


## Step two: Start pulling over hooks

Now let's move over the bare minimum from our component into the hook. We should be extra careful to make sure that our tests still pass (you are testing your components, right?) and our component still works.


```js
// add the hook
import {useModalVisibility} from './use-modal-visibility';

function MyApp() {
  // call it from your component
  const [isVisible, setVisible] = useModalVisibility(false);

  // Use the value/functions from useModalVisibility
  const actions = {
    open: () => setVisible(true),
    close: () => setVisible(false),
  };

  // rendering...
```

All our custom hook is doing so far is holding the `useState` logic, but not doing more than being a simple wrapper.

```js
/* use-modal-visibility.jsx */
function useModalVisibility() {
  const [isVisible, setVisible] = useState(false);
  return [isVisible, setVisible];
};
```

## Step three: Finalize the API/complete the abstraction

Now let's move over the bare minimum from our component into the hook. We should be extra careful to make sure that our tests still pass (you are testing your components, right?) and our component still works.

> Since the `actions` block has no external referneces, we know that we can move these actions into our hook.

```js
/* use-modal-visibility.jsx */
function useModalVisibility() {
  const [isVisible, setVisible] = useState(false);

  // isolate the implementation logic
  const open = () => setVisible(true),
  const close = () => setVisible(false),

  return [isVisible, {open, close}];
};
```

Having pulled all the state logic successfully into the custom hook, our stateless component is starting to look a whole lot more stateless again!

```js
// add the hook
import {useModalVisibility} from './use-modal-visibility';

function MyApp() {
  // call it from your component
  const [isVisible, {open, close}] = useModalVisibility(false);

  return (
    <main>
      <Modal isVisible={isVisible} closeButton={close}>
        <h1>I'm in a dialog!</h1>
        <button onClick={close}>Close</button>
      </Modal>

      <button onClick={open}>Open dialog</button>
    </main>
  );
}
```

It could be tempting to go further if you found yourself writing `toggle` functions quite a bit, and expose `toggle` along side `open` and `close`.
```js
const [isVisible, {open, close}] = useModalVisibility(false);
const toggle = () => isVisible ? open() : close();
```

You wouldn't be wrong to do that, don't forget that *_we choose the abstractions we compute by_*.

