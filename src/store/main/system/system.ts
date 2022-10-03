import { Module } from 'vuex'
import { ISystemState, IPagePayload } from './types'
import { IRootState } from '../../types'

import {
  getPageList,
  deletePageData,
  newPageData,
  editPageData
} from '@/service/main/system/system'
import { firstCapitalLetter } from '@/utils/firstCaptialLetter'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => ({
    usersList: [],
    usersTotalCount: 0,
    roleList: [],
    roleTotalCount: 0,
    menuList: [],
    menuTotalCount: 0,
    goodsList: [],
    goodsTotalCount: 0,
    departmentList: [],
    departmentTotalCount: 0,
    categoryList: [],
    categoryTotalCount: 0,
    storyList: [],
    storyTotalCount: 0
  }),
  mutations: {
    changeUsersList(state, payload) {
      state.usersList = payload
    },
    changeUsersCount(state, payload: number) {
      state.usersTotalCount = payload
    },
    changeRoleList(state, payload) {
      state.roleList = payload
    },
    changeRoleCount(state, payload: number) {
      state.roleTotalCount = payload
    },
    changeMenuList(state, payload) {
      state.menuList = payload
    },
    changeMenuCount(state, payload: number) {
      state.menuTotalCount = payload
    },
    changeGoodsList(state, payload) {
      state.goodsList = payload
    },
    changeGoodsCount(state, payload: number) {
      state.goodsTotalCount = payload
    },
    changeDepartmentList(state, payload) {
      state.departmentList = payload
    },
    changeDepartmentCount(state, payload: number) {
      state.departmentTotalCount = payload
    },
    changeCategoryList(state, list: any[]) {
      state.categoryList = list
    },
    changeCategoryCount(state, payload: number) {
      state.categoryTotalCount = payload
    },
    changeStoryList(state, list: any[]) {
      state.storyList = list
      console.log(list)
    },
    changeStoryCount(state, count: number) {
      state.storyTotalCount = count
      console.log(count)
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        const listData: any[] = (state as any)[`${pageName}List`]
        return listData
      }
    },
    pageListDataCount(state) {
      return (pageName: string) => {
        const listCount = (state as any)[`${pageName}TotalCount`] ?? 0
        return listCount
      }
    }
  },
  actions: {
    async getPageListDataAction({ commit }, payload: IPagePayload) {
      // const pageName = payload.pageName
      let pageUrl = ''
      switch (payload.pageName) {
        case 'story':
          pageUrl = '/story/list'
          break
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
        case 'menu':
          pageUrl = '/menu/list'
          break
        case 'goods':
          pageUrl = '/goods/list'
          break
        case 'department':
          pageUrl = '/department/list'
          break
        case 'category':
          pageUrl = '/category/list'
          break
      }

      // if (pageUrl.length === 0) return
      const result = await getPageList(pageUrl, payload.queryInfo)
      console.log(result)
      // const storyResult = await getPageList('/story/list', payload.queryInfo)
      // const userResult = await getPageList('/users/list', payload.queryInfo)

      console.log(result)
      // console.log(storyResult)
      // console.log(userResult)

      const pageName = firstCapitalLetter(payload.pageName)

      commit(`change${pageName}List`, result.list)
      commit(`change${pageName}Count`, result.totalCount)
    },

    async deletePageDataAction({ dispatch }, payload: IPagePayload) {
      const pageName = payload.pageName
      const deleteId = payload.id
      if (!deleteId) return
      const pageUrl = `/${pageName}/${deleteId}`
      await deletePageData(pageUrl)
      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    },

    async newPageDataAction({ dispatch }, payload: IPagePayload) {
      const pageUrl = `/${payload.pageName}`
      const pageData = payload.queryInfo
      await newPageData(pageUrl, pageData)

      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    },

    async editPageDataAction({ dispatch }, payload: IPagePayload) {
      if (!payload.id) return
      const pageUrl = `/${payload.pageName}/${payload.id}`
      const pageData = payload.queryInfo
      await editPageData(pageUrl, pageData)

      dispatch('getPageListDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 10 }
      })
    }
  }
}

export default systemModule
