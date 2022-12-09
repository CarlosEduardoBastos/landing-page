import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render grid section', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
