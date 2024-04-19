import { ActionId, ActionImpl } from 'kbar'

export type CommandRootProps = {
  id?: ActionId
  name?: string
  shortcut?: string[]
  keywords?: string
  section?: string
  icon?: string | React.ReactElement | React.ReactNode
  perform?: (currentActionImpl: ActionImpl) => void
  children?: React.ReactNode
}

export type CommandContainerProps = {
  action: CommandRootProps | ActionImpl
  active: boolean
}
