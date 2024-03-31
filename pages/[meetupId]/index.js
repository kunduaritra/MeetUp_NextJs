import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsComponent = () => {
  const router = useRouter();

  const meetupId = router.query.meetupId;

  return <MeetupDetails meetupId={meetupId} />;
};

export default MeetupDetailsComponent;
