import { useSpring, animated } from "@react-spring/web";
import "./Rectangle.styles.scss";

type RectangleProps = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export default function Rectangle(props: RectangleProps) {
  const { x, y, width, height } = props;

  const springProps = useSpring({
    to: { x, y, width, height },
    config: {
      friction: 30,
    },
    delay: x,
  });

  if (y === undefined) {
    return null;
  }

  return (
    <animated.rect
      className="animatedRectangle"
      x={springProps.x}
      y={springProps.y}
      width={springProps.width}
      height={springProps.height}
      strokeWidth={1}
      rx={1}
    />
  );
}
