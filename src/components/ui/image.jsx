export function Image({
  src,
  alt,
  className = "",
  fittingType = "cover",
  style,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ ...style, objectFit: fittingType }}
      {...props}
    />
  );
}
