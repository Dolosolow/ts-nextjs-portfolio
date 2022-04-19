import { StyledTagList } from "./styled";

export const TagsList = ({ items }: { items: string[] }) => {
  return (
    <StyledTagList aria-label="tech stack">
      {items.map((item, idx) => (
        <li key={idx} className="tag-item">
          <p>{item}</p>
        </li>
      ))}
    </StyledTagList>
  );
};
