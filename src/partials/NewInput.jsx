import { useRouter } from 'next/router'
import { mutate } from 'swr'
import Link from 'next/link'

import styles from "../styles/terminal.module.css"

import InlineCodeBlock from '../components/Blocks/MDX.InlineCodeBlock'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
// import LoadingDots from '../Domains/loading-dots'
import LinuxLogo from '../components/Logos/LinuxLogo'
import fetchAPI from '../../lib/fetch-api'

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
        <form id={formId} onSubmit={handleSubmit} className="flex flex-grow justify-center bg-gray-300 bg-opacity-75 rounded pt-1 m-4">
          {/* <span className="flex flex-row justify-start">Project Endpoint:</span>
          <Link href="https://buildfunctions-demos.vercel.app/api/functions/newfile" className="mb-2 text-2xl leading-tight underline">buildfunctions-demos.vercel.app/api/functions/newfile</Link>

          <span className="flex flex-row justify-start">Project name:</span>
          <span className="mb-1 mt-2 text-2xl leading-tight underline">{projectName}</span>
      <span className='flex flex-row justify-start'>Name: </span> */}
          <div className="flex flex-grow justify-center">
            <div className="relative flex-col justify-center w-full px-3 py-1">
              <div className="flex flex-col justify-center pl-20 pr-20">
              </div>
              <div className="flex flex-grow justify-center">

                <input
                  placeholder="Choose your project name..."
                  className="justify-center text-gray-200 bg-gray-600 w-full py-2 px-3 leading-tight rounded outline-2 focus:shadow-outline focus:bg-gray-700 focus:ring-1 focus:ring-purple-300 focus:text-indigo-50"
                  name='function_name'
                  value={form.function_name}
                  onChange={handleChange}
                  type="text" />

              </div>
              <b className='flex flex-row justify-start mb-2 mt-2 ml-1 text-white'>#!bin/bash </b>
              <div className="leading-tight btn-sm mb-2 focus:bg-gray-700 flex-row justify-end border-shadowed border-white text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 ">
                <button
                  onClick={async () => {
                    await fetchAPI(`/demos`, { method: 'POST' })
                    await mutate()
                    
                  }}
                  type="submit"
                >
                  Build
                </button>

                {/* <button
                  type="submit"
                  onClick={
                    async () => router.push('/console/status')
                  }
                >
                  Build
                </button> */}
              </div>
              <InlineCodeBlock width='720' height='239' className='max-w-full'>
                <textarea
                  rows="28"
                  className="rounded form-text area w-full bg-black border border-gray-400 focus:border-white text-violet-600 dark:text-gold-100 pl-2 pt-2 pb-2"
                  placeholder="$"
                  name='function_value'
                  value={form.function_value}
                  onChange={handleChange}
                  type="text"
                  onInput={(e) => {
                    setDomain(e.target.value)
                  }}
                  autoComplete="off" />
              </InlineCodeBlock>
              <br />
              <div className="flex flex-row justify-left w-full px-3 py-3 pl-4 text-base text-white"></div>
              {/* <div className="leading-tight btn-sm focus:bg-gray-700 flex-container justify-center border-shadowed border-white text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 ">

                            <button
                              type="button"
                              onClick={
                                async () => Router.push('/logs')
                              }
                            >
                                Build
                            </button>
                          
                          </div> */}
              <div className="flex flex-grow justify-center">


                        {/* <SearchLogo size={35} className="flex flex-grow justify-center pr-3 py-1 mr-2 bg-transparent cursor-pointer" onClick={handleFocus} /> */}
                        {/* <input
                placeholder="Choose your project name..."
                className="justify-center text-gray-200 bg-gray-600 w-full py-2 px-3 leading-tight rounded outline-2 focus:shadow-outline focus:bg-gray-700 focus:ring-1 focus:ring-purple-300 focus:text-indigo-50"
                aria-label="Choose your project name"
                value={form.function_name}
                onChange={handleChange}
                type="text"
              /> */}

              </div>
            </div>
          </div>

          <div>
            {Object.keys(errors).map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </div>
        </form>
    </>
  )
}

export default NewInput
