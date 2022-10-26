import { useRouter } from 'next/router'
import { mutate } from 'swr'
import Link from 'next/link'

import styles from "../../../styles/terminal.module.css"

import InlineCodeBlock from '../MDX.InlineCodeBlock'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../../lib/fetcher'
import LoadingDots from '../Domains/LoadingDots'
import LinuxLogo from '../Logos/LinuxLogo'

const NewInput = ({ formId, demoForm, forNewDemo = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    function_value: demoForm.function_value,
    function_name: demoForm.function_name,
  })

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/demos/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/demos/${id}`, data, false) // Update the local data without a revalidation
      router.push('/')
    } catch (error) {
      setMessage('Failed to update')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/demos', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/')
    } catch (error) {
      setMessage('')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value =
      target.name === 'demo_token' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  /* Makes sure demo info is filled for demo name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {}
    if (!form.function_value) err.function_value = 'Function is required'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewDemo ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  // domain stuff
  

  const [domain, setDomain] = useState('')

  const { data: domainList, mutate: revalidateDomains } = useSWR(
    `/api/domains/get-domains`,
    fetcher
  )
  const [disabled, setDisabled] = useState(true)
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (domain.length == 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [domain])

  useEffect(() => {
    if (adding) setDisabled(true)
  }, [adding])

  const [projectName, setProjectName] = React.useState('')

  return (
    <>
    <form
          id={formId}
          onSubmit={async (e) => {
            
            e.preventDefault()
            const errs = formValidate()
            if (Object.keys(errs).length === 0) {
              forNewDemo ? postData(form) : putData(form)
            } else {
              setErrors({ errs })
            }
            setAdding(true)
            try {
              await fetch(`/api/domains/add-domain?domain=${domain}.servingtokens.com`)
              await revalidateDomains()
            } catch (error) {
              alert(error.message)
            } finally {
              setAdding(false)
            }
          }}
        >
          <span className="flex flex-row justify-start">Project Endpoint:</span>
            <Link href="https://buildfunctions-demos.vercel.app/api/functions/newfile" className="mb-2 text-2xl leading-tight underline">buildfunctions-demos.vercel.app/api/functions/newfile</Link>

            <span className="flex flex-row justify-start">Project name:</span>
            <span className="mb-1 mt-2 text-2xl leading-tight underline">{projectName}</span>
            <div className="mb-4 bg-gray-800 rounded text-white shadow-lg flex flex-container justify-center max-w-4xl py-5">
            </div>               
          <span className='flex flex-row justify-start'>Name: </span>
          <input
            placeholder='my-project'
            name='function_name'
            value={form.function_name}
            onChange={handleChange}
            className='mb-2 mt-2 bg-gray-900 text-teal-200 text-center text-3xl'
            type="text"
            onInput={(e) => {
              setDomain(e.target.value)
            }}
            autoComplete="off"
            // pattern="^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$"
            // required
          />
        
          <br />
        <div className="">
          <ul className="flex flex-row justify-center">
            <li className="area-full px-3">
              <span className='flex flex-row justify-start'>Function: </span>
              <div id="message" className="mt-2 bg-gray-900 y-scrollbar-hidden w-80 rounded form-text area border border-teal-500 dark:text-white pl-2 text-md text-center text-gray-900" placeholder="welcome to servingtokens.com">
                <div className='mb-2' style={{ aspectRatio: '720 / 139' }}>
                <b className='flex flex-row justify-start mb-2 mt-2 ml-1'>#/bin/bash </b>
                  <InlineCodeBlock width='720' height='239' className='max-w-full'>
                    <b className='bg-opacity-80 pb-2 flex-row justify-start'></b>
                                                   
                      <div className='flex flex-grow justify-center'>
                        <textarea
                          content='default-src'
                          type='text/plain'
                          className={styles.root}
                          placeholder='$'
                          name='function_value'
                          value={form.function_value}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </InlineCodeBlock>
                  </div>  
                </div>
                    <div className="flex flex-row justify-center pt-4">
                    <button
                    onClick={() => {
                      fetch('/api/demos', { method: 'POST' })
                    }}
                      type="submit"
                      disabled={disabled}
                      className={`${
                        disabled
                          ? 'cursor-not-allowed bg-gray-900 rounded border-1 pl-1 pr-1 text-5xl btn-sm text-teal-200 hover:text-teal-300 flex-row justify-start'
                          : 'bg-gray-700 rounded border-1 pl-1 pr-1 text-5xl btn-sm text-teal-200 hover:text-teal-300 flex-row justify-start'
                      }  text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
                    >
                      {adding ? <LoadingDots /> : 'Build'}
                    </button>
                </div>
              </li>
            
           
            </ul>
          </div>
          <span className="flex flex-row justify-center">
            <LinuxLogo />
          </span> 
      </form>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default NewInput
