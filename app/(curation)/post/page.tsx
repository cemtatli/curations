'use client'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import toast from 'react-hot-toast'

const PostData = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [keywords, setKeywords] = useState('')
  const [subCategory, setSubCategory] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    if (!executeRecaptcha) {
      toast.error('Execute recaptcha not available yet')
    } else {
      const gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit')
      const response = await fetch('/api/post-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, url, keywords, subCategory, gRecaptchaToken }),
      })
      const data = await response.json()
    }
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
