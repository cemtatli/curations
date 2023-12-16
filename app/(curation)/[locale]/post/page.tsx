'use client'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import toast from 'react-hot-toast'

const PostData = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [url, setUrl] = useState('')

  const [subCategoryId, setSubCategoryId] = useState('')

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
        body: JSON.stringify({ url, subCategoryId, gRecaptchaToken }),
      })
      const data = await response.json()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input type="url" value={url} onChange={e => setUrl(e.target.value)} />
      </label>
      <label>
        Subcategory:
        <input type="text" value={subCategoryId} onChange={e => setSubCategoryId(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PostData
