import { LinkTextWrapper } from "./styled";

interface LTAProps {
  href: string;
  linkText: string;
  text?: string;
  description?: string;
}

export const LinkTextArea = (props: LTAProps) => {
  const { href, linkText, description, text = "" } = props;

  return (
    <LinkTextWrapper>
      <p
        className="linkarea__text"
        dangerouslySetInnerHTML={{
          __html: `${text}
            <a
                rel="noopener"
                href="${href}"
                target="_blank"
            >
            ${linkText}
            </a>
            .`,
        }}
      />
      {description && <p className="linkarea____desc">{description}</p>}
    </LinkTextWrapper>
  );
};
