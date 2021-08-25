  
import MeetupItem from './ArticleItems';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <div><h1> Welcome to the Golden Apple Blog! </h1>
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          date={meetup.date}
          author={meetup.author}
          likes={meetup.likes}
          content={meetup.content}
        />
      ))}
    </ul></div>
  );
}

export default MeetupList;