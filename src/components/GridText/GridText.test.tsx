import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';

describe('<GridText />', () => {
  it('should render grid text component', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid text component without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
