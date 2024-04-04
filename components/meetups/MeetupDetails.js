import { DUMMY_MEETUPS } from "../../pages";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupDetails = (props) => {
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
    </Card>
  );
};

export default MeetupDetails;
