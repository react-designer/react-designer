export default ({object, startPoint, mouse}) => {
  let {objectX, objectY, clientX, clientY} = startPoint;
  let width = startPoint.width + mouse.x - clientX;
  let height = startPoint.height + mouse.y - clientY;

  return {
    ...object,
    x: width > 0 ? objectX: objectX + width,
    y: height > 0 ? objectY: objectY + height,
    width: Math.abs(width),
    height: Math.abs(height)
  };
};