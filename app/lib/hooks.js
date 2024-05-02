import { useDispatch, useSelector, useStore } from 'react-redux'


//use throughout the app instead of using the hooks directly becuase nextjs is ssr compatible.


export const useAppDispatch = useDispatch.withTypes()
export const useAppSelector = useSelector.withTypes()
export const useAppStore = useStore.withTypes()
