'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cards } from '@/data'

const AddBookmarkForm = () => {
  const [data, setData] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)

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
  const autoFillData = () => {
    setLoading(true)
    try {
      if (isValidURL(data)) {
        toast.promise(
          new Promise(resolve => {
            setTimeout(() => {
              resolve('Data filled successfully')
            }, 2000)
          }),
          {
            loading: 'Loading...',
            success: 'Data filled successfully',
            error: 'Something went wrong',
          },
        )
      }
    } finally {
      setLoading(false)
      setData('')
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      isValid ? toast.success('Link submitted successfully') : toast.error('Please enter a valid link')
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setData('')
    }
  }

  return (
    <form className="flex w-full flex-col items-end justify-center gap-5" onSubmit={handleSubmit}>
      <div className="flex w-full flex-1 flex-col gap-2">
        <Label htmlFor="submit_link">Select Category</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {cards.map(item => (
              <SelectItem key={item.subcategoryId} value={item.subcategoryId}>
                {item.subcategoryId}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full flex-1 flex-col gap-2">
        <Label htmlFor="submit_link">Link</Label>
        <Input
          id="submit_link"
          type="text"
          name="submit_link"
          value={data}
          onChange={handleChange}
          placeholder="https://epigra.com"
        />
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <Button
          type="button"
          onClick={autoFillData}
          variant="outline"
          className="disabled:animate-pulse disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gradient-to-r disabled:from-gray-100 disabled:to-gray-200 disabled:text-gray-500"
          disabled={loading}>
          Auto Fill Data
        </Button>
        <Button type="submit" variant="epigra" disabled={data.length === 0 || loading}>
          Submit
        </Button>
      </div>
    </form>
  )
}
export default AddBookmarkForm
