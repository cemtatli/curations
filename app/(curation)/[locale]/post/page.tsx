'use client'
import React, { useState } from 'react'

const PostData = () => {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [keywords, setKeywords] = useState('')
  const [subCategory, setSubCategory] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const response = await fetch('/api/post-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, url, keywords, subCategory }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        URL:
        <input type="url" value={url} onChange={e => setUrl(e.target.value)} />
      </label>
      <label>
        Keyword:
        <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)} />
      </label>
      <label>
        Subcategory:
        <input type="text" value={subCategory} onChange={e => setSubCategory(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PostData
