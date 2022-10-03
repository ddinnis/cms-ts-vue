export interface ISystemState {
  usersTotalCount: number
  usersList: any[]
  departmentTotalCount: number
  departmentList: any[]
  roleTotalCount: number
  roleList: any[]
  menuTotalCount: number
  menuList: any[]
  categoryTotalCount: number
  categoryList: any[]
  goodsTotalCount: number
  goodsList: any[]
  storyTotalCount: number
  storyList: any[]
}

export interface IPagePayload {
  pageName: string
  pageUrl: string
  queryInfo: any
  id?: number
}
