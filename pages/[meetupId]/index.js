import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsComponent = (props) => {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://kunduaritra7:5PEC4YLPKqVS5qkD@cluster0.it4emu0.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://kunduaritra7:5PEC4YLPKqVS5qkD@cluster0.it4emu0.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetups = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        image: selectedMeetups.image,
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        description: selectedMeetups.description,
      },
    },
  };
}

export default MeetupDetailsComponent;
