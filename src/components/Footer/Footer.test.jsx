import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer footerHtml="<h1>oi</h1>" />);
    expect(screen.getByRole('heading', { name: 'oi' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
