import { Suspense } from "react";
export const Loading = ()=>{
    return <div className="w-full h-screen flex items-center justify-center">
       <span className="loader"></span>
    </div>
}

export const SuspenseContainer = ({children}) => {
    return <Suspense fallback={<Loading/>}>{children}</Suspense>
}