'use client'
import parseUrl from '@/lib/parse-url'
import { checkUrlExists } from '@/sanity/lib/sanity-utils'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import toast from 'react-hot-toast'

const PostData = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [url, setUrl] = useState('')
  const [urls, setUrls] = useState('')

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

  // site var mı diye check fonksiyonu

  const checkSiteSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const urlss = parseUrl(urls)
    console.log(urlss)
    const response = await checkUrlExists(urls)
    console.log(response)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="url" value={url} onChange={e => setUrl(e.target.value)} />
        </label>
        <label>
          Subcategory:
          <input type="text" value={subCategoryId} onChange={e => setSubCategoryId(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={checkSiteSubmit}>
        <input type="text" placeholder="site var mı" value={urls} onChange={e => setUrls(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default PostData
