import { AnimatedList } from "./styled";

interface BookStyles extends Pick<React.CSSProperties, "height" | "marginBottom"> {}

export const FlipBook = ({ words, listStyle }: { words: string[]; listStyle?: BookStyles }) => (
  <AnimatedList style={listStyle}>
    <ul>
      {words.map((word, idx) => (
        <li key={idx}>
          <span>{word}</span>
        </li>
      ))}
    </ul>
  </AnimatedList>
);
