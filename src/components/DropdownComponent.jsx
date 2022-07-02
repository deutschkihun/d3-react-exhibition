import React from 'react'
import { Dropdown } from '../ui-lib/lib'
import { categories } from '../data'

export function DropdownComponent() {
  return (
    <Dropdown>
      <li className="dropdown">
        Menu
        <ul className="dropdown_menu">
          {categories.map(({ name }, k) => (
            <li>
              <a href={`${name.replace(/\s/g, '')}`}>{name}</a>
            </li>
          ))}
        </ul>
      </li>
    </Dropdown>
  )
}
