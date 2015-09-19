import React from 'react/addons';
import Square from '../../src/components/Square.jsx';
import {expect} from 'chai';

const TestUtils = React.addons.TestUtils;

const shallowRenderer = TestUtils.createRenderer();

let GRASS = {type: 'GRASS', value: 1};

describe('Square', () => {
  describe('types', () => {
    it('grass renders green', () => {
      shallowRenderer.render(
        React.createElement(Square, {data: GRASS, boardState: {player: {x: 2, y: 3}}})
      );

      const result = shallowRenderer.getRenderOutput();

      expect(result.type.displayName).to.equal('GrassSquare');
    });
  });
});
