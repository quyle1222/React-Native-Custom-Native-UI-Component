import { requireNativeComponent, HostComponent } from 'react-native'

type Props = {
  src: string
  borderRadius: number
  resizeMode: 'cover' | 'contain' | 'stretch'
}

const ImageView: HostComponent<Props> =
  requireNativeComponent('RCTImageViewCustom')
  
export default ImageView
