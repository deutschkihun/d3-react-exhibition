import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Images } from '../ui-lib/lib'

export function ImageShowCase({ name }) {
  const navigate = useNavigate()
  const image = require(`../uploads/${name}.svg`)
  return (
    <Images className="svg-category" src={image} alt={name} onClick={() => navigate(`${name.replace(/\s/g, '')}`)} />
  )
}
