import React from 'react/addons';
import Square from '../../src/components/Square.jsx';
import {expect} from 'chai';

const TestUtils = React.addons.TestUtils;

const shallowRenderer = TestUtils.createRenderer();

let GRASS = {type: 'GRASS', value: 1};

describe('Square', () => {
  // it('renders as a <span>', () => {
  //   shallowRenderer.render(
  //     React.createElement(Square, GRASS)
  //   )
  //
  //   const result = shallowRenderer.getRenderOutput();
  //   expect(result).to.equal(1);
  // });

  describe('types', () => {
    it('grass renders green', () => {
      shallowRenderer.render(
        React.createElement(Square, {data: GRASS})
      );

      const result = shallowRenderer.getRenderOutput();

      expect(result.type.displayName).to.equal('GrassSquare');
    });
  });
});
