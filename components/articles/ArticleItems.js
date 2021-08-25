import { useRouter } from 'next/router'
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();
  function showDetailHandler() {
    router.push('/' + props.title)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h3>{props.date}</h3>
          <h3>{props.author}</h3>
          <h3>{props.likes}</h3>
          <h3>{props.content}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler} >Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;