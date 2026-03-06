import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function BottomNav({ activeFilter, setFilter }) {
  const filters = [
    { id: "stats", label: "Stats", icon: "fa-solid fa-chart-bar" },
    { id: "open", label: "Active", icon: "fa-solid fa-circle" },
    { id: "inProgress", label: "In-Progress", icon: "fa-solid fa-spinner" },
    { id: "resolved", label: "Resolved", icon: "fa-solid fa-check-circle" },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
      {/* nav items */}
      <div className="flex justify-around items-center py-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setFilter(filter.id)}
            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-colors ${
              activeFilter === filter.id
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            }`}
          >
            <FontAwesomeIcon icon={filter.icon} className="text-lg" />
            <span className="text-xs font-medium">{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
