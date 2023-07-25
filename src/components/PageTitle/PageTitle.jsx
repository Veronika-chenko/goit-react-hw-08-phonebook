import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet-async';

export const PageTitle = ({ title }) => {
  if (!title) return;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
