export function Square() {
  return (
    <>
      <div className="square"></div>
    </>
  );
}

export function Board() {
  return (
    <div className="board">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
