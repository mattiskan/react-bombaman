import React from 'react/addons';
import Board from '../../src/components/Board.jsx';
import {expect} from 'chai';

const TestUtils = React.addons.TestUtils;

const shallowRenderer = TestUtils.createRenderer();

const dummyBoardState = {
  squares: [[11, 12], [21, 22]]
};

describe('Board', () => {
  it('renders as a <Square>', () => {
    shallowRenderer.render(
      React.createElement(Board, {boardState: dummyBoardState})
    );

    const result = shallowRenderer.getRenderOutput().props.children;
    expect(result).to.have.length(2);
    result.map(p => {
      expect(p.type).to.equal('p')
    })
  });

});
