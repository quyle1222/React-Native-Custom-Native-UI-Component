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
import { FlatList, Text, View, NativeModules } from 'react-native'
import { Config } from '@/Config'
import { Header, VideoNative } from '@/Components'
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { Constant } from '@/Utils/Constant'

interface props {
  navigation: Object
}

const HomeContainer: FC<props> = () => {
  const ref = useRef<CardStack | null>()
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

  const renderEmptyList = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ alignSelf: 'center' }}>No more</Text>
      </View>
    )
  }

  return (
    <View style={[style.fill, style.itemCenter]}>
      <Header title={t('home.title')} />
      <CardStack
        onSwipedLeft={index => {}}
        onSwipedRight={index => {}}
        ref={refInstance => (ref.current = refInstance)}
        style={{ width: '100%', height: '100%' }}
        renderNoMoreCards={renderEmptyList}
      >
        {Constant.LIST_IMAGE.map(item => {
          return (
            <Card style={{ width: 100, height: 100, backgroundColor: 'red' }}>
              <FastImage
                style={{ flex: 1 }}
                source={{
                  uri: Config.URL_IMAGE + item,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Card>
          )
        })}
      </CardStack>
    </View>
  )
}

export default HomeContainer
