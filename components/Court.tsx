import Card from "./Card";

interface CourtProps {
  num: number;
}

const Court = (props: CourtProps) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h2 className="text-2xl">Court {props.num}</h2>
      {Array.from({ length: 4 }).map((e, i) => (
        <Card num={i + 1} />
      ))}
    </div>
  );
};

export default Court;
