import { EVENTS } from '../asset/const';

export function navigation (href) {
  window.history.pushState({}, '', href);
  const navEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navEvent);
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent = event.ctrlClick || event.metaKey || event.altKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigation(to);
    }

    window.scrollTo(0, 0);
  };

  return (
    <a href={to} onClick={handleClick} target={target} {...props} />
  );
}
