import { AnimatedList } from "./styled";

interface FBProps {
  pages: string[];
  listStyle?: Pick<React.CSSProperties, "height" | "marginBottom">;
}

export const FlipBook = ({ pages, listStyle }: FBProps) => (
  <AnimatedList style={listStyle}>
    {pages.length > 1 ? (
      <ul className="animated__ul">
        {pages.map((word, idx) => (
          <li key={idx}>
            <span>{word}</span>
          </li>
        ))}
      </ul>
    ) : (
      <ul>
        <li>
          <span>{pages[0]}</span>
        </li>
      </ul>
    )}
  </AnimatedList>
);
