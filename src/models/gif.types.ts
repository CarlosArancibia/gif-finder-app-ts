export interface GifData {
  id: string
  title: string
  images: Images
}

export interface Images {
  original: FixedHeight
}

export interface FixedHeight {
  height: string
  width: string
  size: string
  url: string
}
