import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React, { Fragment } from "react";
import Head from "next/head";

const NewMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add New Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing network opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
};

export default NewMeetup;
