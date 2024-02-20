import { FC, PropsWithChildren } from "react";

type HeaderType = {
  image: {
    src: string,
    alt: string
  };
  //children: ReactNode;
}

type HeaderProps = PropsWithChildren<HeaderType>

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      {children}
      <img {...image} />
    </header>
  )

}

export default Header;