import NewMeetupForm from '../components/meetups/NewMeetupFrom'

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    fetch('https://react-practice-930e5-default-rtdb.firebaseio.com/meetups.json');
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
