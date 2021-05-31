export const Chevron = (props) => {
  const { style, ...attrs } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      style={{ ...style, transition: 'transform .3s' }}
      {...attrs}
    >
      <path fill="#171717" d="M1.6 3.2L0 4.8l8 8 8-8-1.6-1.6L8 9.6 1.6 3.2z" />
    </svg>
  );
};

export const FullStar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#171717"
        d="M10.9 15.7c1.6.9 3-.2 2.7-2l-.6-3.3L15.3 8c1.3-1.3.8-3-1-3.3l-3.2-.5-1.4-3c-.8-1.7-2.5-1.7-3.3 0L5 4.2l-3.3.5C0 5-.6 6.7.7 8L3 10.4l-.5 3.3c-.3 1.8 1.1 2.9 2.7 2L8 14.1l2.9 1.6z"
      />
    </svg>
  );
};

export const HalfStar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#171717"
        d="M14.3 4.7l-3.2-.5-1.4-3C9.3.4 8.6 0 8 0c-.6 0-1.3.4-1.7 1.3l-1.4 3-3.2.4C0 5-.6 6.7.7 8L3 10.4l-.5 3.3c-.3 1.8 1.1 2.9 2.7 2L8 14.1l2.9 1.6c1.6.9 3-.2 2.7-2l-.6-3.3L15.3 8c1.3-1.3.7-3-1-3.3zm-3.4 5.1l.7 4.3-3.1-1.8V3.1l1.3 2.8 4.2.7-3.1 3.2z"
      />
    </svg>
  );
};

export const Star = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#171717"
        d="M10.9 9.8L14 6.6l-4.2-.7L8 2.1 6.2 5.9 2 6.6l3.1 3.2-.7 4.3L8 12l3.6 2-.7-4.2zm0 5.9L8 14.1l-2.9 1.6c-1.6.9-3-.2-2.7-2l.6-3.3L.7 8c-1.3-1.3-.8-3 1-3.3l3.2-.5 1.4-3C6.7.4 7.4 0 8 0c.6 0 1.3.4 1.7 1.3l1.4 3 3.2.5c1.8.3 2.3 2 1 3.3L13 10.4l.5 3.3c.3 1.8-1.1 2.9-2.6 2z"
      />
    </svg>
  );
};

export const Tick = (props) => {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path
        d="M5.43 13.73l-5.2-5.2a.8.8 0 010-1.13l1.14-1.13a.8.8 0 011.13 0L6 9.77l7.5-7.5a.8.8 0 011.13 0l1.14 1.13a.8.8 0 010 1.13l-9.2 9.2a.81.81 0 01-1.14 0z"
        fill="currentColor"
      />
    </svg>
  );
};
