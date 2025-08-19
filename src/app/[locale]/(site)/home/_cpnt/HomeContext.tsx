import { useSiteBlueprint } from '@/app/_context/CustomerContext'
import { useDevicePlatform } from '@/app/_context/DeviceContext'
import { useChannelTalkChatbotController } from '@/external/channel-talk/component/ChannelTalkContext'
import React, { ReactNode, useContext } from 'react'
import { useOnLoadMain } from '@/client/store/home/hook'
import { Main } from '@/repository/client/object/main'
import { useStyle } from '@/ui/context/StyleContext'
import VnFloatingMenu from './VnFloatingMenu'

const STYLE_ID = 'page_home'
const HomeContext = React.createContext<Main | undefined>(undefined)

export function HomeContextProvider({ children }: { children?: ReactNode }) {
  const style = useStyle(STYLE_ID)

  const { target, country } = useSiteBlueprint()
  const platform = useDevicePlatform()

  const { payload: mainData } = useOnLoadMain(target, platform, country)

  const chatbotController = useChannelTalkChatbotController()

  return (
    <HomeContext.Provider value={mainData}>
      {target.private && country.vietnam && <VnFloatingMenu />}
      {children}
      {mainData?.floatingmenu && mainData?.floatingmenu?.length > 0 && (
        <div className={style.chatbot_area}>
          {mainData.floatingmenu.map((menu, i) => {
            const isAction = menu.action === '@click#chatbot'
            const onclick = isAction
              ? () => {
                  chatbotController.showChat()
                }
              : undefined

            return (
              <div
                key={`id_${i}`}
                className={style.chat_icon}
                style={{ backgroundImage: `url('${menu.icon}')` }}
                onClick={onclick}>
                {!isAction && (
                  <a
                    href={menu.action}
                    target={'_blank'}
                    style={{ display: 'block', width: '100%', height: '100%' }}
                  />
                )}
              </div>
            )
          })}
        </div>
      )}
    </HomeContext.Provider>
  )
}

export function useHomeMain() {
  const context = useContext(HomeContext)
  return context
}
