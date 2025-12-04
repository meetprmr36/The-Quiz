import '../App.css';
import StatusBadge from "./Common/StatusBadge";
import ActionButton from "./Common/ActionButton";

const TechnologyRow = ({ tech, onDelete, questions, onEdit }) => {
  const questionCount = questions?.filter(
    q => q.technology?.toLowerCase() === tech.name?.toLowerCase()
  ).length;

  // const techNames = questions?.map(q => q.technology);


  return (
    <tr className="Border-bottom hover:bg-[var(--accenthover)] transition-all duration-400">
      <td className="p-3 px-5 break-words max-lg:text-sm max-sm:text-xs">{tech?.name}</td>
      {/* <td className="p-3 max-w-30 break-words max-lg:text-sm max-sm:text-xs max-sm:max-w-[280px]">{tech?.date}</td> */}
      <td className="p-3 break-words text-center max-sm:max-w-[220px]">
        <StatusBadge active={tech?.active} />
      </td>
      <td className="p-3 break-words max-lg:text-sm text-center max-sm:text-xs max-sm:max-w-[150px]">{questionCount}</td>
      <td className="p-3 break-words flex justify-center m-auto max-sm:max-w-[200px]">
        <ActionButton 
        onEdit={() => onEdit?.(tech)} 
        onDelete={() => onDelete?.(tech?.id)} 
        tech={tech} />
      </td>
    </tr>
  );
};

export default TechnologyRow;
