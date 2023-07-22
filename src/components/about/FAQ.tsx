import { FC } from 'react'

export const FAQ: FC = () => {
  return (
    <section>
      <p>あるかもしれない質問の答えです。</p>

      <section>
        <h3>何ができますか？</h3>
        <p>今の所最低限の編成機能しかありません。</p>
        <p>じわじわ開発します :/</p>
      </section>

      <section>
        <h3>編成は共有できますか？</h3>
        <p>現時点では出来ません。</p>
        <p>
          URL
          を見る限り共有できそうですが、編成のデータは端末に保存され他の人が見ることは出来ません。
        </p>
      </section>
    </section>
  )
}
