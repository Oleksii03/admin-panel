declare module 'vue-content-loader' {
  import { DefineComponent } from 'vue'

  interface ContentLoaderProps {
    viewBox?: string
    speed?: number
    primaryColor?: string
    secondaryColor?: string
    width?: number | string
    height?: number | string
    preserveAspectRatio?: string
    animate?: boolean
    baseUrl?: string
    rtl?: boolean
  }

  export const ContentLoader: DefineComponent<ContentLoaderProps>
  export const BulletListLoader: DefineComponent<ContentLoaderProps>
  export const CodeLoader: DefineComponent<ContentLoaderProps>
  export const FacebookLoader: DefineComponent<ContentLoaderProps>
  export const ListLoader: DefineComponent<ContentLoaderProps>
  export const InstagramLoader: DefineComponent<ContentLoaderProps>
}