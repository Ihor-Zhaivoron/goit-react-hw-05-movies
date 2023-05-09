import css from './Reviews.module.css';
// import no_avatar from '../../no-avatar.jpg';
import no_avatar from 'no-avatar.jpg';

const getAvatar = link => {
  if (!link) {
    return no_avatar;
  }
  if (link && link.includes('https')) {
    return link.slice(1, -1);
  }
  return `https://image.tmdb.org/t/p/w500/${link}`;
};
export const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      {reviews.map(review => (
        <li className={css.reviews_item} key={reviews.id}>
          <div className={css.reviews_author}>
            <img
              src={getAvatar(review['author_details']['avatar_path'])}
              alt={review.author}
              width="100px"
            />
            {review.author}
          </div>
          <div className={css.reviews_content}>{review.content}</div>
        </li>
      ))}
    </>
  );
};
