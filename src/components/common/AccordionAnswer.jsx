/**
 * FAQ answer visibility — no height/opacity tweening.
 */
export default function AccordionAnswer({ isOpen, children, className = "" }) {
  if (!isOpen) return null;
  return <div className={className}>{children}</div>;
}
