import ionPlatform, { iosContext, androidContext } from './mocks/ionPlatform';
import WrapperComponent from './components/Wrapper';

/**
 * Simply use this or combine it with your mock
 * context
 *
 * ```
 * import { context } from 'reactionic-mocks';
 *
 * // ...
 *
 * const wrapper = mount(<MyComponent />, { context });
 * ```
 *
 * You can also use `import { iosContext, androidContext } from 'reactionic-mocks';`
 *
 * @see Wrapper
 */
export const context = {
  ionPlatform,
};

export { iosContext };
export { androidContext };

export const Wrapper = WrapperComponent;
