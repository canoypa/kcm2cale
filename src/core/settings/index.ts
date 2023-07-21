import { createInstance } from 'localforage'
import { defaultSettings } from './default'
import { AppSettingsScheme } from './types'

type AppSettingsKeys = keyof AppSettingsScheme
type AppSettingsValue<K extends AppSettingsKeys> = AppSettingsScheme[K]

class AppSettingsInstance {
  private readonly DATABASE_NAME = 'Kcm2Cale'
  private readonly STORE_NAME = 'settings'

  private readonly store = createInstance({
    name: this.DATABASE_NAME,
    storeName: this.STORE_NAME,
  })

  public get = async <K extends AppSettingsKeys, V = AppSettingsValue<K>>(
    key: K,
  ): Promise<V> => {
    const result = await this.store.getItem<V>(key)

    // 値が存在しない場合デフォルト値を保存して返却
    if (result === null) {
      // Fixme: ??
      const defaultSetting = defaultSettings[key] as unknown as V
      this.set(key, defaultSetting)
      return defaultSetting
    }

    return result
  }

  public set = async <K extends AppSettingsKeys, V = AppSettingsValue<K>>(
    key: K,
    value: V,
  ): Promise<V> => {
    return await this.store.setItem(key, value)
  }
}

export const AppSettings = new AppSettingsInstance()
