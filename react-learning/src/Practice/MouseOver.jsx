function MouseOver() {
  function handleMouseOver() {
    alert("Mouse is over the box!");
  }

  return (
    <div onMouseOver={handleMouseOver}>
      Move your mouse here
    </div>
  );
}

export default MouseOver;