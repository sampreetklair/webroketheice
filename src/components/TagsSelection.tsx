'use client'

import React, { useState } from 'react'
import Tag from './Tag'

interface TagsSelectionProps {
  categories: {
    name: string
    tags: string[]
  }[]
  onSubmit: (selectedTags: string[]) => void
}

const TagsSelection: React.FC<TagsSelectionProps> = ({
  categories,
  onSubmit,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleSubmit = () => {
    onSubmit(selectedTags)
  }

  return (
    <div className="flex flex-col items-start space-y-6">
      {categories.map((category) => (
        <div key={category.name} className="">
          <p className="text-md uppercase tracking-wider font-medium">
            {category.name}
          </p>
          <div className="flex flex-wrap space-x-2">
            {category.tags.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                selected={selectedTags.includes(tag)}
                onClick={() => handleTagClick(tag)}
              />
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 mt-4 rounded-md font-medium text-sm bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  )
}

export default TagsSelection
