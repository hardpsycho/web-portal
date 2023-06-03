import React, { type ReactElement, type ErrorInfo, Suspense } from 'react'
import { CircleLoader } from 'shared/ui/CircleLoader'
import { PageWithError } from 'widgets/PageWithError'

interface ErrorBoundaryProps {
    children: ReactElement
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense fallback={<CircleLoader />}>
                    <PageWithError />
                </Suspense>
            )
        }

        return children
    }
}
