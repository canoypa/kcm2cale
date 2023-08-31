import { useRouter } from 'next/router'
import { FC } from 'react'
import { useEffectOnce } from 'react-use'
import { useCreateNewFleet } from './useCreateNewFleet'

// 編成を新規作成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useRouter()
  const createNewFleet = useCreateNewFleet()

  useEffectOnce(() => {
    createNewFleet().then((fleetId) => {
      replace(`/fleet/${fleetId}`)
    })
  })

  return null
}
export default NewFleet
