'use client'
import React from 'react'
import { classNames } from '@/utils/utils'

interface TagProps {
  tag: string
  selected: boolean
  onClick: () => void
}

const Tag: React.FC<TagProps> = ({ tag, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'px-3 py-1 m-1 rounded-full font-medium text-sm',
        selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      )}
    >
      #{tag}
    </button>
  )
}

export default Tag
