export function boldColoredText(text: string, color: string): any {
  return (
    <span style={{ color: `var(${color})`, fontWeight: 700 }}>{text}</span>
  );
}
