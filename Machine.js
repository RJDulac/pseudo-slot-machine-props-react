class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    let sr1 = slotArray[getSlot()];
    let sr2 = slotArray[getSlot()];
    let sr3 = slotArray[getSlot()];

    const winner = (s1 || sr1) === (s2 || sr2) && (s2 || sr2) === (s3 || sr3);
    return (
      <div>
        {s1 || sr1}
        {s2 || sr2}
        {s3 || sr3}
        <h1>{winner ? "You win!" : "You lose!"}</h1>
      </div>
    );
  }
}
const slotArray = ["🍇", "🍓", "🍊"];
function getSlot() {
  return Math.floor(Math.random() * slotArray.length);
}
