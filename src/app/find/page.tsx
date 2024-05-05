'use client'
import TagsSelection from '@/components/TagsSelection'
import React from 'react'
import * as SubframeCore from '@subframe/core'
import { TextField } from '@/subframe/components/TextField'

const categories = [
  {
    name: 'Movies & TV',
    tags: [
      'Action',
      'Adventure',
      'Animation',
      'Comedy',
      'Drama',
      'Documentaries',
      'Horror',
      'Sci-Fi',
      'Fantasy',
      'Thriller',
    ],
  },
  {
    name: 'Music',
    tags: [
      'Rock',
      'Pop',
      'Hip Hop',
      'Electronic',
      'Classical',
      'Jazz',
      'Blues',
      'Country',
      'Folk',
    ],
  },
  {
    name: 'Books & Reading',
    tags: [
      'Fiction',
      'Non-Fiction',
      'Mystery',
      'Fantasy',
      'Sci-Fi',
      'Romance',
      'Thrillers',
      'Self-Help',
    ],
  },
  {
    name: 'Sports & Fitness',
    tags: [
      'Running',
      'Swimming',
      'Cycling',
      'Yoga',
      'Football',
      'Basketball',
      'Baseball',
      'Hockey',
    ],
  },
  {
    name: 'Travel & Outdoors',
    tags: [
      'Hiking',
      'Camping',
      'Backpacking',
      'Rock Climbing',
      'Scuba Diving',
      'Photography',
    ],
  },
  {
    name: 'Gaming',
    tags: ['Board Games', 'Video Games', 'Card Games', 'Role-Playing Games'],
  },
  {
    name: 'Arts & Crafts',
    tags: [
      'Painting',
      'Drawing',
      'Sculpting',
      'Photography',
      'Music',
      'Writing',
    ],
  },
  {
    name: 'Food & Cooking',
    tags: [
      'Baking',
      'Trying new cuisines',
      'Vegetarian/Vegan',
      'Specific cuisines (Italian, Mexican, etc.)',
    ],
  },
  {
    name: 'Science & Technology',
    tags: ['Astronomy', 'Robotics', 'Artificial Intelligence', 'Programming'],
  },
  {
    name: 'Random & Fun',
    tags: [
      'Pets: Dog lover',
      'Pets: Cat lover',
      'Coffee/Tea Enthusiast',
      'Movie Buff',
      'Gamer',
      'Foodie',
      'Travel Addict',
      'Night Owl',
      'Bookworm',
      'Always learning',
      'Terrible at jokes (but loves them anyway)',
    ],
  },
]

function ExploreHomePage() {
  const handleSubmit = (selectedTags: string[]) => {
    console.log('Selected tags:', selectedTags)
  }

  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background pt-12 pr-6 pb-12 pl-6">
      <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
        <div className="flex w-full max-w-[576px] flex-col items-center justify-center gap-6 pt-6 pr-6 pb-6 pl-6">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <SubframeCore.Icon
              className="text-heading-1 font-heading-1 text-default-font"
              name="FeatherSparkles"
            />
            <span className="w-full text-heading-1 font-heading-1 text-default-font text-center">
              Explore AI
            </span>
            <span className="text-body font-body text-subtext-color text-center">
              Discover and create custom Ice Breakers 🧊 to superpower your
              employees, business, and creativity all from your computer.
            </span>
          </div>
          <TextField
            className="h-auto w-full flex-none"
            label=""
            helpText=""
            icon="FeatherSearch"
          >
            <TextField.Input placeholder="Search" />
          </TextField>
        </div>
        <div>
          <TagsSelection categories={categories} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default ExploreHomePage
