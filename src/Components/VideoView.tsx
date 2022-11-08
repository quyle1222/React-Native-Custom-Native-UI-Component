import { requireNativeComponent, HostComponent, ViewStyle } from 'react-native'
type Props = {
  url: string
  style: ViewStyle
  onChange?: Function
}
const VideoView: HostComponent<Props> =
  requireNativeComponent('NativeView')

export default VideoView
