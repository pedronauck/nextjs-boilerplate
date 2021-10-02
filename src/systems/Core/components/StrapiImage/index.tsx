import { FC } from 'react'
import Image from 'next/image'

type Props = {
  image?: any
}

export const StrapiImage: FC<Props> = ({ image }) => {
  if (!image) return null
  return (
    <Image
      src={image.url}
      width={image.width as any}
      height={image.height as any}
      alt={image.alternativeText || ''}
      loader={({ src, width, height }: any) => {
        return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}?w=${width}&h=${height}&q=80`
      }}
    />
  )
}
