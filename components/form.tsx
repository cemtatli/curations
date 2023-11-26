'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SubmitLinkForm = () => {
  const [data, setData] = useState('')
  const [isValid, setIsValid] = useState(false)

  const isValidURL = (url: string) => {
    const pattern = new RegExp(
      /^(https?:\/\/)?((www\.)?[\w-]+(\.[a-z]{2,})+|(\d{1,3}\.){3}\d{1,3})(:\d{1,5})?(\/\S*)?$/,
      'i',
    )
    return pattern.test(url)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setData(inputValue)
    setIsValid(isValidURL(inputValue))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValid) setData('')
  }

  return (
    <form className="flex w-full items-end justify-center gap-2.5 max-md:flex-col" onSubmit={handleSubmit}>
      <div className="flex w-full flex-1 flex-col gap-2">
        <Label htmlFor="submit_link">Link</Label>
        <Input
          id="submit_link"
          type="text"
          className="invalid:border-red-600"
          value={data}
          onChange={handleChange}
          placeholder="https://epigra.com"
        />
      </div>
      <Button type="submit" variant="epigra" disabled={data.length === 0 || !isValid}>
        Submit
      </Button>
    </form>
  )
}
export default SubmitLinkForm
