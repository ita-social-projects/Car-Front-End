/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { Providers } from "./src/components/navigation/Providers";


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Login } from '../src/activity/Login';
import Journey from '../src/activity/Journey';

//TODO: run test
/*it('renders correctly', () => {
  renderer.create(<App />);
});
*/

/*test('renders correctly', () => {
   //expect(1===1).toEqual();
   expect(sum(1,1)).toBe(2)
});*/

test('2 + 3 = 5', () => {
  expect(2+3).toBe(5);
});

