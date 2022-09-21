type Props = {
  link: string;
  children: string | JSX.Element;
};

export const LinkBtn = ({ link, children }: Props) => {
  return (
    <a
      href={link}
      className="no-underline hover:underline text-blue-500 text-lg"
    >
      {children}
    </a>
  );
};
