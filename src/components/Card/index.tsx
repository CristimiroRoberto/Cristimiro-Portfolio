import { useRef,useEffect } from "react";
// Third-party library
import { ReactSVG } from 'react-svg';

// Images and icons
import Panel from '../../assets/svg/painel.svg';

interface Props {
  icon: string;
  title: string;
  description: string;
  altIcon: string;
}
export const Card = ({ icon, title, description, altIcon }: Props) => {
    const blurCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (blurCardRef.current) {
        const YPos = e.offsetY - 36;
        const XPos = e.offsetX - 36;
        blurCardRef.current.style.left = XPos + 'px';
        blurCardRef.current.style.top = YPos + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
        <article className="card"  >
          <div className="panel">
            <ReactSVG src={Panel}  data-alt="Background Card" />
          </div>
          <div className="icon-card">
            <ReactSVG src={icon} data-alt={altIcon} />
          </div>
          <header className="my-2">
            <h6 className="card-title">{title}</h6>
          </header>
          <div className="card-body">
            <p>{description} </p>
          </div>
          <div className="blur-card" ref={blurCardRef}></div>
        </article>
    </>
  );
};
