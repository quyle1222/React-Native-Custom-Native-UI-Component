import { useTheme } from '@/Hooks'
import { useLazyFetchListMoviesQuery } from '@/Services/modules/movies'
import { Movie } from '@/Services/modules/movies/fetchListMovies'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, Text, View, NativeModules } from 'react-native'
import { Config } from '@/Config'
import { Header, VideoNative } from '@/Components'
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import Video from 'react-native-video'
import { FA5Style } from 'react-native-vector-icons/FontAwesome5'
import { Constant } from '@/Utils/Constant'

interface props {
  navigation: Object
}

const HomeContainer: FC<props> = () => {
  const [page, setPage] = useState<number>(1)
  const [listMovies, setListMovies] = useState<Array<Movie>>([])
  const { Container, Layout, Colors } = useTheme()
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
      <View style={style.viewItem}>
        <View style={Layout.row}>
          <FastImage
            style={style.image}
            source={{
              uri: Config.URL_IMAGE + backdrop_path,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={style.container}>
            <Text style={style.text}>{title}</Text>
            <Text>{`Release date: ${date}`}</Text>
            <Text style={{ color: Colors.text }} numberOfLines={7}>
              {overview}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={[style.fill, style.itemCenter]}>
      <Header title={t('home.title')} />
      <VideoNative style={style.video} url={Constant.URL_VIDEO} />
      <FlatList
        data={listMovies}
        extraData={listMovies}
        keyExtractor={(_, index: number) => index.toString()}
        renderItem={({ item }: { item: Movie }) => renderItem(item)}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
      />
    </View>
  )
}

export default HomeContainer
