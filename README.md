# Reactionic Mocks

Badges

Reactionic mocks for quickly testing your components under different contexts.

## Installing

```
yarn add reactionic-mocks
```

## Usage

Simply use this or combine it with your mock context:

```
import { context } from 'reactionic-mocks';

// ...

const wrapper = mount(<MyComponent />, { context });
```

To expose context types to your children for
testing:

```
import { Wrapper, context } from 'IonicMocks';

// ...

const wrapper = mount(
  <Wrapper><MyComponent /></Wrapper>,
  { context }
);
```

You can also use `import { iosContext, androidContext } from 'reactionic-mocks';`.
