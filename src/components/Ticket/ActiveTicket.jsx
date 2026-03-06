import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActiveTicket({ ticket, handleActive }) {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  return (
    <div>
      {/* active ticket */}
      <div
        className="bg-white p-8 mt-8 rounded-2xl"
        onClick={() => handleActive(id)}
      >
        <span className="flex justify-between">
          <h2 className="font-semibold">{title}</h2>
          <button>{status}</button>
        </span>

        <p className="mt-4">{description}</p>

        <span className="flex justify-between mt-4">
          <div className="flex gap-4">
            <h2>#{id}</h2>
            <h2>{priority}</h2>
          </div>

          <div className="flex gap-4">
            <h2>{customer}</h2>
            <span className="flex items-center">
              <FontAwesomeIcon icon="fa-regular fa-calendar" />
              {createdAt}
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
