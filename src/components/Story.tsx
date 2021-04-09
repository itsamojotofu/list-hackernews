// import React, { , useTransition } from 'react';
import styled from 'styled-components'
import instance from './../axios'
import { requests } from './../request'

interface Props {
  fetchUrl: string
}

interface Story {
  id: number
  title: string
  by: string
  url: string
  time: string
  kids: []
}

export const fetchTopStories = async (count: number): Promise<Story[]> => {
  const ids = await instance
    .get(`/topstories.json?print=pretty`)
    .then((res) => res.json())
  const stories: any = await Promise.all(
    ids.slice(0, count).map(
      async (id: number): Promise<Story> => {
        const story: Story = await instance
          .get(`/${id}.json?print=pretty`)
          .then((res) => res.json())
        return story
      },
    ),
  )
  console.group(stories)
}
