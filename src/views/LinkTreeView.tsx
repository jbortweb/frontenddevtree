import { useEffect, useState } from 'react'
import { social } from '../data/social'
import DevTreeInput from '../components/DevTreeInput'
import { isValidUrl } from '../utils'
import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfile } from '../api/ArbolAPI'
import { SocialNetwork, User } from '../types'

const LinkTreeView = () => {
  const [devTreeLinks, setDevTreeLinks] = useState(social)

  const queryClient = useQueryClient()
  const user: User = queryClient.getQueryData(['user'])!

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      toast.success('Perfil actualizado')
    },
  })

  useEffect(() => {
    const updatedData = devTreeLinks.map((item) => {
      const userLink = JSON.parse(user.links).find(
        (link: SocialNetwork) => link.name === item.name
      )
      if (userLink) {
        return { ...item, enabled: userLink.enabled, url: userLink.url }
      }
      return item
    })
    setDevTreeLinks(updatedData)
  }, [])

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLink = devTreeLinks.map((item) =>
      item.name === e.target.name ? { ...item, url: e.target.value } : item
    )
    setDevTreeLinks(updatedLink)
  }

  const links: SocialNetwork[] = JSON.parse(user.links)

  const handleEnabledLink = (socialNetwork: string) => {
    const updatedLink = devTreeLinks.map((item) => {
      if (item.name === socialNetwork) {
        if (isValidUrl(item.url)) {
          return { ...item, enabled: !item.enabled }
        } else {
          toast.error('Url no válida')
          return item
        }
      }
      return item
    })

    let updateItems: SocialNetwork[] = []
    const selectedSocialNetwork = updatedLink.find(
      (link) => link.name === socialNetwork
    )
    if (selectedSocialNetwork?.enabled) {
      const id = links.filter((link) => link.enabled).length + 1
      if (links.some((link) => link.name === socialNetwork)) {
        updateItems = links.map((link) => {
          if (link.name === socialNetwork) {
            return {
              ...link,
              enabled: true,
              id,
            }
          } else {
            return link
          }
        })
      } else {
        const newItem = {
          ...selectedSocialNetwork,
          id,
        }
        updateItems = [...links, newItem]
      }
    } else {
      const indexToUpdate = links.findIndex(
        (link) => link.name === socialNetwork
      )
      updateItems = links.map((link) => {
        if (link.name === socialNetwork) {
          return {
            ...link,
            id: 0,
            enabled: false,
          }
        } else if (link.id > links[indexToUpdate].id) {
          return {
            ...link,
            id: link.id - 1,
          }
        } else {
          return link
        }
      })
    }
    setDevTreeLinks(updatedLink)
    queryClient.setQueryData(['user'], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updateItems),
      }
    })
  }
  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map((item) => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
            handleEnabledLink={handleEnabledLink}
          />
        ))}
        <button
          className="bg-cyan-400 p-2 text-lg w-full rounded-lg uppercase text-slate-600 font-bold"
          onClick={() => mutate(queryClient.getQueryData(['user'])!)}
        >
          Guardar cambios
        </button>
      </div>
    </>
  )
}
export default LinkTreeView
