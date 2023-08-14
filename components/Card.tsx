interface CardProps {
  num: number;
}

const Card = (props: CardProps) => {
  return (
    <div className="w-80 h-32 rounded-lg bg-[#EA9899] outline outline-1 outline-[#848484] flex flex-col items-center justify-center">
      <p>something</p>
      <p>something</p>
      <p>something</p>
      <p>something</p>
    </div>
  );
};

export default Card;
