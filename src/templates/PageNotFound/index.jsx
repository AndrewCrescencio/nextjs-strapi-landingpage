import P from 'prop-types';
import { GridContent } from '../../components/GridContent';
export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="<p>A página que você busca não foi encontrada <a href='/'>Clique aqui para voltar</a></p>"
    />
  );
};

PageNotFound.propTypes = {
  children: P.node,
};
