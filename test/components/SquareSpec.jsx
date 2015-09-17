import React from 'react/addons';
import Square from '../../src/components/Square.jsx';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe('Square', () => {

  it('renders as a <span>', () => {
    const component = renderIntoDocument(
        <Square data={7} />
    );

    const squares = scryRenderedDOMComponentsWithTag(component, 'span');
    expect(squares.length).to.equal(1);
  });

});
