export interface SearchEngine {
  inputQuery: string[]
  bodyQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  google: {
    inputQuery: ["input[name='q']"],
    bodyQuery: ['#place-'],
    sidebarContainerQuery: ['#rhs'],
    appendContainerQuery: ['#rcnt'],
  },
  stackoverflow: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="s-prose js-post-body"]'],
    sidebarContainerQuery: ['#sidebar'],
    appendContainerQuery: [],
  },
}
