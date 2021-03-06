/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from '@/Hooks'
import { useLazyFetchListMoviesQuery } from '@/Services/modules/movies'
import { Movie } from '@/Services/modules/movies/fetchListMovies'
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import {
  FlatList,
  Text,
  View,
  Dimensions,
  UIManager,
  findNodeHandle,
} from 'react-native'
import { Config } from '@/Config'
import { Header } from '@/Components'
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import VideoView from '@/Components/VideoView'

const { width } = Dimensions.get('window')

const HomeContainer: FC = () => {
  const [page, setPage] = useState<number>(1)
  const [listMovies, setListMovies] = useState<Array<Movie>>([])
  const { Container, Layout, Fonts } = useTheme()
  const { home: style } = Container
  const { t } = useTranslation()
  const [fetchListMovies, { data }] = useLazyFetchListMoviesQuery()
  const results = useMemo(() => data?.results ?? [], [data?.results])

  useEffect(() => {
    page === 1
      ? setListMovies(results)
      : setListMovies([...listMovies, ...results])
  }, [results])

  useEffect(() => {
    fetchListMovies(page)
  }, [page])

  const onEndReached = useCallback(() => setPage(state => state + 1), [])

  const renderItem = ({
    overview,
    backdrop_path,
    title,
    release_date,
  }: Movie) => {
    const date = moment(release_date).format('DD/MM/yyyy')
    return (
      <View
        style={{
          width: width,
          marginVertical: 5,
        }}
      >
        <View style={Layout.row}>
          <FastImage
            style={style.image}
            source={{
              uri: Config.URL_IMAGE + backdrop_path,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View
            style={{
              flex: 1,
              paddingHorizontal: 5,
              maxHeight: width * 0.4,
              overflow: 'hidden',
            }}
          >
            <Text style={{ ...Fonts.textSmall, fontWeight: 'bold' }}>
              {title}
            </Text>
            <Text>{`Release date: ${date}`}</Text>
            <Text numberOfLines={7}>{overview}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={[style.fill, style.itemCenter]}>
      <Header title={t('home.title')} />
      <VideoView
        onChange={(status: string, index: number) => {
          console.log('status', status)
          console.log('index', index)
        }}
        style={{ width: width, height: 200 }}
        url="https://v190.iiiijjjjij.com/xbase/us40/xcfiles/videos/2022/7/14/vietsub_pinyin_co_gai_ay_noi_voi_toi_uu_uu_cover_tik_tok_6931702753407677545.mp4"
      />
      <FlatList
        data={listMovies}
        keyExtractor={(_, index: number) => index.toString()}
        renderItem={({ item }: { item: Movie }) => renderItem(item)}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
      />
    </View>
  )
}

export default HomeContainer
