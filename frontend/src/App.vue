<template lang="pug">
  #app.app
    .hero__wrapper
      .hero
        .heading Open Collective
        form(@submit.prevent="fetchData")
          input(v-model="query", placeholder="Search for a collective...")
        .tags
          a.tag(v-for="tag in tags", href="javascript:;", @click="searchByTag(tag)") {{ tag }}

    .collectives
      template(v-if="collectives.length > 0")
        .collective(v-for="collective in collectives")
          .collective__image(:style="{ backgroundImage: `url(https://opencollective.com/static/images/defaultBackgroundImageCollective.jpg)` }")
            .collective__avatar(:style="{ backgroundImage: `url(${collective.image})` }")
            .collective__overlay
          .collective__content
            .collective__heading {{ collective.name }}
            .collective__description {{ collective.mission }}
      template(v-else)
        .collectives__empty 
          h2 No results, try searching for something else.

    .pagination(v-if="pagination")
      .pagination__btns
        .pagination__btn.pagination__btn--back(v-if="backBtnVisible" @click="back()") back
        .pagination__btn.pagination__btn--next(v-if="pagination.current_page < pagination.total_pages" @click="next()") next
      .pagination__results {{ pagination.total_objects }} results

</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      collectives: [],
      pagination: {},
      tags: ['open source', 'meetup', 'wwcode', 'movement', 'association', 'studentclub', 'compiler', 'efficient', 'cloud'],
      query: ''
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData (page = 1) {
      const options = {
        params: {
          query: this.query,
          page
        }
      }

      axios.get(`${process.env.API_BASE}/collectives`, options).then(res => {
        this.collectives = res.data.collectives
        this.pagination = res.data.meta.pagination
      })
    },
    searchByTag (tag) {
      this.query = tag
    },
    back () {
      this.fetchData(this.pagination.current_page - 1)
    },
    next () {
      this.fetchData(this.pagination.current_page + 1)
    }
  },
  watch: {
    'query' () {
      this.fetchData()
    }
  },
  computed: {
    backBtnVisible () {
      return this.pagination.current_page !== 1 && this.pagination.current_page <= this.pagination.total_pages
    },
    nextBtnVisible () {
      return this.pagination.current_page < this.pagination.total_pages
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/normalize.css/normalize'
@import './sass/_base'
@import './sass/_content'
@import './sass/_fonts'

.app
  margin-bottom: 4em

.hero__wrapper
  width: 100%
  overflow: hidden

.hero
  padding: 7em 0 10em
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  background-color: #fff
  box-shadow: 0 0 220px rgba(0,0,0,0.15)
  border-bottom-left-radius: 100%
  border-bottom-right-radius: 100%
  width: 300%
  margin-left: -100%
  position: relative

  form
    width: 100%
    display: flex
    align-items: center
    justify-content: center

  input
    width: 100%
    max-width: 600px
    padding: 0.75em 1.5em
    font-size: 1.25em
    border-radius: 10em
    background-color: #efefef
    margin-bottom: 1em
    color: #333
    &::placeholder
      color: #757575

.tags
  display: flex
  flex-wrap: wrap
  max-width: 28em
  justify-content: center

.tag
  font-size: 0.9em
  margin: 0 0.35em 0.5em
  color: rgba(0,0,0,0.5)

.pagination
  max-width: 1080px
  overflow: hidden
  margin: 0 auto
  width: 100%
  display: flex
  justify-content: space-between
  flex-direction: column
  padding: 0 0.75em
  font-size: 0.9em

  &__btns
    display: flex
    justify-content: center

  &__btn
    cursor: pointer
    color: blue
    font-weight: 600
    text-transform: uppercase

    &--next
      margin-left: auto

  &__results
    margin-top: 0.25em
    text-align: right
    opacity: 0.5

.collectives
  margin: -4.5em auto 0
  max-width: 1080px
  overflow: hidden
  
  &__empty
    margin-top: 10em
    text-align: center
    opacity: 0.65

.heading
  font-size: 2em
  font-weight: 800
  margin-bottom: 0.5em

.collective
  max-width: calc(25% - 2em)
  height: 340px
  width: 100%
  background-color: #fff
  margin: 0 1em 2em
  box-shadow: 0 2px 80px rgba(0,0,0,0.075)
  border-radius: 6px
  overflow: hidden
  font-size: 0.9em
  transition: 0.15s ease
  float: left

  &:hover
    transform: translateY(-2px)
    box-shadow: 0 0 20px rgba(0,0,0,0.05)
    cursor: pointer

  &__content
    padding: 1em 1.25em
    background-color: #fff
    border-radius: 4px
    position: relative

  &__image
    width: 100%
    height: 140px
    background-size: cover
    background-position: center
    display: flex
    align-items: center
    justify-content: center
    position: relative

  &__overlay
    background-color: rgba(0,0,0,0.35)
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0

  &__avatar
    width: 4em
    height: 4em
    background-position: center
    background-size: contain
    z-index: 1

  &__heading
    font-size: 1.25em
    font-weight: 600
    margin-bottom: 0.35em
    line-height: 1.24

  &__description
    line-height: 1.6
    font-size: 1em
    text-overflow: ellipsis
    color: rgba(0,0,0,0.5)
</style>
