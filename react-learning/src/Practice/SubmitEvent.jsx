function SubmitEvent() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitEvent;