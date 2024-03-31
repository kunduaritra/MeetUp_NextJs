import { DUMMY_MEETUPS } from "../../pages";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupDetails = ({ meetupId }) => {
  const meetupData = Object.values(DUMMY_MEETUPS).find(
    (meetup) => meetup.id === meetupId
  );

  return (
    <Card>
      <div className={classes.image}>
        <img src={meetupData.image} alt={meetupData.title} />
      </div>
      <div className={classes.content}>
        <h3>{meetupData.title}</h3>
        <address>{meetupData.address}</address>
      </div>
    </Card>
  );
};

export default MeetupDetails;
