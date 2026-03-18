import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full bg-secondary/5 border border-secondary/20 rounded-3xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-heading mb-4 text-foreground">Something went wrong</h2>
            <p className="text-textlight mb-6">
              We encountered an unexpected error. Please try refreshing the page or contact support if the issue persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors uppercase tracking-widest text-sm font-bold"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <pre className="mt-8 p-4 bg-black/20 rounded-lg text-left text-xs text-destructive overflow-auto max-h-40">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
