import { connect } from 'react-redux';
import News from './news';
import { fetchNews } from '../../actions/news'

const mStP = (state, ownProps) => {
    return {
        entities: state.entities
    }
};

const mDtP = (dispatch) => {
    return {
        fetchNews: (abbreviation) => dispatch(fetchNews(abbreviation))
    }
};

export default connect(mStP, mDtP)(News);
