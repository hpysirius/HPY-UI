import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Bar from './index';

describe('<Foo />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Bar title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
