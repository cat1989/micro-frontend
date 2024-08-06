import * as React from 'react'

type GuideProps = React.PropsWithChildren<{}>

const Guide: React.FC<GuideProps> = ({
    children,
}: GuideProps) => {
    React.useEffect(() => {
        return () => {
            const customEvent = new CustomEvent("beforeRouteLeave")
            window.dispatchEvent(customEvent)
        }
    }, [])
    return (
        <>{children}</>
    )
}

export default Guide
