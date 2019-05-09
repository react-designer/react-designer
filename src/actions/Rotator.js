export default ({object, startPoint, mouse}) => {
  let angle = Math.atan2(
    startPoint.objectX + (object.width || 0) / 2 - mouse.x,
    startPoint.objectY + (object.height || 0) / 2 - mouse.y
  );

  let asDegree = angle * 180 / Math.PI;
  let rotation = (asDegree + 45) * -1;

  return {
    ...object,
    rotate: rotation
  };
};
