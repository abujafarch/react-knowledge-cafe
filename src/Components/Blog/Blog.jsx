import PropTypes from 'prop-types'
const Blog = ({blogs}) => {
    console.log(blogs)
    return (
        <div>
            
        </div>
    );
};
Blog.propTypes = {
    blogs: PropTypes.object.isRequired
}
export default Blog;