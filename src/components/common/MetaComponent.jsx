import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function MetaComponent({ meta }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Helmet>
    </HelmetProvider>
  );
}

// Prop validation using PropTypes
MetaComponent.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired, // meta prop should be an object with title and description
};
