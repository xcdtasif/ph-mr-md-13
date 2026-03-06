export default function ResolvedTicket({ ticket }) {
  const { title } = ticket;

  return (
    <div>
      {/* resolved ticket */}
      <div className="bg-[#d2d2d2] p-4 my-4 rounded-2xl">
        <h2 className="font-semibold">{title}</h2>
      </div>
    </div>
  );
}
