import React, { useState, useEffect, useRef } from 'react';
import { Chevron } from '../svgs';

/**
 * This hook will hide the dropdown menu when we click the outside boundary region.
 *
 * @param {Object} ref - We will attach a ref to track the dropdown menu node.
 * @param {function} callback - This callback will be fired when we click outside boundary region.
 * @param {boolean} when - Attach click listener, It will only works when the dropdown menu will open.
 */
const useOutsideClick = (ref, callback, when) => {
  // Maintaining the callback when first time the dropdown will mount.
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  // This hook will runs when the `when` argument will change.
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        savedCallback.current();
      }
    };

    if (when) {
      document.addEventListener('click', handler);
      return () => document.removeEventListener('click', handler);
    }
  }, [when, ref]);
};

const Dropdown = ({ title, children, minWidth = 160 }) => {
  const [open, setOpen] = useState(false);
  const dropDownMenuRef = useRef();
  const toggle = () => setOpen(!open);
  const hideDropdown = () => setOpen(false);

  useOutsideClick(dropDownMenuRef, hideDropdown, open);

  return (
    <div className="dropdown">
      <button
        className="dropdown__button"
        type="button"
        onClick={() => toggle(!open)}
      >
        <span>{title}</span>
        <span className="dropdown__button--icon">
          <Chevron
            width={12}
            height={12}
            style={
              open
                ? {
                    transform: 'rotate(180deg)',
                    transition: 'transform .3s'
                  }
                : {}
            }
          />
        </span>
      </button>
      {open && children && (
        <div
          className="dropdown-menu"
          style={{ minWidth }}
          ref={dropDownMenuRef}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
