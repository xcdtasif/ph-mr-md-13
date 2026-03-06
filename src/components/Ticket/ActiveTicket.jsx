import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  statusLabels,
  statusStyles,
  dotStyles,
  priorityLabels,
  priorityColors,
} from "../../utils/ticketUtils";

export default function ActiveTicket({ ticket, handleActive }) {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  return (
    <div>
      {/* active ticket */}
      <div
        className="bg-white p-8 mt-8 rounded-2xl cursor-pointer"
        onClick={() => handleActive(id)}
      >
        <div className="flex items-start justify-between w-full">
          <h2 className="font-semibold text-lg truncate mr-4">{title}</h2>
          <span
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-4 ${statusStyles[status]}`}
          >
            <span
              className={`w-3 h-3 rounded-full ${dotStyles[status]}`}
            ></span>
            {statusLabels[status]}
          </span>
        </div>

        <p className="mt-4 text-gray-500 line-clamp-2">{description}</p>

        <span className="flex justify-between mt-4 text-sm text-gray-500">
          <div className="flex gap-4">
            <h2>#{id}</h2>
            <h2 className={`font-medium ${priorityColors[priority]}`}>
              {priorityLabels[priority]}
            </h2>
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
