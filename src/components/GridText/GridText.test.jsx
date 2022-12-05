import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridText />', () => {
  it('should render grid section', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
