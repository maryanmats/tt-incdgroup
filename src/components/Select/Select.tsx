import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Checkbox } from "../Checkbox/Checkbox";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  onChange: (value: string) => void;
  value: string;
};

const Select = ({ options, onChange, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const handleOptionClick = (optionValue: string) => {
    setIsOpen(false);
    onChange(optionValue);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} className={`select-wrapper ${isOpen ? "select--open select--open_wrapper" : ""}`}>
        <div onClick={() => setIsOpen(!isOpen)} ref={headerRef} className={`select ${isOpen ? "select--open" : ""}`}>
          <div className="selected-option">{value}</div>
          <span>⯆</span>
        </div>
        {isOpen && (
          <div className={`select--expander ${isOpen ? "select--expanded" : ""}`}>
            <ul className={`select--options ${isOpen ? "select--options--open" : ""}`}>
              {options.map((option) => (
                <li
                  key={option.value}
                  className={`select--option ${option.value === value ? "selected" : ""}`}
                  onClick={() => handleOptionClick(option.value)}
                >
                  <span>{option.label}</span>
                  <Checkbox checked={value === option.value} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
