'use client'

import { useRef } from 'react'
import {Provider} from 'react-redux'
import {makeStore} from './lib/store.js'

export default function StoreProvider({children}){
    const storeRef = useRef()
    if(!storeRef.current){
        // Create the store the first time this renders
        storeRef.current = makeStore()
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}
