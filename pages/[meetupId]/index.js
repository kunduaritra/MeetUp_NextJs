import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsComponent = () => {
  return (
    <MeetupDetails
      image="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="First Meetup"
      address="1, Queens Way, Maidan, Kolkata, West Bengal"
      description="This is First Meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data API call
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        id: meetupId,
        title: "First Meetup",
        address: "1, Queens Way, Maidan, Kolkata, West Bengal",
        description: "This is First Meetup",
      },
    },
  };
}

export default MeetupDetailsComponent;
