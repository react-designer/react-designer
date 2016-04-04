import Text from './Text';

export class Title extends Text {
  static meta = {
    icon: <center style={{color: "gray"}}>Title</center>,
    initial: {
      ...Text.meta.initial,
      text: "Insert Title Here...",
      fill: "black",
      fontStyle: "italic",
      fontSize: 12
    }
  };
}
